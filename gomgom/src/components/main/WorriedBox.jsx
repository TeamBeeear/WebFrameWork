import React from "react";
import worriedImg from "../../img/worriedImg.png"

function WorriedBox(){
    const data = [
        {
          imgSrc: {worriedImg}, // 이미지 URL
          question: "문제 1", // 문제 텍스트
        },
        {
          imgSrc: {worriedImg},
          question: "문제 2",
        },
        {
          imgSrc: {worriedImg},
          question: "문제 3",
        },
        {
          imgSrc: {worriedImg},
          question: "문제 4",
        },
      ];
    
      // 데이터를 2개씩 자르기
      const chunkedData = [];
      for (let i = 0; i < data.length; i += 2) {
        const chunk = data.slice(i, i + 2);
        chunkedData.push(chunk);
      }
    return(
        <div>
            <div>
                <div>
                    <p>제목</p>
                    <div>
                        <img src="" alt="" />
                        <p>숫자</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>숫자</p>
                    </div>
                </div>
                <div>내용</div>
                <div>
                    {chunkedData.map((chunk, index) => (
                        <div key={index} className="row">
                            {chunk.map((item, innerIndex) => (
                                <div key={innerIndex} className="col">
                                    <img src={item.imgSrc} alt="" />
                                    <div>{item.question}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                    <p>작성자 이름</p>
                </div>
                <div>시간</div>
            </div>
        </div>
    )
}

export default WorriedBox;