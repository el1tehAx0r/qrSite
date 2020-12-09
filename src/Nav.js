import React, {useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
import {Menu} from 'antd'
import {HomeOutlined,ProfileOutlined,FileProtectOutlined} from '@ant-design/icons'
import checkUser from './checkUser'
import {Hub} from 'aws-amplify'
import Utility from './utility/Utility.js'
const Nav=(props)=>{
const {current}=props
const [user,setUser]=useState({})
  const listener = (data) => {
    switch (data.payload.event) {
        case 'signIn':
        checkUser(setUser)
            break;
        case 'signUp':
            break;
        case 'signOut':
        checkUser(setUser)
            break;
        case 'signIn_failure':
            break;
        case 'tokenRefresh':
            break;
        case 'tokenRefresh_failure':
            break;
        case 'configured':
        break;
        default:
    }}
useEffect(()=>{
checkUser(setUser)
Hub.listen('auth',listener)
},[])
  return (
    <div>
    <Menu selectedKeys={[current]} mode="horizontal">
    <Menu.Item key='first'>
    <Link to={'/'}>
    <HomeOutlined />First
    </Link>
    </Menu.Item>
    <Menu.Item key='home'>
    <Link to={'/home'}>
    <HomeOutlined />Home
    </Link>
    </Menu.Item>
    <Menu.Item key='profile'>
    <Link to={'/profile'}>
    <ProfileOutlined/>Profile
    </Link>
    </Menu.Item>
    {
      !Utility.isEmpty(user)&&(
        <>
    <Menu.Item key='protected'>
    <Link to={'/protected'}>
    <FileProtectOutlined/>Protected
    </Link>
  </Menu.Item>
    <Menu.Item key='performance'>
    <Link to={'/performance/'}>
    <FileProtectOutlined/>Performance
    </Link>
  </Menu.Item>
    <Menu.Item key='admin'>
    <Link to={'/admin'}>
    <FileProtectOutlined/>Admin
    </Link>
  </Menu.Item>
    <Menu.Item key='messages'>
    <Link to={'/messages'}>
    <FileProtectOutlined/>Messages
    </Link>
  </Menu.Item>
</>
)
  }
    </Menu>
  </div>
  )
}
export default Nav
