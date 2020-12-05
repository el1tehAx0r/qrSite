import {Auth} from 'aws-amplify'
async function checkUser(updateUser){
  const userData=await Auth.currentSession().catch(err=>console.log('error:',err'))
  if(!userData){
    console.log('userData: is empty',userData)
  updateUser({})
  return
  }
  const group=userData.getIdToken().payload['cognito:groups']
  const username=userData.getIdToken().payload['cognito:username']
  const isAuthorized= userData.getIdToken().payload['cognito:groups'].includes('Admin')
  updateUser({username:userData.getId})

}
