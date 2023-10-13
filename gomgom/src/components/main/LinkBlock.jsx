import React from "react";
import bearImg from "../../img/mainLinkBear.png"

function LinkBlock(){
    return(
        <div style={{backgroundColor:"#FAF9F6",height: "290px",display:"flex",justifyContent:"center"}}>
            <div style={{
                backgroundColor:"#E9E5DA",height: "120px",width:"1024px",marginTop:"85px",borderRadius: "96px",
                paddingLeft:"59px",paddingRight:"39px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginRight:"15%",
                marginLeft:"15%",
            }}>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <img src={bearImg} style={{width:"110px",height:"82px",marginRight:"53px"}} alt="" />
                    <div style={{textAlign:"left"}}>
                        <p>고민에 대한 짧은 해답을 듣고 싶다면?</p>
                        <p>곰곰이에게 물어봐~</p>
                    </div>
                </div>
                <button style={{height: "64px",width:"179px",border:"none",borderRadius: "32px",backgroundColor:"#FAF9F6"}}>
                    곰곰이 바로가기</button>
            </div>
        </div>
    )
}

export default LinkBlock;