import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {getPerformance} from './graphql/queries'
import {API} from 'aws-amplify'
function Performance(){
  const [performance,setPerformance]=useState(null)
  const [loading,setLoading]=useState(true)
  let {id} =useParams()
  useEffect(()=>{
  fetchPerformanceInfo()
  },[])
  async function fetchPerformanceInfo(){
    try{
  const talkInfo=await API.graphql({
    query:getPerformance,variables:{id},authMode:'API_KEY'
  })
  setPerformance(talkInfo.data.getPerformance)
    }
    catch(error){
      console.log('error unable to fetch',error)
    }
      setLoading(false)
  }
  return(<div><p>performance</p>
{loading&& <h3>Loading...</h3>}
{performance &&(<div><h1>{performance.performer}</h1>
  <h1>{performance.performer}</h1>
  <h1>{performance.performer}</h1></div>)}</div>)}
  export default Performance
