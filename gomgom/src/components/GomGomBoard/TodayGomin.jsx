import React, {useState} from 'react';
import GominCategory from "../GomGomBoard/GominCategory";

function TodayGomin(){
    const text = { 
        margin:"0", 
        color: "var(--67594-c, #67594C)",
        fontFamily: "Pretendard",
        fontSize: "1.25rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "100%", 
        marginBottom:"2.19rem"
    }

    return (
        <div style={{paddingTop:"3.81rem"}}>
            <p style={text}>고민을 한 곳에 모았어요</p>
                <div style={{ display: "flex", gap: "1.25rem", justifyContent:"center"}}>
                <GominCategory category="전체" />
                <GominCategory category="대인관계" />
                <GominCategory category="연애" />
                <GominCategory category="교육" />
                <GominCategory category="생활" />
                <GominCategory category="건강" />
                <GominCategory category="반려동물" />
                <GominCategory category="여행" />
                <GominCategory category="쇼핑" />
                <GominCategory category="기타" />
            </div>
        </div>
    );
}

export default TodayGomin;