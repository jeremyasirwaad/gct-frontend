import React, { useState, useEffect } from 'react'
import signup from './registerlogo.svg'
import validator from 'validator';
import './SignUp.css'
import { useHistory } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';



function Signup() {

    const history = useHistory();

    useEffect(() => {
        Aos.init({ duration:1000, once: true })
    })

    const [errtxt, setErrtxt] = useState("")
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        repassword: ""
    })

    const onChangeHandler = (e) =>{
        const { name, value } = e.target; 
        setUser({
            ...user,
            [name]: value
        })
    }

    const Signup = async () => {
        if(!user.name){
            setErrtxt("Invalid User Name")
            return 0;
        }
        if(!validator.isEmail(user.email)){
            setErrtxt("Invaild Email")
            return 0;
        }
        if((!user.password)){
            setErrtxt("Invaild Password")
            return 0;
        }
        if((!user.repassword)){
            setErrtxt("Passwords Doesnt Match")
            return 0;
        }
        if(user.password === user.repassword){
            // setErrtxt("Passwords Doest Match");
            // return 0;
            
        }
        else{
            setErrtxt("Passwors doesnt Match");
            return 0;
        }
        const result = await fetch('https://gctapi.herokuapp.com/user/signup', { method:'POST' , 
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify ({ 
            name: user.name,
            email: user.email,
            prepass: user.password
         })
    })
        .then(res => res.json());
        if(result.status === "error"){
            setErrtxt("Email Already Registered, Use Login");
            return 0;
        } 
        else{
            setErrtxt(result.message);
            setTimeout(() => {
                history.push('/login');
                // history.go(0);
            }, 1000);
        }
    }

    return (
        <div className = "signuppage" style = {{ marginTop: "80px" }} data-aos = "fade-in">
            <h1>Lets Get Started</h1>
            <div className="signupcontainer">
                <div className="logocontainer">
                   <img className = "logocontainerimg" src= { signup } alt="" />
                </div>
                <div className="linebtw"></div>
                <div className="formcontainer">
                    <div className="forminnercontainer">
                        <h2>SignUp</h2>
                        <p className = "errtxt">{ errtxt }</p>
                        <input type="text" placeholder = "Name" name = "name" value = { user.name } onChange = { onChangeHandler }/>
                        <input type="text" placeholder = "Email" name = "email" value = { user.email }  onChange = { onChangeHandler }/>
                        <input type="password" placeholder = "Password" name = "password" value = { user.password } onChange = { onChangeHandler }/>
                        <input type="password" placeholder = "Re-type Password" name = "repassword" value = { user.repassword } onChange = { onChangeHandler } />
                        <button onClick = { Signup }>SignUp</button>
                    </div>
                </div>
            </div>
        </div>
)
}

export default Signup
