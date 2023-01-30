import React from 'react';
import Head from "../Head"
function decimalTobinary() {
    const decimal_binary = (string) => {
        const number = parseInt(string);
         const result = number.toString(2);
         return result;
    }
    return (
        <div className="container">
            <Head resultMaker={decimal_binary}/>
            DecimalToBinary
        </div>
    )
}
export default decimalTobinary;