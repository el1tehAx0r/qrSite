import React, { useState, useEffect } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Public from './Public'
import Profile from './Profile'
import Protected from './Protected'
import Messages from './Messages'
import Admin from './Admin'
import Performance from './Performance'
import Home from './Home'
 const Router=()=>{
   const [current,setCurrent]=useState('first')
   useEffect(()=>{
     setRoute()
     window.addEventListener('hashchange',setRoute)
     return ()=>{window.removeEventListener('hashchange',setRoute)}
   },[])
function setRoute(){
  const location=window.location.href.split('/')
  const pathname=location[location.length-1]
  setCurrent(pathname?pathname:'first')
}
return(
  <HashRouter>
  <Nav current={current}/>
  <Switch>
  <Route exact path='/' component={Public}/>
  <Route exact path='/home' component={Home}/>
  <Route exact path ='/profile' component={Profile}/>
  <Route exact path='/protected' component={Protected}/>
  <Route exact path='/messages' component={Messages}/>
  <Route exact path='/performance/:id' component={Performance}/>
  <Route exact path='/admin' component={Admin}/>
  </Switch>
  </HashRouter>
)
 }
 export default Router
