import React from "react";
import bearImg from "../../img/bearHi.png"

function MainContent(){
    return(
        <div style={{backgroundColor:"#67594C",height: "448px",position:"relative"}}>
            <div style={{ display:"flex",
                        flexDirection: "row",
                        justifyContent:"space-between",
                        marginRight:"20%",
                        marginLeft:"20%",
                        color:"#FAF9F6"}}>
                <div  style={{ display:"flex",
                        flexDirection: "column",
                        textAlign:"left"}}>
                    <p style={{fontSize: "20px",
                        fontWeight: "600",
                        lineHeight: "160%"}}>인생은 선택의 연속, 하지만 선택은 항상 어려워요!</p>
                    <div style={{fontSize: "36px",
                        fontWeight: "700",
                        lineHeight: "160%"}}>
                        <p>고민하지말고,</p>
                        <p>곰곰에서 고민을 나눠주세요</p>
                    </div>
                </div>
                <button style={{borderRadius:"32px",backgroundColor:"#FFAB5D",width:"176px",height:"64px",marginTop:"174px",border:"none",
                                color:"#FFF",fontSize:"20px",fontWeight:"700"}}>
                    고민 나누기</button>
            </div>
            <img src={bearImg} style={{width:"919px",height:"164px",position:"absolute",bottom:"0",transform: "translateX(-50%)"}} alt="" />
        </div> 
    )
}

export default MainContent;