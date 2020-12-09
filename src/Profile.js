import React ,{useEffect,useState,useRef} from 'react';
import {Auth,Hub} from 'aws-amplify'
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
//import {Button} from 'antd'
import checkUser from './checkUser'
import {formStyles} from './Stylesheet'
import QRCode from 'qrcode.react'
import Container from './Container'
import {Input,Button} from 'antd'
import Utility from './utility/Utility'
import Form from './Form'
function Profile(){
  const [user,setUser]=useState({})
    const qrContainer=useRef(null)

    async function signOut() {
    try {
await   Auth.signOut()
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }
  const listener = (data) => {
    switch (data.payload.event) {
        case 'signIn':
        checkUser(setUser)
            break;
        case 'signUp':
            break;
        case 'signOut':
        checkUser(setUser)
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
    checkUser(setUser)
  Hub.listen('auth',listener)
  },[])
  if(!Utility.isEmpty(user)){
  return(
    <Container>
      <div style={formStyles.toggleForm} ref={qrContainer}> </div>
<QRCode value="http://google.com/" />
 <h1>Profile</h1>
 <h2>Username: {user.username}</h2>
 <h3>Email: {user.email}</h3>
 <h4>Phone: {user.phone_number}</h4>
 <Button onClick={signOut}>SignOut</Button>
 </Container>
  )}
  else{
return (<Form setUser={setUser}></Form>)
  }
}

export default Profile
