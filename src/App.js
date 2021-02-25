import React, { useState, useEffect } from 'react'
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import {Route, Redirect} from 'react-router-dom'


const App=(props)=> {
  const [userData, setUserData]=useState({})

  useEffect(()=> {
    const result= JSON.parse(localStorage.getItem('user')) ||{}
    setUserData(result) 
  }, [])

  const handleUserData = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    setUserData(data);
  };

 
  return (
    <div>
   
   {Object.keys(userData).length > 0 ? (
     <Redirect to='/dashboad'/>
   ) : (
     <Redirect to='/'/>
   )}

   <Route 
   path='/'
   exact={true}
   render={(props)=> (
     <LoginPage {...props} handleUserData={handleUserData}/>
   )}
   />

       <Route
        exact
        path="/dashboard"
        render={(props) => <Dashboard {...props} userData={userData} />}
      />

    </div>
  )
}

export default App