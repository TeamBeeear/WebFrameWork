import React,{useEffect, useState} from "react";
import WorriedBox from "./WorriedBox";
import axios from 'axios';

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
    const [data, setData] = useState('')

    useEffect(() => {
        axios.get('/posts')
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, []);
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
                        {Array.isArray(data) && data.map((item, index) => (
                            index % 2 === 0 ? ( // 짝수번째 요소
                                <WorriedBox
                                    key={item.postId}
                                    data={item}
                                    title={item.title}
                                    content={item.content}
                                    commentsCount={item.commentsCount}
                                    heartsCount={item.heartsCount}
                                    userId={item.userId}
                                    firstSelectionContent={item.firstSelectionContent}
                                    secondSelectionContent={item.secondSelectionContent}
                                />
                            ) : null
                        ))}
                    </div>
                    <div style={colDivStyle}>
                        {Array.isArray(data) && data.map((item, index) => (
                            index % 2 === 1 ? ( // 홀수번째 요소
                                <WorriedBox
                                    key={item.postId}
                                    data={item}
                                    title={item.title}
                                    content={item.content}
                                    commentsCount={item.commentsCount}
                                    heartsCount={item.heartsCount}
                                    userId={item.userId}
                                    firstSelectionContent={item.firstSelectionContent}
                                    secondSelectionContent={item.secondSelectionContent}
                                />
                            ) : null
                        ))}
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default WorriedBoxContainer;