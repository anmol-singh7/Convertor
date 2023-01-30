import React from 'react';
import Head from "../Head"
function OctalTobinary() {
    
    // function octal_binary(octal) {
    //     return parseInt(octal, 8).toString(2);
    // }

    function octal_binary(octal) {
        if (/^[0-7]+$/.test(octal)) {
            return parseInt(octal, 8).toString(2);
        } else {
            return "Wrong Input";
        }
    }
    const error =(str) =>{
        if(str.length!==0){
            return /^[0-7]+$/.test(str) ? "" : `${str[str.length - 1] } is not a valid Octal symbol. Valid Octal symbols are 0-7`;
        }
        return "";
    }

    return (
        <div className="container">
            <Head resultMaker={octal_binary} error={error} />
            OctalTobinary
        </div>
    )
}
export default OctalTobinary;