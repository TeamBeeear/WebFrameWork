import React from "react";
import GomgomImg from "../../img/mainLinkBear.png"; 
import Guksu from "../../img/guksu.png";

function GomgomGomin({
    title,
    content
}){
    const profile = {
        width:"7.5rem", 
        height:"5.625rem"
    }
    const gominMainPart = {
        width: "46.125rem", 
        backgroundColor: "var(--ffffff, #FFF)", 
        borderRadius:"1.5rem", 
        boxShadow: "0px 2px 4px 0px rgba(210, 205, 189, 0.50)", 
        marginLeft:"1.37rem"
    }
    const gominSubPart = { 
        marginTop:"2.25rem", 
        marginBottom:"2.5rem", 
        marginLeft:"2rem",
        display:"flex"
    }
    const titleFrame = { 
        width: "fit-content", 
        height:"1.9375rem", 
        backgroundColor:"var(--e-9-e-5-da, #E9E5DA)", 
        display:"flex"
    }
    const titleText = { 
        color:" var(--67594-c, #67594C)", 
        textAlign:"center", 
        fontFamily:"Pretendard", 
        fontSize:"1.25rem", 
        fontStyle:"normal", 
        fontWeight:"700", 
        lineHeight:"160%", 
        margin:"0"
    }
    const contentText = {
        margin:"0", 
        color:" var(--67594-c, #67594C)", 
        fontFamily:"Pretendard", 
        fontWeight:"500", 
        lineHeight:"160%", 
        fontStyle:"normal", 
        width: "26rem", 
        marginTop:"1.5rem", 
        textAlign:"start"
    } 
    const gomimImg = { 
        marginLeft: "1.75rem", 
        // marginTop:"6rem", 
        alignSelf:"flex-end"
    }

    return(
        <div style={{display:"flex", justifyContent:"center"}}>
           <img style={profile} src={GomgomImg}/>
           <div style={gominMainPart}>
                <div style={gominSubPart}>
                    <div>
                        <div style={titleFrame}>
                            <p style={titleText}>{title}</p>
                        </div>
                        <p style={contentText}>
                            {content}
                        {/* 요즘 날씨가 너무너무 덥죠.<br/>
                        이렇게 더운 날이면 기력도 없고, 입맛도 없어지는것 같아요.<br/>
                        그래도 잘 챙겨먹어야 힘이 나는거 아시죠?!<br/><br/>

                        저는 요즘 시원~한 콩국수에 빠졌어요.<br/>
                        얼음동동 띄운 콩국수 한그릇이면 속까지 시원해지더라구요 ㅎㅎ<br/><br/>

                        여러분은 어떤 저녁 메뉴를 추천하시나요?<br/> */}
                        </p>
                    </div>
                    <div style={gomimImg}>
                        <img src={Guksu}/>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default GomgomGomin;