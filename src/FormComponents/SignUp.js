/* src/SignUp.js */
import React from 'react'
import Button from './Button'
import { formStyles } from '../Stylesheet'
function SignUp({ updateFormState, signUp }) {
 return (
 <div style={formStyles.container}>
 <input
 name='username'
 onChange={e => {e.persist();updateFormState(e)}}
 style={formStyles.input}
 placeholder='username'
 />
 <input
 type='password'
 name='password'
 onChange={e => {e.persist();updateFormState(e)}}
 style={formStyles.input}
 placeholder='password'
 />
 <input
 name='email'
 onChange={e => {e.persist();updateFormState(e)}}
 style={formStyles.input}
 placeholder='email'
 />
 <Button onClick={signUp} title="Sign Up" />
 </div>
 )
}
export default SignUp
