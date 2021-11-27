import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Posts1 } from './Posts1';
import empty from './empty.jpg';
import './myposts2.css'
import Aos from "aos";
import 'aos/dist/aos.css'
function Myposts() {

    const history = useHistory();
    const [posts, setPosts] = useState([])
    const [authState, setAuthState] = useState(false);
    const [tokenofuser, setToken] = useState('');

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

      const updatePosts = async() => {
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
      setToken(token);
      fetchuserlog(token);
      updatePosts();
      Aos.init({ duration: 1000, once:true })
    },[])

    const deleteposts = async (posttodelete) => { 
      const delposts = posts.filter((e) => e !== posttodelete)
      setPosts(delposts);
      await fetch('https://gctapi.herokuapp.com/user/deleteuserpost', { method:'POST' , 
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ 
            data : delposts,
            token: tokenofuser
         })
    })
        .then(res => res.json());
}

      const deletepostforall = async (posttodelete) => {

        await fetch('https://gctapi.herokuapp.com/user/deletecommonpost', { method: "POST", 
        headers: { "Content-type": 'application/json'},
        body: JSON.stringify({
          id: posttodelete._id
        })
       })
       .then(res => res.json());
      // console.log(posttodelete._id);
      }

    return (
        <div className = "mypostspage" style = {{ marginTop: '80px' }} data-aos = "fade-in">
          <div className="heading">
            <h1>My Posts</h1>
            <h1 className="badge" style = {{ fontSize: "20px" }}>{ posts.length }</h1>
          </div>

          { posts.length === 0 ? (
            <div className = "nodata">
              <img src= { empty } alt="" />
              <h3>You Have No Posts</h3>
              <p>Create Post Now</p>
              <Link to = '/createposts'><button>Create Post</button></Link>
            </div>
          ) : 
          
          (<div className="mypostbody">
          <div className="mypostsgrid">
              { posts.map((e) => (
                <Posts1 deletepostsforall = { deletepostforall } deleteposts = { deleteposts } contents = { e } />
              )) }
          </div>
        </div> )}

        </div>
    )
}

export default Myposts
