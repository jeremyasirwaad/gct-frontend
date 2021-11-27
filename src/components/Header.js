import React, { useState, useEffect } from 'react'
import './Home.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Home() {

    const [clicks, setClicks] = useState(false);
    const click = () => {
        setClicks(!clicks);
    }

    useEffect(() => {
       const token =  localStorage.getItem('token');
       console.log(token);
    })

    return (
        <div>
            <Router>
            <header class="header" >
                <nav class="navbar">
                    <Link to = "/"><a class="nav-logo">Gct Intership Portal</a></Link>
                    <ul class={ "nav-menu"  + ( clicks ? ( " active" ) : ( "" ) ) }>
                        <li class="nav-item">
                            <Link to = "/posts"><a class="nav-link">Intership Posts</a></Link>
                            {/* <Link to = "/register">Register</Link> */}
                        </li>
                        <li class="nav-item">
                            <Link to = "/aboutus"><a href="" class="nav-link">AboutUs</a></Link>
                            {/* <Link to = "/aboutus">About Us</Link> */}
                        </li>
                        <li class="nav-item">
                            <Link to = "/login"><a href="" class="nav-link">Login</a></Link>
                            {/* <Link to = "/login">Login</Link> */}
                        </li>
                        <li class="nav-item loginbtn">
                            <Link to = "/register"  ><a style = {{ color: "white" }} href="" class="nav-link">SignUp</a></Link>
                            {/* <Link to ="/register" >SignUp</Link> */}
                        </li>
                    </ul>
                    <div class={"hamburger" + ( clicks ? ( " active" ) : ( "" ) ) } onClick = { click }>
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </nav>
            </header>
            </Router>
        </div>
    )
}

export default Home
