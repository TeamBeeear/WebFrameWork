import React from "react";
import { Link } from 'react-router-dom';
import logoImg from '../img/gomgom.png';

function Header(){
    return(
        <div>
            <Link to="/">
                <img src={logoImg} style={{width: "142px", height: "27px,", marginTop: "40px"}}></img>
            </Link>
        </div>
    )
}

export default Header;