import React , { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './myposts.css'
import Aos from "aos";
import 'aos/dist/aos.css'

function CreatePosts() {

    const history = useHistory();
    const [authState, setAuthState] = useState(false);
    const [posts, setPosts] = useState([]);
    const [post, SetPost] = useState({
        companyname: "",
        companyemail:"",
        companylocation:"",
        primaryrole:"",
        typeofjob: "",
        skillsrequired: "",
        experience: "",
        jobbio: ""
    })

    const getCurrentDate = (separator='') => {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${date}${"-"}${month<10?`0${month}`:`${month}`}${"-"}${year}`
    }
 
    useEffect(() => {
      const fetchuserlog = async (token) => {
        if(!token){
          setAuthState(false);
          history.push('/');
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
          return 0;
        }
        else{
          console.log("fake JWT code detected!");
          history.push('/');
          setAuthState(false)
          return 0;
        }
      }

      const updatePostsfromdb = async() => {
        const result = await fetch('https://gctapi.herokuapp.com/user/getuserposts', { method:'POST' , 
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ 
            token: token
         })
    })
        .then(res => res.json());
          setPosts(result.posts);
      }

      

      const token = localStorage.getItem('token');
      fetchuserlog(token);
      updatePostsfromdb();
      Aos.init({ duration: 1000, once:true })
    }, [])

    const onchangeHandler = (e) => {
        const { name, value } = e.target;
        SetPost({...post,
            [name]: value,
            date: getCurrentDate()
        })
    }

    const posttodb = async () => {
        // // e.preventDefault();
        console.log(getCurrentDate())
        if(!post.typeofjob){
            alert("Select TypeOf Job");
            return 0;
        }
        if(!post.companyname){
            alert("Enter CompanyName");
            return 0;
        }
        if(!post.companyemail){
            alert("Enter Company-Email");
            return 0;
        }
        if(!post.companylocation){
            alert("Enter Company-Location");
            return 0;
        }
        if(!post.primaryrole){
            alert("Enter Primary-Role");
            return 0;
        }
        if(!post.skillsrequired){
            alert("Enter Skills-Required");
            return 0;
        }
        if(!post.experience){
            alert("Enter Experienced");
            return 0;
        }
        if(!post.stipend){
            alert("Enter Stipend");
            return 0;
        }
        if(!post.jobbio){
            alert("Enter Jobbio");
            return 0;
        }
        // posts.push(post);
        console.log(posts);
        const result1 = await fetch('https://gctapi.herokuapp.com/user/createposts1', { method:'POST' , 
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            Posts: posts,
            token: localStorage.getItem('token'),
            singlepost: post
        })
        })
        .then(res => res.json());

        posts.push(result1.postwithid);

        const result2 = await fetch('https://gctapi.herokuapp.com/user/createposts2', { method:'POST' , 
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            Posts: posts,
            token: localStorage.getItem('token'),
        })
        })
        .then(res => res.json());

        history.push('/myposts');
        history.go(0);
    }

    return (
        <div className = "mypostpage" style = {{ marginTop: '80px' }} data-aos = "fade-in">
            <div className="mypostbgcontainer">
                <div className="mypostcontainer">
                    <h1>Post Your Job</h1>
                    <div className="companydetails">
                        <h3 style = {{ color: "#482ff7", fontSize: "18px" }}>Company Details</h3>
                        <div className = "wrapper">
                            <div className = "div1">
                                <h3>Company Name</h3>
                                <input type="text" required placeholder = "Comapany Name" name = "companyname" onChange = { onchangeHandler }/>
                            </div>
                            <div className = "div2">
                                <h3>Company Email</h3>
                                <input type="text" required placeholder = "Comapany Email" name = "companyemail" onChange = { onchangeHandler }/>
                            </div>
                        </div>
                        <div className="wrapper">
                        <div className = "div3">
                            <h3>Company Location</h3>
                            <input type="text" required placeholder = "Company Location" name = "companylocation" onChange = { onchangeHandler }/>
                        </div>
                        <div className = "div3">
                            <h3>Contact Number</h3>
                            <input type="text" required placeholder = "Contact No" name = "contactnumber" onChange = { onchangeHandler }/>
                        </div>
                        </div>
                    </div>
                    <div className="jobrequirements">
                        <h3 style = {{ color: "#482ff7", fontSize: "18px" }}>Job Requirements</h3>
                        <div className = "wrapper no2">
                        <div className = "div4">
                            <h3>Primary Role</h3>
                            <input type="text" required placeholder = "Primary Role" name = "primaryrole" onChange = { onchangeHandler }/>
                        </div>
                        <div className = "div5">
                            <h3>Type Of Job</h3>
                            <select required placeholder = "Type Of Job" name = "typeofjob" onChange = { onchangeHandler }>
                                <option value="" disabled selected hidden>Please Choose...</option>
                                <option value="Internship">Internship</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                            </select>
                        </div>
                        </div>
                        <div className = "wrapper">
                            <div className = "div6">
                                <h3>Skills Required</h3>
                                <input type="text" required placeholder = "Skills Required" name = "skillsrequired" onChange = { onchangeHandler }/>
                            </div>
                            <div className = "div7">
                                <h3>Experience</h3>
                                <input type="text" required placeholder = "Experience" name = "experience" onChange = { onchangeHandler }/>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className = "div8">
                                <h3>Stipend</h3> 
                                <input type="text" required placeholder = "Stipend" name = "stipend" onChange = { onchangeHandler }/>
                            </div>
                            <div className = "div9">
                                <h3>Job Bio</h3> 
                                <input type="text" required placeholder = "Job Bio" name = "jobbio" onChange = { onchangeHandler }/>
                            </div>
                        </div>
                    </div>
                    <button onClick = { posttodb }>Post</button>
                </div>
            </div>
        </div>
    )
    }
export default CreatePosts
