import React ,{useEffect,useState,useRef} from 'react';
import {Auth,Hub} from 'aws-amplify'
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
//import {Button} from 'antd'
import {formStyles} from './Stylesheet'
import QRCode from 'qrcode.react'
import Container from './Container'
import Form from './Form'
function Profile(){
  const [user,setUser]=useState(null)
    const qrContainer=useRef(null)
  const listener = (data) => {
    switch (data.payload.event) {
        case 'signIn':
            break;
        case 'signUp':
            break;
        case 'signOut':
        setUser(null)
            break;
        case 'signIn_failure':
            break;
        case 'tokenRefresh':
            break;
        case 'tokenRefresh_failure':
            break;
        case 'configured':
        break;
        default:
    }}
  useEffect(()=>{
    checkUser()
  Hub.listen('auth',listener)
  },[])
  const checkUser=async()=>{
  try{
    const data=await Auth.currentUserPoolUser()
    console.log(data,'data atribute test')
    const userInfo={username:data.username,...data.attributes}
    setUser(userInfo)
  } catch(err){console.log('error1',err)}}
    if(user){
      console.log(user,'aaaa')
      Auth.currentSession().then((result)=>{console.log('bara',result)})
  return(
    <Container>
      <div style={formStyles.toggleForm} ref={qrContainer}> </div>
<QRCode value="http://google.com/" />
 <h1>Profile</h1>
 <h2>Username: {user.username}</h2>
 <h3>Email: {user.email}</h3>
 <h4>Phone: {user.phone_number}</h4>
 <AmplifySignOut />
 </Container>
  )}
  else{
return (<Form setUser={setUser}></Form>)
  }
}

export default Profile
