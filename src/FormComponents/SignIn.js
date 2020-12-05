/* src/SignIn.js */
import React from 'react'
import Button from './Button'
import {formStyles} from '../Stylesheet'
function SignIn({signIn,updateFormState}) {
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
 <Button onClick={signIn} title="Sign In" />
 </div>
 )
}
export default SignIn;
