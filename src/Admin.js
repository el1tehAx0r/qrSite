import React,{useState} from 'react'
import './App.css'
import {Input,Button} from 'antd'
import {API} from 'aws-amplify'
import {containerStyle, inputStyle,buttonStyle} from './Stylesheet'
const initialState={name:'',price:''}
function Admin(){
  const [itemInfo,setItemInfo]=useState(initialState)
  function updateForm(e){
const formData={
  ...itemInfo,[e.target.name]:e.target.value
}
  setItemInfo(formData)
  }
async function addItem(){
  try {
    const data={
      body:{...itemInfo,price:parseInt(itemInfo.price)}
    }
    setItemInfo(initialState)
    var abc=await API.post('productapi','/product',data)
    console.log(abc)
  }
  catch(err){
    console.log('error adding item')
  }
}
return (<div style={containerStyle}><Input name ="name" onChange={updateForm} value={itemInfo.name} placeholder='Item name' style={inputStyle}/>
<Input name='price' onChange={updateForm} value={itemInfo.price} style={inputStyle}
placeholder='item bexy'/><Button style={buttonStyle} onClick={addItem}>Hi</Button>
</div>
)
}
export default Admin
