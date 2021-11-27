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
                    <Link to = "/"><div class="nav-logo">Gct Intership Portal</div></Link>
                    <ul class={ "nav-menu"  + ( clicks ? ( " active" ) : ( "" ) ) }>
                        <li class="nav-item">
                            <Link to = "/posts"><div class="nav-link">Intership Posts</div></Link>
                            {/* <Link to = "/register">Register</Link> */}
                        </li>
                        <li class="nav-item">
                            <Link to = "/myposts"><div href="" class="nav-link">My Posts</div></Link>
                            {/* <Link to = "/aboutus">About Us</Link> */}
                        </li>
                        <li class="nav-item">
                            <Link to = "/createposts"><div href="" class="nav-link">Create Post</div></Link>
                            {/* <Link to = "/login">Login</Link> */}
                        </li>
                        <li class="nav-item loginbtn">
                            <Link to = "/"  ><div onClick = { logout } style = {{ color: "white" }} href="" class="nav-link">Logout</div></Link>
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
