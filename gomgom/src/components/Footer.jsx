import React from "react";
import logo from "../img/footer_gomgom.png"

function Footer(){
    return(
        <div style={{backgroundColor:"#67594C",height:"165px",display:"flex",flexDirection:"row",
        padding:"0px 250px 0px 250px",alignItems:"center",justifyContent:"center"}}>
            <img style={{width:"142px",height:"28px",marginRight:"200px"}} src={logo} alt="" />
            <p style={{color:"#FAF9F6",fontSize: "20px",fontWeight: "500"}}>이서연 강민서 신승혜 임수진</p>
        </div>
    );
}

export default Footer;