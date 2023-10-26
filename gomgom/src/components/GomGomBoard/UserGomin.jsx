import React, {useState} from 'react';
import userImg from "../../img//mediumUserImg.png"; 
import TwoChoice from "../GomGomBoard/twoChoice";
import UserGominText from "../GomGomBoard/UserGominText"; 
import UserGominTitle from "../GomGomBoard/UserGominTitle";

function UserGomin(){
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    }
    const gominContent = { 
        width: "46.125rem",
        height: "auto",
        flexShrink: "0",
        borderRadius: "1.5rem",
        background: "var(--ffffff, #FFF)",
        boxShadow: "0px 2px 4px 0px rgba(210, 205, 189, 0.50)", 
        marginLeft:"2.5rem"
    }

    return (
        <div style={{paddingTop:"4.25rem", display:"flex", justifyContent:"center", marginBottom:"6.56rem"}}>
            <div>
                <img src={userImg}/>
            </div>
            <div style={gominContent}>
                <UserGominTitle gominTitle = "고양이 모래는 뭐가 좋을까요?"/>
                <UserGominText gominContents = "취향이 참 까탈스런 고양이 인데요, 벤토나이트 쓰다가 자꾸 이불에 볼일을 봐서 화장실 모래가 문제인가 싶어 고민 올려요 ㅠㅠ 고양이 박사님들 도와주세요! "/>
                <div style={{display:"flex", gap:"1.5rem", justifyContent:"center"}}>
                    <TwoChoice 
                        gominText="두부모래" 
                        gominPercent="60%" 
                        onClick={() => handleOptionSelect("두부모래")} 
                        selected={selectedOption === "두부모래"} 
                    />
                    <TwoChoice 
                        gominText="종이모래" 
                        gominPercent="40%" 
                        onClick={() => handleOptionSelect("종이모래")} 
                        selected={selectedOption === "종이모래"} 
                    />
                </div>
            </div>
        </div>
    );
}

export default UserGomin;