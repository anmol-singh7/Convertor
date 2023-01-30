import React from 'react';
import Head from "../Head"
function decimalToOctal() {
    const decimal_Oct=(string)=>{
        let  x = Number(string); 
        x = x.toString(8);//Decimal to hex
        return x;
    }
    return (
        <div className="container">
            <Head resultMaker={decimal_Oct}/>
            decimalToOctal
        </div>
    )
}
export default decimalToOctal;