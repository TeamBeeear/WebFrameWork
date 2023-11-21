import React from 'react';
import UserImg from "../../img/userImg.png";

function UserComment(){
    const userCommnetBox = { 
        borderRadius:"1.5rem", 
        backgroundColor:"var(--ffffff, #FFF)", 
        boxShadow:"0px 2px 4px 0px rgba(210, 205, 189, 0.50)", 
        width: "27.625rem", 
        height: "3.5625rem",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center", 
        marginRight:"1.31rem"
    };
    const userCommnetText = { 
        margin:"0", 
        color:"var(--67594-c, #67594C)", 
        fontFamily:"Pretendard", 
        fontSize:"1rem", 
        fontStyle:"normal", 
        fontWeight:"500", 
        lineHeight:"160%", 
        marginTop:"0"
    };

    return(
        <div style={{marginTop:"2.19rem", display:"flex", justifyContent:"center", marginLeft:"40rem"}}>
            <div style={userCommnetBox}>
                <p style={userCommnetText}>{}</p>
            </div>
            <img src={UserImg}/>
        </div>
    );
}

export default UserComment;