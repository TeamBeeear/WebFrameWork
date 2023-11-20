import React,{useEffect, useState} from "react";
import WorriedBox from "../main/WorriedBox";
import axios from 'axios';

function WorriedBoxContainer({ id = 'test1', category = 1 }) {
    
    const apiUrl = `/api/my-page?id=${id}&category=${category}`;

    const [data, setData] = useState('');
    // URL에 id와 category 쿼리 매개변수를 포함시킴

    const titleDivStyle={
        display:"flex",
        flexDireaction:"row",
        marginBottom:"34px",
        justifyContent:"space-between",
    };
    const separateDivStyle={
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    };
    const colDivStyle={
        display:"flex",
        flexDirection:"column",
    };
    const colRightDivStyle={
        display:"flex",
        flexDirection:"column",
        marginLeft:"20px"
    };

    useEffect(() => {
        // 새로운 쿼리 매개변수를 포함한 업데이트된 URL로 GET 요청 보냄
        axios.get(apiUrl)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [apiUrl]); // id나 category가 변경될 때 useEffect가 다시 실행되도록 apiUrl을 의존성으로 지정

    return(
        <div style={{backgroundColor:"#FAF9F6",
        display:"flex",
        justifyContent:"center",
        }}>
            <div style={{
                width:"1024px",
            }}>
                <div style={titleDivStyle}>
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
                                    nminutesAgo={item.nminutesAgo}
                                />
                            ) : null
                        ))}
                    </div>
                    <div style={colRightDivStyle}>
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
                                    nminutesAgo={item.nminutesAgo}
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