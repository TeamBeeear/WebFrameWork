import React from "react";
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderLeftBtn from "../../img/SliderLeftBtn.png";
import SliderRightBtn from "../../img/SliderRightBtn.png";

function Slider(){
    const btnStyle = {
        width:"48px",
        height:"48px",
    }
    const CustomPrevArrow = (props) => (
        <div className="slick-prev" onClick={props.onClick}>
          <img style={btnStyle} src={SliderLeftBtn}></img>
        </div>
    );
    

    const CustomNextArrow = (props) => (
        <div className="slick-next" onClick={props.onClick}>
         <img style={btnStyle} src={SliderRightBtn}></img>
        </div>
    );

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <CustomPrevArrow />, 
        nextArrow: <CustomNextArrow />, 
      };    

    return(
        <div style={{backgroundColor:"#D2CDBC",height: "385px"}}>
            <p style={{fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "100%",
                        color:"#67594C"}}>곰곰이의 고민</p>
            <Slide {...settings}>
                <div>
                    <div>1</div>
                </div>
                <div>
                    <div>2</div>
                </div>
                <div>
                    <div>3</div>
                </div>
                <div>
                    <div>4</div>
                </div>
                <div>
                    <div>5</div>
                </div>
                <div>
                    <div>6</div>
                </div>
                {/* Add more divs as needed */}
            </Slide>
        </div>
        
    )
}

export default Slider;