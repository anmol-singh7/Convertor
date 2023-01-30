import React from 'react';
import Head from "../Head"
function hexadecimalTobinary() {
    const hexa_binary=(string)=>{
  
        return parseInt(string, 16).toString(2);
    }

    const error =(str)=> {
        if(str.length!==0){
      const  regexp = /^[0-9 A-F]+$/;

        if (regexp.test(str)) {
            return "";
        }
        else {
            return `${str[str.length-1]} is not a valid hexadecimal symbol. Valid hexadecimal number are 0-9 and A-F`;
        }
    }
    else{
        return "";
    }
    }

    return (
        <div className="container">
            <Head resultMaker={hexa_binary} error={error} />
            hexadecimalTobinary
        </div>
    )
}
export default hexadecimalTobinary;