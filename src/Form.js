import React, {useState} from 'react'
import {Auth} from 'aws-amplify'
import SignIn from './FormComponents/SignIn';
import SignUp from './FormComponents/SignUp';
import ConfirmSignUp from './FormComponents/ConfirmSignUp';
import ForgotPassword from './FormComponents/ForgotPassword'
import ForgotPasswordSubmit from './FormComponents/ForgotPasswordSubmit'
import {formStyles}  from './Stylesheet'
const initialFormState={
  username:'',password:'',email:'',confirmationCode:''
}
function Form(props){
  const [formType,setFormType]=useState('signIn')
  const [formState,setFormState]=useState(initialFormState)
  async function updateForm (e){
    console.log(e.target.value)
    const newFormState={...formState,[e.target.name]:e.target.value}
    setFormState(newFormState)
  }
  async function signIn({username,password},setUser){
    try{
      const user=await Auth.signIn(username,password)
      const userInfo={username:user.username,...user.attributes}
      setUser(userInfo)
    }
    catch(error){
      console.log('error signing in', error)
    }
  }
  async function signUp({username,password,email},setFormType){
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email}
        });
        setFormType('confirmSignUp')
      } catch (error) {
        console.log('error signing up:', error);
      }
    }
    async function confirmSignUp({username,confirmationCode}){
      try{
        await Auth.confirmSignUp(username,confirmationCode)
        setFormType('signIn')
      }
      catch(error){
        console.log("error with confirmation", error)
      }
    }
    async function forgotPassword({username},setFormType){
      try{
        await Auth.forgotPassword(username);
        setFormType('forgotPasswordSubmit')
      }
      catch(error){
        console.log('error with password:',error)
      }}
      async function forgotPasswordSubmit({username,confirmationCode,password},setFormType){
        try{
          await Auth.forgotPasswordSubmit(username,confirmationCode,password)
          setFormType("signIn")
        }
        catch(error){
          console.log('error with password reset:',error)
        }}


        function renderForm(){
          switch (formType) {
            case 'signIn':
            return(<SignIn signIn={()=>{signIn(formState,props.setUser)}} updateFormState={(e)=>{updateForm(e)}}></SignIn>)
            case 'confirmSignUp':
            return(<ConfirmSignUp confirmSignUp={()=>{confirmSignUp(formState,setFormType)}} updateFormState={(e)=>{updateForm(e)}}></ConfirmSignUp>)
            case 'signUp':
            return(<SignUp signUp={()=>{signUp(formState,setFormType)}} updateFormState={(e)=>{updateForm(e)}}></SignUp>)
            case 'forgotPassword':
            return(<ForgotPassword forgotPassword={()=>{forgotPassword(formState,setFormType)}}
            updateFormState={(e)=>{updateForm(e)}}/>)
            case 'forgotPasswordSubmit':
            return(<ForgotPasswordSubmit forgotPasswordSubmit={()=>{forgotPasswordSubmit(formState,setFormType)}} updateFormState={(e)=>{updateForm(e)}}/>)
            default:
          }
        }
        return(<div>{renderForm()}
        {formType==='signUp'&& (<p style={formStyles.toggleForm}> Already Have an account? <span style={formStyles.anchor} onClick={()=>{setFormType("signIn")}}>Sign In</span></p>) }
        {formType==='signIn'&& (<>
          <p style={formStyles.toggleForm}><span style={formStyles.anchor} onClick={()=>{setFormType('signUp')}}>Don't have an account sign up</span></p>
          <p style={formStyles.toggleForm}><span style={formStyles.anchor} onClick={()=>{setFormType('forgotPassword')}}>Forgot Password? Reset Here</span></p></>)
          }
      {formType==='forgotPassword' && (<p style={formStyles.toggleForm}><span style={formStyles.anchor} onClick={()=>{setFormType("signIn")}}>  Go Back to Sign In Page</span></p>)}
      {formType==='forgotPassword' && (<p style={formStyles.toggleForm}><span style={formStyles.anchor} onClick={()=>{setFormType("signIn")}}>  Go Back to Up Page</span></p>)}
      {formType==='confirmSignUp' && (<p style={formStyles.toggleForm}><span style={formStyles.anchor} onClick={()=>{setFormType("signUp")}}>Go Back to Signup</span></p>)}
        </div>)
      }
      export default Form;
