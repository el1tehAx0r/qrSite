class Utility{
isEmpty=(obj)=> {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
}
}
const utility = new Utility()
export default utility;
