import React from "react";
import WorryOuterImg from "../../img/worryDefaultImg1.png";
import WorryInnerImg from "../../img/worryDefaultImg2.png";

const WorryOption = ({ id, outerImageStyle, handleImageUpload, optionImage, 
                        setSelectionContent, placeholder }) => {
    const worryOptionStyle = {
        width: "654px",
        height: "74px",
        background: "white",
        border: "2px solid #E9E5DA",
        borderRadius: "8px",
        display: "block",
        marginBottom: "16px",
        paddingLeft: "20px",
        marginTop: "5px",

        color: "#67594C",
        fontSize: "20px",
        fontFamily: "Pretendard",
        fontWeight: "700",
        lineHeight: "32px",
        wordWrap: "break-word",
    };

    const innerImageStyle = {
        width: "36px", 
        height: "36px",
        position: "absolute",
        top: "50%", 
        left: "50%",
        transform: "translate(-50%, -50%)", 
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '23rem' }}>
          <div 
            className="option-img"
            style={outerImageStyle}
            onClick={() => document.getElementById(`fileInput${id}`).click()}>
            {optionImage ? (
              <img src={optionImage} style={outerImageStyle} alt="Selected Image" />
            ) : (
              <>
                <img src={WorryOuterImg} alt="Outer Image" />
                <img src={WorryInnerImg} alt="Inner Image" style={innerImageStyle} />
              </>
            )}
            <input 
              type="file"
              id={`fileInput${id}`}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageUpload} />
          </div>
          <input
            type="input"
            className={`worry-option-${id}`}
            style={worryOptionStyle}
            placeholder={placeholder}
            onChange={(e) => setSelectionContent(e.target.value)} />
        </div>
    );
};

export default WorryOption;