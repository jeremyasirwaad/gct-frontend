import React, { useState, useEffect } from 'react'
import loginlogo from './loginlogo.jpg'
import validator from 'validator'
import { useHistory } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

function Login() {

    const history = useHistory();

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    })

    const [errtxt, setErrtxt] = useState("")
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const onChangeHandler = (e) =>{
        const { name, value } = e.target; 
        setUser({
            ...user,
            [name]: value
        })
    }


    const login = async () => {
       
        if(!validator.isEmail(user.email)){
            setErrtxt("Invaild Email")
            return 0;
        }
        if((!user.password)){
            setErrtxt("Invaild Password")
            return 0;
        }


        const result = await fetch('https://gctapi.herokuapp.com/user/login', { method:'POST' , 
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ 
            email: user.email,
            prepass: user.password
         })
    })
        .then(res => res.json());
        if(result.status === "error"){
            setErrtxt(result.message)
        }
        else if (result.status === "ok")
        {
            localStorage.setItem("token", result.data);
            setErrtxt("Successfully Logged In");
            history.push("/myposts");
            history.go(0);
        }
    }


    return (
         <div className = "signuppage" style = {{ marginTop: "70px" }} data-aos = "fade-in">
            <h1>Lets Get Started</h1>
            <div className="signupcontainer">
                <div className="logocontainer">
                   <img className = "logocontainerimg" src= { loginlogo } alt="" />
                   {/* <svg className = "logocontainerimg" > </svg> */}
                </div>
                <div className="linebtw"></div>
                <div className="formcontainer">
                    <div className="forminnercontainer">
                        <h2>Login</h2>
                        <p className = "errtxt">{ errtxt }</p>
                        <input type="text" required placeholder = "Email" name = "email" value = { user.email }  onChange = { onChangeHandler }/>
                        <input type="text" placeholder = "Password" name = "password" value = { user.password } onChange = { onChangeHandler }/>
                        <button onClick = { login } >Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
