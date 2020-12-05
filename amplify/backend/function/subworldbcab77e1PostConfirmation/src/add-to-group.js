/* eslint-disable-line */ const aws = require('aws-sdk');

exports.handler = async (event, context, callback) => {
  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
  const groupParams = {
    GroupName: 'DONGLE',
    UserPoolId: event.userPoolId,
  };

  const addUserParams = {
    GroupName: 'DONGLE',
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };
  console.log(process.env.GROUP,'PROCESS')

  let isAdmin=false
 const adminEmails=['adu@noctrl.edu']
 if(adminEmails.indexOf(event.request.userAttributes.email)!==-1){
	 console.log("Is adu@noctrl")
	isAdmin=true
 }
 else{
console.log("IS not adu")
 }
  if(isAdmin){
	  groupParams.GroupName='Admin',
	addUserParams.GroupName='Admin'}
  try {
    await cognitoidentityserviceprovider.getGroup(groupParams).promise();
  } catch (e) {
    await cognitoidentityserviceprovider.createGroup(groupParams).promise();
  }
  try {
    await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
    callback(null, event);
  } catch (e) {
    callback(e);
  }
};
