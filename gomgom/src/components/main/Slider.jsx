import React,{useEffect, useState} from "react";
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider0 from "../../img/slider/Slider0.png";
import Slider1 from "../../img/slider/Slider1.png";
import Slider2 from "../../img/slider/Slider2.png";
import Slider3 from "../../img/slider/Slider3.png";
import Slider4 from "../../img/slider/Slider4.png";
import Slider5 from "../../img/slider/Slider5.png";
import Slider6 from "../../img/slider/Slider6.png";
import Slider7 from "../../img/slider/Slider7.png";

import SliderContent from "./SliderContent";
import axios from 'axios';
import { Link } from "react-router-dom";

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

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
      };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <CustomPrevArrow />, 
        nextArrow: <CustomNextArrow />, 
      };    

    const [data, setData] = useState('')

    const urlData =[
        Slider0,
        Slider1,
        Slider2,
        Slider3,
        Slider4,
        Slider5,
        Slider6,
        Slider7,
    ]

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
                {Array.isArray(data) && data.map((item, index) => (
                    <div>
                        <Link to={`/gomin-post?id=${item.id}`} style={linkStyle}><SliderContent title={item.title} url={urlData[index]}/></Link>
                    </div>
                ))}
                </Slide>
            </div>
        </div>
        
    )
}

export default Slider;