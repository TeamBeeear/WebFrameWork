import React from 'react';
import WorriedBox from '../main/WorriedBox';

function GominBoxContainer(){
    const separateDivStyle={
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    };

    const colDivStyle={
        display:"flex",
        flexDirection:"column",
    };
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{marginRight:"8%",marginLeft:"8%", marginTop:"3%", marginBottom:"8%", width:'1024px'}}>
                <div style={separateDivStyle}>
                    <div style={colDivStyle}>
                        <WorriedBox/>
                        <WorriedBox/>
                        <WorriedBox/>
                    </div>
                    <div style={colDivStyle}>
                        <WorriedBox/>
                        <WorriedBox/>
                        <WorriedBox/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GominBoxContainer;