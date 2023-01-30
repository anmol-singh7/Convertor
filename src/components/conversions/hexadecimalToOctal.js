import React from 'react';
import Head from "../Head"
function hexadecimalToOctal() {
    const hexa_Octa=(string)=>{
        let x=Number(string);
       return  x.toString(8);//Hex to octal
    }
    return (
        <div className="container">
            <Head resultMaker={hexa_Octa}/>
            hexadecimalToOctal
        </div>
    )
}
export default hexadecimalToOctal;