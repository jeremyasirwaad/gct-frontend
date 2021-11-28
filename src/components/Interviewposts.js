import React from 'react';
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Posts } from './Posts';
import { Knowmore } from './Knowmore';
import './loader.css'
import './myposts2.css'
import Aos from "aos";
import 'aos/dist/aos.css'

export const Interviewposts = () => {
    const [Active, setActive] = useState(false);
    const history = useHistory();
    const [posts, setPosts] = useState([])
    const [Postdetails, setPostdetails] = useState({})

    const Childtoparent = (data) => {
      setActive(data);
    }

    const Getdetails = (details) => {
      setPostdetails(details)
    }

    const Childtoparent1 = (data) => {
      setActive(data);
    }

    useEffect(() => {

      const updatePosts = async() => {
        const result = await fetch('https://gctapi.herokuapp.com/user/getallposts')
        .then(res => res.json());
        setPosts(result.content);
      }
      updatePosts();
      Aos.init({ duration: 1000, once: true })
    })


    return (
        <div className = "mypostspage" style = {{ marginTop: '80px' }} data-aos = "fade-in  ">
          <div className="heading">
            <h1>Job Offers</h1>

            <h1 className="badge" style = {{ fontSize: "20px", }}>{ posts.length }</h1>
          </div>

        { posts.length === 0 ? (<div class="loading">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
) : (
                    <div className="mypostbody">
                    <div className="mypostsgrid">
                        { posts.map((e) => (
                          <Posts id = { e._id } Getdetails = { Getdetails } tyofjob = { e.typeofjob } companyname = { e.companyname } primaryrole = { e.primaryrole } location = { e.companylocation } stipend = { e.stipend } contactnumber = { e.contactnumber } companyemail = { e.companyemail } date = { e.date } Childtoparent = { Childtoparent }/>
                        )) }
                    </div>
                  </div>
        ) }

        </div>
        
    )
}
