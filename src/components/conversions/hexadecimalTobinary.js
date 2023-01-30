import React from 'react';
import Head from "../Head"
function hexadecimalTobinary() {
    const hexa_binary=(string)=>{
         var x=Number(string);
       return x.toString(10);//Convert hex to decimal
    }
    return (
        <div className="container">
            <Head resultMaker={hexa_binary}/>
            hexadecimalTobinary
        </div>
    )
}
export default hexadecimalTobinary;