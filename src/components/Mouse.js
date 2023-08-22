

import React,{useState} from "react";



import "../style.css"
function Mouse(){
    const [divStyle,changeStyle] = useState({
        display:"flex",
        flexFlow:"row",
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
        top:"30%",
        left:"40%",
        width:"50%",
        height:"100px"
    });
    const [message,setMessage] = useState("")
    function handleMouse(event)
    {
        const top = Math.floor(Math.random() * 70);
        const left = Math.floor(Math.random() * 50);
        // console.log(event.clientX);

        changeStyle({...divStyle,top:`${top}%`,left:`${left}%`});
    }
    function handleClick(){
        setMessage("30 days of react")
        setTimeout(()=>{
            setMessage("")
        },500)
    }
    return(
        <div className="container" onMouseEnter={handleMouse} style={divStyle} onClick={handleClick}>
            <p className='title'>React {message}</p>
        </div>
    )
}

export default Mouse;