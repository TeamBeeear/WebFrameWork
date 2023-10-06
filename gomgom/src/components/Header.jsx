import React from "react";
import logoImg from '../img/gomgom.png';

function Header(){
    return(
        <div>
            <img src={logoImg} style={{width:"142px",height:"27px,",marginTop:"40px"}}></img>
        </div>
    )
}

export default Header;