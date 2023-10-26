import React, {useState} from 'react';
import HeartBefore from "../../img/heartBefore.png";
import HeartAfter from "../../img/heartAfter.png";

function UserGominTitle({gominTitle}){
    const [heartClicked, setHeartClicked] = useState(false);
    const subBox = { 
        textAlign:"start", 
        marginLeft:"3.7%", 
        marginTop:"5%", 
        width:"35%", 
        height: "1.9375rem",
        flexShrink: "0",
        background: "var(--e-9-e-5-da, #E9E5DA)"
    }
    const text = { 
        margin:"0",
        color: "#67594C",
        fontFamily: "Pretendard",
        fontSize: "1.25rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "100%", 
        padding:"0.38rem", 
        textAlign:"center"
    }
    const hearttext = { 
        color: "#67594C",
        fontFamily: "Pretendard",
        fontSize: "0.9375rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "160%", 
        margin:"0", 
        marginLeft:"43%", 
        marginTop:"5%"
    }
    const handleHeartClick = () => {
        setHeartClicked(!heartClicked);
    }

    return (
        <div style={{display:"flex"}}>
            <div style={subBox}>
                <p style={text}>{gominTitle}</p>
            </div>
            <p style={hearttext}>공감돼요!</p>
            <img style={{ marginLeft: "0.63rem", marginTop: "4%", cursor: "pointer" }}
                src={heartClicked ? HeartAfter : HeartBefore}
                onClick={handleHeartClick}/>
        </div>
    );
}

export default UserGominTitle;