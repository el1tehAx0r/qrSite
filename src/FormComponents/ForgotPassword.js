import React from 'react'
import Button from './Button'
import {formStyles} from '../Stylesheet'
function ForgotPassword(props) {
  return (
    <div style={formStyles.container}>
    <input name="username" placeholder="Enter Username"
  onChange={e=>{e.persist();props.updateFormState(e)}} />
  <Button onClick={props.forgotPassword} title="Reset password"/>
  </div>
  )
}

export default ForgotPassword;
