import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {

    const [clicks, setClicks] = useState(false);
    const click = () => {
        setClicks(!clicks);
    }

    return (
        <div>
            <header class="header">
                <nav class="navbar">
                    <Link to = "/"><div class="nav-logo">Gct Intership Portal</div></Link>
                    <ul class={ "nav-menu"  + ( clicks ? ( " active" ) : ( "" ) ) }>
                        <li class="nav-item">
                            <Link to = "/posts"><div class="nav-link">Internship Posts</div></Link>
                            {/* <Link to = "/register">Register</Link> */}
                        </li>
                        <li class="nav-item">
                            <Link to = "/aboutus"><div href="" class="nav-link">AboutUs</div></Link>
                            {/* <Link to = "/aboutus">About Us</Link> */}
                        </li>
                        <li class="nav-item">
                            <Link to = "/login"><div href="" class="nav-link">Login</div></Link>
                            {/* <Link to = "/login">Login</Link> */}
                        </li>
                        <li class="nav-item loginbtn">
                            <Link to = "/register"  ><div style = {{ color: "white" }} href="" class="nav-link">SignUp</div></Link>
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
        </div>
    )
}

export default Home
