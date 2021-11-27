import React, { useState } from 'react'
import './Home.css'
import { Link, useHistory } from 'react-router-dom';

function Header2() {

    const history = useHistory();

    const [clicks, setClicks] = useState(false);
    const click = () => {
        setClicks(!clicks);
    }

    const logout = () => {
        localStorage.removeItem('token');
        history.push('/')
        history.go(0);

    }

    return (
        <div>
            <header class="header">
                <nav class="navbar">
                    <Link to = "/"><a class="nav-logo">Gct Intership Portal</a></Link>
                    <ul class={ "nav-menu"  + ( clicks ? ( " active" ) : ( "" ) ) }>
                        <li class="nav-item">
                            <Link to = "/posts"><a class="nav-link">Intership Posts</a></Link>
                            {/* <Link to = "/register">Register</Link> */}
                        </li>
                        <li class="nav-item">
                            <Link to = "/myposts"><a href="" class="nav-link">My Posts</a></Link>
                            {/* <Link to = "/aboutus">About Us</Link> */}
                        </li>
                        <li class="nav-item">
                            <Link to = "/createposts"><a href="" class="nav-link">Create Post</a></Link>
                            {/* <Link to = "/login">Login</Link> */}
                        </li>
                        <li class="nav-item loginbtn">
                            <Link to = "/"  ><a onClick = { logout } style = {{ color: "white" }} href="" class="nav-link">Logout</a></Link>
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

export default Header2
