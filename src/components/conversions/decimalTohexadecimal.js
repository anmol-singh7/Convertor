import React from 'react';
import Head from "../Head"
function decimalToHexadecimal() {
    const decimal_hex=(string)=>{
       
      let  x = Number(string); 
        x = x.toString(16);//Decimal to hex
        return x;
    }
    return (
        <div className="container">
            <Head resultMaker={decimal_hex}/>
            decimalToHexadecimal
        </div>
    )
}
export default decimalToHexadecimal;