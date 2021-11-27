import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './Knowmore.css'


export const Knowmore = (props) => {
    const [knowmoredata, setKnowmoredata] = useState({});
    const location = useLocation();

    useEffect(() => {
        const getdetails = async() => {
            const { details } = location.state;
            const result = await fetch('https://gctapi.herokuapp.com/user/getuserdetails', { method:'POST' , 
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ 
                id: details
             })
        })
            .then(res => res.json());
            setKnowmoredata(result.details);
            console.log(knowmoredata)
        }   
        getdetails();
    },[])
    return (
        <div className = "knowmorepage">
            <div className="knowmorecontainer">
                 <h1 className = "headingdetails">Job Details</h1>
                 <div className="knowmoregrid">
                     {/* <h3 className = "subheads">Company Name: <span className = "subans">{ knowmoredata.companyname }</span></h3> */}
                     <h3 className = "subheads">Type Of Job: <span className = "subans">{ knowmoredata.typeofjob }</span></h3>
                     <h3 className = "subheads">Company Email: <span className = "subans">{ knowmoredata.companyemail }</span></h3>
                     <h3 className = "subheads">Company Location: <span className = "subans">{ knowmoredata.companylocation }</span></h3>
                     <h3 className = "subheads" >Primary Role: <span className = "subans">{ knowmoredata.primaryrole }</span></h3>
                     <h3 className = "subheads">Skills Required: <span className = "subans">{ knowmoredata.skillsrequired }</span></h3>
                     <h3 className = "subheads">Experience: <span className = "subans">{ knowmoredata.experience }</span></h3>
                     <h3 className = "subheads">Stipend: <span className = "subans">{ knowmoredata.stipend }</span></h3>
                     <h3 className = "subheads">JioBio: <span className = "subans">{ knowmoredata.jobbio }</span></h3>
                     <h3 className = "subheads">ContactNumber:<span className = "subans">{knowmoredata.contactnumber}</span></h3>
                     <h3 className = "subheads">Date: <span className = "subans">{knowmoredata.date}</span></h3>
                 </div>
            </div>
        </div>
    )
}
