import React,{useEffect, useState} from "react";
import WorriedBox from "./WorriedBox";
import axios from 'axios';

function WorriedBoxs({
    url
}){
    const separateDivStyle={
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    }
    const colDivStyle={
        display:"flex",
        flexDirection:"column",
    }
    const colRightDivStyle={
        display:"flex",
        flexDirection:"column",
        marginLeft:"20px"
    }
    const [data, setData] = useState('')

    useEffect(() => {
        axios.get(url)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, []);
    return(
        <div style={separateDivStyle}>
                    <div style={colDivStyle}>
                        {Array.isArray(data) && data.slice().reverse().map((item, index) => (
                            index % 2 === 0 ? ( // 짝수번째 요소
                                <WorriedBox
                                    key={item.postId}
                                    postId={item.postId}
                                    boardId={item.boardId}
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
                        {Array.isArray(data) && data.slice().reverse().map((item, index) => (
                            index % 2 === 1 ? ( // 홀수번째 요소
                                <WorriedBox
                                    key={item.postId}
                                    data={item}
                                    postId={item.postId}
                                    boardId={item.boardId}
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
    )
}

export default WorriedBoxs;