import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './myposts2.css'


export const Posts = (props) => {
    return (
        <div className = "postsbox" >
            <div className="postsbox1">
                <h1>{props.tyofjob}</h1>
                <h2 style = {{ color: "#482ff7" }}>{ props.companyname }</h2>
            </div>
            <div className="postsbox2">
                <div className="wrapper23">
                    <h3 style = {{ fontSize: "15px" }}>{ props.primaryrole }</h3>
                    <h3 className = "location"><i class="material-icons">add_location</i>{props.location}</h3>
                </div>
                <div className="wrapper23">
                 <h3>Stipend: { props.stipend }&#x20B9;</h3>
                    <div className="contactbox">
                        <h3>{props.companyemail}</h3>
                        <h3>Contact: {props.contactnumber}</h3>
                    </div>
                </div>
            </div>
            <div className="wrapper1">
                <h3 className = "date">{props.date}</h3>
                <Link to={{pathname: '/postdetails',state: {details: props.id}}}><button className = "knowmorebtn">View</button></Link>
                {/* <button className = "knowmorebtn" onClick = { () => { console.log(props) } }>View</button> */}
            </div>
        </div>
    )
}
