import React from 'react'
import logo1 from './logo2.svg'
import './landing.css'
import ca from './createaccount.svg'
import posts from './createpost.svg'
import addpost from './addpost.svg'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"


function Landing() {

    useEffect(() => {
        Aos.init({ once: true ,duration: 1000 })
    }, [])


    return (
        <div className = "landingpage" style = {{ marginTop: '80px' }}>
            <section className = "section1">
                <div className="textcontainer">
                    <h1 data-aos = "fade-in">Let's make your next great hire</h1>
                    <p data-aos = "fade-in">You know who you're looking for.
    We'll help you find them.</p>
                    <Link to = 'register'><button data-aos ="fade-in">Post a Job</button></Link>
                </div>
                <div className="imagecontainer">
                    <img data-aos = "fade-in" className = "landimg" src={logo1} alt="" />
                </div>
            </section>
            <div className="line"></div>
            <section className = "section2">
                <h1 className = "title" data-aos = "fade-right">Steps To Get Started</h1>
                <div className="cardcontainer">
                    <div className="cards" data-aos="fade-up">
                        <div className="imgdiv"><img src={ca} alt="" /></div>
                        <h3>Create Account</h3>
                        <p>Register And Login to create your first job post</p>
                    </div>
                    <div className="cards" data-aos="fade-up">
                        <img src={posts} alt="" />
                        <h3>Create Your Post</h3>
                        <p>Just start creating the Posts by adding the job discription</p>
                    </div>
                    <div className="cards" data-aos="fade-up">
                        <img src={addpost} alt="" />
                        <h3>Publish Your Post</h3>
                        <p>Once Your have Published your Post, Interns will contact you</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing
