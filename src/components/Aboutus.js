import React from 'react'
import './aboutus.css'
import myimg from './myimg2.jpeg'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Aboutus = () => {
    return (
        <div className = "aboutuspage">
            <h1 className = "aboutheading">About Me</h1>
            <div className = "aboutcontainer">
                <div className = "aboutimgcont">
                    <img src= { myimg } alt="" />
                </div>
                <p>Hi, This is my first full stack project and I am so proud of it! Being a 2nd year B Tech IT student of Govt. College of Technology, Coimbatore, it gives me immense pleasure to host it. <br /> Every journey starts with a small step... and my journey in to the great realm of web development has just begun. I have miles to go before I sleep! <br /> <br /> Jeremy Asirwaad</p>

                <div className="findme">
                    <h3>Find Me</h3>
                    <a href="https://www.instagram.com/_._.jeremy._/"><InstagramIcon  className = "instaicon" /></a>
                    <a href="https://www.linkedin.com/in/jeremy-asirwaad-182b93192"><LinkedInIcon  className = "linkedinicon"/></a>
                </div>
            </div>
        </div>
    )
}
