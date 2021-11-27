
import { Link } from 'react-router-dom'
import './myposts2.css'


export const Posts1 = (props) => {

    const { contents , deleteposts, deletepostsforall} = props; 

    return (
        <div className = "postsbox" >
            <div className="postsbox1">
                <h1>{contents.typeofjob}</h1>
                <h2 style = {{ color: "#482ff7" }}>{ contents.companyname }</h2>
            </div>
            <div className="postsbox2">
                <div className="wrapper23">
                    <h3 style = {{ fontSize: "15px" }}>{ contents.primaryrole }</h3>
                    <h3 className = "location"><i class="material-icons">add_location</i>{contents.companylocation}</h3>
                </div>
                <div className="wrapper23">
                 <h3>Stipend: { contents.stipend }&#x20B9;</h3>
                    <div className="contactbox">
                        <h3>{contents.companyemail}</h3>
                        <h3>Contact: {contents.contactnumber}</h3>
                    </div>
                </div>
            </div>
            <div className="wrapper1">
                <h3 className = "date">{contents.date}</h3>
                <i onClick = {() => { deleteposts(contents); deletepostsforall(contents); } } class="material-icons deletebtn" >delete</i>
                <Link to={{pathname: '/postdetailsmyposts',state: {details: contents}}}><button className = "knowmorebtn">View</button></Link>
                {/* <button className = "knowmorebtn" onClick = { () => { console.log(contents) } }>View</button> */}
            </div>
        </div>
    )
}
