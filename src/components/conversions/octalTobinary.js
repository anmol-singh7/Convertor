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
    return (
        <div className="container">
            <Head resultMaker={octal_binary}/>
            OctalTobinary
        </div>
    )
}
export default OctalTobinary;