import React from "react";
import GomgomGomin from "../Gomin/GomgomGomin"; 
import UserComment from "../Gomin/UserComment"; 

function GominBox({
    title,
    content
}){
    return(
        <div>
            <div style={{marginTop:"4.25rem",  marginBottom:"7.5rem"}}>
                <GomgomGomin
                title = {title}
                content = {content}
                />
                {/* <UserComment/> */}
            </div>
            <div style={{height:"0.125rem", backgroundColor:"#E9E5DA"}}/> {/* 밑 라인 */}
        </div>
    )
}

export default GominBox;