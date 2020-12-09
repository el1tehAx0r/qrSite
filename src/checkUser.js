import {Auth} from 'aws-amplify'
async function checkUser(updateUser){
  const userData=await Auth.currentSession().catch(err=>console.log('error:',err))
  if(!userData){
    console.log('userData: is empty',userData)
  updateUser({})
  return
  }
  const group=userData.getIdToken().payload['cognito:groups']
  const username=userData.getIdToken().payload['cognito:username']
  const email=userData.getIdToken().payload['email']
  const phone=userData.getIdToken().payload['phone']
  const isAuthorized= group.includes('Admin')
  console.log(userData.getIdToken())
  console.log(userData,'userdata')
  updateUser({username:username,email:email,phone:phone,isAuthorized})
}
export default checkUser;
