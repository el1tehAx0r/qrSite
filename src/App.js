import React ,{useState,useEffect,useReducer} from 'react'
import {API} from 'aws-amplify'
import {List,Input,Button} from 'antd'
import 'antd/dist/antd.css'
import {listNotes} from './graphql/queries'
import {onCreateNote} from './graphql/subscriptions'
import {updateNote as UpdateNote,createNote as CreateNote,deleteNote as DeleteNote } from './graphql/mutations'
import './App.css'
import {v4 as uuid} from 'uuid'
  const CLIENT_ID=uuid()
function App() {
  const[users,setUsers]=useState([])
  const [input,setInput]=useState({start:0,limit:5})

  const initialState={
    notes:[],loading:true,error:false,form:{name:'',description:''}
  }
  const [state,dispatch]=useReducer(reducer,initialState)
useEffect(() => {
 fetchNotes()
 const subscription = API.graphql({
 query: onCreateNote
 }).subscribe({
 next: noteData => {
   console.log(noteData,'hernry' )
 const note = noteData.value.data.onCreateNote
 console.log(note)
 if (CLIENT_ID === note.clientId) return
 dispatch({ type: 'ADD_NOTES', note })
 }
 })
 return () => subscription.unsubscribe()
}, [])
async function fetchNotes(){
try{
  const notesData=await API.graphql({
    query:listNotes
  })
  dispatch({type:'SET_NOTES',notes:notesData.data.listNotes.items})
}
catch(err){
  console.log('error:',err)
}
}
useEffect(()=>{
  console.log(state,'aasdkf')
},[state])
  function reducer(state,action){
  switch ((action.type)) {
    case 'SET_NOTES':
    return{...state,loading:false,notes:action.notes}
    case 'ADD_NOTES':
    return{...state,loading:false,notes:[action.note,...state.notes]}
    case 'RESET_FORM':
    return{...state,form:initialState.form}
    case 'SET_INPUT':
    return{...state,form:{...state.form,[action.name]:action.value}}
      case 'ERROR':
      return{...state,loading:false,error:true}
    default:
    return state
  }
  }
  async function createNote(){
    const {form}=state;
    console.log(form)
    if(!form.name||!form.description){
      return alert('please enter name and description')
    }
    const note={...form,clientId:CLIENT_ID,id:uuid()}
    dispatch({type:"ADD_NOTES",note:note})
    dispatch({type:"RESET_FORM"})
    try{
      await API.graphql({
        query:CreateNote,
        variables:{input:note}
      })
    }
    catch(err){
      console.log("error: ",err)
    }
  }
  async function updateNote(note){
const index=  state.notes.findIndex(n=>n.id===note.id)
const notes=[...state.notes]
notes[index].completed=!note.completed
dispatch({type:"SET_NOTES",notes})
try{
  await API.graphql({query:UpdateNote,variables:{input:{id:note.id,completed:notes[index].completed}}})
  console.log('completed update')
}
catch(err){
console.log(err)
}
  }
  function updateInputValues(type,value)
  {
  setInput({...input,[type]:value})
  }
  async function fetchUsers(){
    const {start,limit}=input
    const data=await API.get('userapi',`/users?start=${start}&limit=${limit}`)
    console.log(data)
    setUsers(data.users)
  }

  function onChange(e){
dispatch({type:'SET_INPUT',name:e.target.name,value:e.target.value})
  }
  async function deleteNote({id}){
  const index=state.notes.findIndex(n=>n.id===id)
  const notes=[...state.notes.slice(0,index),...state.notes.slice(index+1)]
  dispatch({type:'SET_NOTES',notes})
try{
  await API.graphql({
    query:DeleteNote,
  variables:{input:{id}}
  })
  console.log('deleted succesffully')
}
catch(err){
  console.log(err,'errors');
}
  }
  function renderItem(item)
  {
    return(
      <List.Item style={styles.item}
      actions={[<p style={styles.p} onClick={()=>updateNote(item)}>{item.completed?'completed':'Mark Completed'}</p>, <p style={styles.p} onClick={()=>deleteNote(item)}>Delete</p>
      ]}>

      <List.Item.Meta title={item.name} description={item.description}/>
      </List.Item>
    )
  }
 return (
 <div style={styles.container}className='App'>
 <Input onChange={onChange} name="name" value={state.form.name}/>
 <Input onChange={onChange} name="description" value={state.form.description}/>
<Button onClick={createNote} type="secondary">Create Note</Button>
 <List loading={state.loading} dataSource={state.notes} renderItem={renderItem}/>
 <Input placeholder="start" onChange={e=>updateInputValues('start',e.target.value)}/>
 <Input placeholder="limit" onChange={e=>updateInputValues('limit',e.target.value)}/>
 {
 users.map((user,index)=>{
  return <div key={index}>
 <h2>{user.name}</h2>
   </div>
 })
}
<button onClick={fetchUsers}>fetchUsers</button>
</div>
)
}
const styles = {
 container: {padding: 20},
 input: {marginBottom: 10},
 item: { textAlign: 'left' },
 p: { color: '#1890ff' }
}
export default App
