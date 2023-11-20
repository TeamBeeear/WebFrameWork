import React, { useEffect } from 'react';
import GominCategory from "../GomGomBoard/GominCategory";

function TodayGomin({updateUrl}){
    const text = { 
        margin:"0", 
        color: "var(--67594-c, #67594C)",
        fontFamily: "Pretendard",
        fontSize: "1.25rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "100%", 
        marginBottom:"2.19rem"
    };
    const categoryToBoardId = {
        "전체": 0,
        "대인관계": 1,
        "연애": 2,
        "교육": 3,
        "생활": 4,
        "건강": 5,
        "반려동물": 6,
        "여행": 7,
        "쇼핑": 8,
        "기타": 9
    };
    const handleClick = (category) => {
        const boardId = categoryToBoardId[category];
        const newUrl = `/api/board/${boardId}`;

        console.log(`Button clicked. category: ${category}, boardId: ${boardId}, newUrl: ${newUrl}`);

        updateUrl(newUrl);
    };
    useEffect(() => {
        if (!updateUrl) return;
        const category = "전체"; // "전체" 카테고리를 기본값으로 설정
        const boardId = categoryToBoardId[category];
        const newUrl = `/api/board/${boardId}`;

        console.log(`Category clicked. category: ${category}, boardId: ${boardId}, newUrl: ${newUrl}`);
        
        // updateUrl 함수를 호출하여 URL을 업데이트
        updateUrl(newUrl);
    }, [updateUrl]);
    
    return (
        <div style={{paddingTop:"3.81rem"}}>
            <p style={text}>고민을 한 곳에 모았어요</p>
                <div style={{ display: "flex", gap: "1.25rem", justifyContent:"center"}}>
                <GominCategory category="전체" onClick={() => handleClick("전체")} />
                <GominCategory category="대인관계" onClick={() => handleClick("대인관계")}/>
                <GominCategory category="연애" onClick={() => handleClick("연애")}/>
                <GominCategory category="교육" onClick={() => handleClick("교육")}/>
                <GominCategory category="생활" onClick={() => handleClick("생활")}/>
                <GominCategory category="건강" onClick={() => handleClick("건강")}/>
                <GominCategory category="반려동물" onClick={() => handleClick("반려동물")}/>
                <GominCategory category="여행" onClick={() => handleClick("여행")}/>
                <GominCategory category="쇼핑" onClick={() => handleClick("쇼핑")}/>
                <GominCategory category="기타" onClick={() => handleClick("기타")}/>
            </div>
        </div>
    );
}

export default TodayGomin;