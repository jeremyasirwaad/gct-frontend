
import './App.css';
import Landing from './components/Landing';
import Header from './components2/Header';
import Header2 from './components2/Header2';
import Signup from './components/Signup';
import Login from './components/Login'
import CreatePosts from './components/CreatePosts';
import { Knowmore } from './components/Knowmore';
import Myposts from './components/Myposts';
import { Knowmore1 } from './components/knowmore1';
import { Interviewposts } from './components/Interviewposts';
import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Redirect } from "react-router-dom";

function App() {

  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    const fetchuserlog = async (token) => {
      if(!token){
        setAuthState(false);
        return 0;
      }
      const result = await fetch('https://gctapi.herokuapp.com/user/verify', { method:'POST' , 
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ 
          token: token
       })
  })
      .then(res => res.json());
      if(result.status === 'ok'){
        setAuthState(true);
        console.log(result.message);
        return 0;
      }
      else{
        console.log("fake JWT code detected!");
        setAuthState(false)
        return 0;
      }
    }
    const token = localStorage.getItem('token');
    fetchuserlog(token);
  })


  return (
    <div className="App">
      <Router>
        { authState ? <Header2 /> : <Header /> }
          <Switch>
            <Route exact path = "/">
              <Landing />
            </Route>
            <Route exact path = "/register">
              <Signup />
            </Route>
            <Route exact path = "/login">
              <Login />
            </Route>
            <Route exact path="/createposts">
              <CreatePosts />
            </Route>
            <Route exact path="/myposts">
              <Myposts />
            </Route>
            <Route exact path="/posts">
              <Interviewposts />
            </Route>
            <Route exact path = "/postdetails" > 
                <Knowmore />
            </Route>
            <Route exact path = "/postdetailsmyposts" > 
                <Knowmore1 />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
