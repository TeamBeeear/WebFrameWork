function AskToGomGomExplain(){
    
    const textStyle = { 
        marginTop: "50px",
        marginBottom: "50px",
        height: "auto",
        flexShrink: "0",
        color: "#67594C",
        fontSize: "20px",
        fontWeight: "500",
        lineHeight: "100%",
    }

    const paragraphStyle = {
        margin: "0", 
        marginBottom: "15px",
    };

    return (
        <div style={textStyle}>
            <p style={paragraphStyle}>고민을 생각하면서 아래의 곰곰이를 문지르다가</p>
            <p style={paragraphStyle}>준비가 되면 손을 떼세요!</p>
        </div>
    );
}

export default AskToGomGomExplain;