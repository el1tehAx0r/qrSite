import React,{useState} from 'react'
import Button from './Button'
import {formStyles} from '../Stylesheet'
function ForgotPasswordSubmit(props){
  const [password,setPassword]=useState('')
const [confirmationPassword,setConfirmationPassword]=useState('')
return(
  <div style={formStyles.container}>
<input name='confirmationCode' placeholder='Confirmation Code' onChange={e=>{
  e.persist();props.updateFormState(e)}}/>
<input name='password' placeholder='Enter New Password' onChange={e=>{
  e.persist(); props.updateFormState(e); setPassword(e.target.value)}}/>
<input name='confirmPassword' placeholder='Confirm Password'
onChange={e=>{e.persist();setConfirmationPassword(e);setConfirmationPassword(e.target.value)}}/>
<Button onClick={()=>{if(password===confirmationPassword) props.forgotPasswordSubmit()}} title={"Save new password"}/>
  </div>
)
}
export default ForgotPasswordSubmit
