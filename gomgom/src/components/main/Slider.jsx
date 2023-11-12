import React,{useEffect, useState} from "react";
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderLeftBtn from "../../img/SliderLeftBtn.png";
import SliderRightBtn from "../../img/SliderRightBtn.png";
import SliderContent from "./SliderContent";
import axios from 'axios';

function Slider({ style }){
    const btnStyle = {
        width:"48px",
        height:"48px",
    }
    const CustomPrevArrow = (props) => (
        <div className="slick-prev" onClick={props.onClick} style={{marginRight:"20px"}}>
          {/* <img style={btnStyle} src={SliderLeftBtn}></img> */}
        </div>
    );
    

    const CustomNextArrow = (props) => (
        <div className="slick-next" onClick={props.onClick}>
         {/* <img style={btnStyle} src={SliderRightBtn}></img> */}
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

    const [data, setData] = useState('')

    useEffect(() => {
          axios.get('api/gomgom-post/all')
              .then(response => setData(response.data))
              .catch(error => console.log(error))
      }, []);
    return(
        <div style={{...style, height: "385px"}}>
            <p style={{fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "100%",
                        color:"#67594C",marginTop:"0px",paddingTop:"60px"}}>곰곰이의 고민</p>


            <div style={{marginLeft:"10%"}}> {/* marginRight:"10%" 삭제 */}
                <Slide {...settings}>
                {Array.isArray(data) && data.map((item) => (
                    <div>
                        <SliderContent title={item.title}/>
                    </div>
                ))}
                </Slide>
            </div>
        </div>
        
    )
}

export default Slider;