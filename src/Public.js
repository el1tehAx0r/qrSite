import React,{useState,useEffect} from 'react';
import Container from './Container';
import {API} from 'aws-amplify'
import {List } from 'antd'
import checkUser from './checkUser'

function Public(){
  const [state,setState]=useState({products:[],loading:true})
  const [user,setUser]=useState({})
  let didCancel=false;
  useEffect(()=>{
  getProducts()
  checkUser(setUser)
  return ()=>didCancel=true
  },[])
  async function getProducts(){
    const data=await API.get('productapi','/product')
    console.log('data:',data)
    if(didCancel) return
  setState({products:data.data.Items,loading:false})
  }
  return (
    <Container>
    <h1>Public route</h1>
      <List itemLayout="horizontal"
        dataSource={state.products}
        loading={state.loading}
        renderItem={item=>(
          <List.Item>
        <List.Item.Meta title={item.name} description={item.price}/>
        </List.Item>
        )}
      />
    </Container>
  )
}
export default Public
