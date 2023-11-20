import React, {useState} from 'react';
import userImg from "../../img//mediumUserImg.png"; 
import TwoChoice from "../GomGomBoard/twoChoice";
import UserGominText from "../GomGomBoard/UserGominText"; 
import UserGominTitle from "../GomGomBoard/UserGominTitle";

function UserGomin({
    title,
    content,
    firstSelectionContent,
    firstSelectionVotePercentage,
    secondSelectionContent,
    secondSelectionVotePercentage,
}){
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
                <UserGominTitle gominTitle = {title}/>
                <UserGominText gominContents = {content}/>
                <div style={{display:"flex", gap:"1.5rem", justifyContent:"center"}}>
                    <TwoChoice 
                        gominText={firstSelectionContent}
                        gominPercent={firstSelectionVotePercentage}
                        onClick={() => handleOptionSelect(firstSelectionContent)} 
                        selected={selectedOption === firstSelectionContent} 
                    />
                    <TwoChoice 
                        gominText={secondSelectionContent}
                        gominPercent={secondSelectionVotePercentage}
                        onClick={() => handleOptionSelect(secondSelectionContent)} 
                        selected={selectedOption === secondSelectionContent} 
                    />
                </div>
            </div>
        </div>
    );
}

export default UserGomin;