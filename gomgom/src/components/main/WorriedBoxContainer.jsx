import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import WorriedBoxs from "./WorriedBoxs";

function WorriedBoxContainer({
    url
}){
    const titleDivStyle={
        display:"flex",
        flexDireaction:"row",
        marginBottom:"34px",
        justifyContent:"space-between",
    }
    const firstTitleFontStyle={
        color: "#67594C",
        fontSize: "20px",
        fontWeight: "700",
        lineHeight: "100%",
        margin:"auto 0"
    }
    const secondTitleFontStyle={
        color: "rgba(103, 89, 76, 0.50)",
        fontSize: "12px",
        fontWeight: "600",
        lineHeight: "160%",
        margin:"auto 0",
        textDecoration: 'none',
    }
    const LeftsecondTitleFontStyle={
        color: "#FAF9F6",
        fontSize: "12px",
        fontWeight: "600",
        lineHeight: "160%",
        margin:"auto 0"
    }
    
    return(
        <div style={{backgroundColor:"#FAF9F6",
        display:"flex",
        justifyContent:"center",
        }}>
            <div style={{
                width:"894px",
            }}>
                <div style={titleDivStyle}>
                    <p style={LeftsecondTitleFontStyle}>+ 더 많은 고민 보러가기</p>
                    <p style={firstTitleFontStyle}>오늘의 고민들</p>
                    <Link to='/board'><p style={secondTitleFontStyle}>+ 더 많은 고민 보러가기</p></Link>
                </div>
                <WorriedBoxs 
                    url = {url}
                />
            </div>
        </div>
    )
}

export default WorriedBoxContainer;