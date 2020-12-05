/* src/ConfirmSignUp.js */
import React from 'react'
import Button from './Button'
import { formStyles} from '../Stylesheet'
function ConfirmSignUp(props) {
 return (
 <div style={formStyles.container}>
 <input name='confirmationCode'
 placeholder='Confirmation Code'
 onChange={e => {e.persist();props.updateFormState(e)}}
 style={formStyles.input}
 />
 <Button onClick={props.confirmSignUp} title="Confirm Sign Up" />
 </div>
 )
}
export default ConfirmSignUp
