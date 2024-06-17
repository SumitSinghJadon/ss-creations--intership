import axios from "axios";
import { useState } from "react";




const ApplyLeave=()=>{

    const[input, setInput]=useState({})

    const handleInput=(e)=>{
            let name=e.target.name;
            let value=e.target.value;

            setInput(values=>({...values, [name]:value}));
    }

    const SubmitInput=()=>{
        console.log(input)
        let url=`http://127.0.0.1:8000/ApplyLeave/`
        axios.post(url, input).then((res)=>{
            alert("Leave Requested")
        })
        setInput({
            "Employ_name" : "",
            "Title" : "",
            "discription" : ""
        })
    }


    
    return(
        <>
        <div style={{width:"300px",height:"300px", border:"2px black solid", marginTop:"30px"}}> 
        <h1> Apply Employ Leave</h1>
        <div style={{width:"100px", marginLeft:"60px"}}>
        <label For="emp_name">Employ Name</label>  
        <input type="text" name="Employ_name" placeholder="Employ_name" id="emp_name" value={input.Employ_name} onChange={handleInput}/>
        <br/>
        <br/>
        <label For="title">title</label>
        <br/>
        <input type="text" name="Title" placeholder="title" id="title" value={input.Title} onChange={handleInput}/>
        
        <br/>
        <label For="dis">discription</label>
        <br/>
        <textarea name="discription" id="dis" placeholder="discripation" value={input.discription} onChange={handleInput}></textarea>
        </div>
      <center> <button type="submit" onClick={SubmitInput}> Request Leave</button></center> 
        </div>
        </>
    );
}

export default ApplyLeave