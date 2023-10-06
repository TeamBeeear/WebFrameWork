import React from "react";
import WorriedBox from "./WorriedBox";

function WorriedBoxContainer(){
    return(
        <div style={{backgroundColor:"#FAF9F6"}}>
            <p>오늘의 고민들</p>
            <p>더 많은 고민 보러가기</p>
            <WorriedBox/>
        </div>
    )
}

export default WorriedBoxContainer;