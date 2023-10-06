import React from "react";
import WorriedBox from "./WorriedBox";

function WorriedBoxContainer(){
    const titleDivStyle={
        display:"flex",
        flexDireaction:"row",
        marginBottom:"34px",
        justifyContent:"space-between",
    }
    const separateDivStyle={
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    }
    const colDivStyle={
        display:"flex",
        flexDirection:"column",
    }
    const firstTitleFontStyle={
        // marginTop:"0px",
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
        margin:"auto 0"
    }
    return(
        <div style={{backgroundColor:"#FAF9F6"}}>
            <div style={{marginRight:"8%",marginLeft:"8%"}}>
                <div style={titleDivStyle}>
                    <div></div>
                    <p style={firstTitleFontStyle}>오늘의 고민들</p>
                    <p style={secondTitleFontStyle}>+ 더 많은 고민 보러가기</p>
                </div>
                <div style={separateDivStyle}>
                    <div style={colDivStyle}>
                        <WorriedBox/>
                        <WorriedBox/>
                        <WorriedBox/>
                    </div>
                    <div style={colDivStyle}>
                        <WorriedBox/>
                        <WorriedBox/>
                        <WorriedBox/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default WorriedBoxContainer;