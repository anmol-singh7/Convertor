import React from 'react';
import Head from "../Head"
function binaryTohexadecimal() {
    const binary_hex=(string)=>{
        
        let ans = parseInt(string, 2);//Convert binary to decimal
        ans = ans.toString(16);//Convert decimal to hex
        return ans.toUpperCase();
    }
    const error = (str) => {
        console.log("str", str.length);
        if (str.length !== 0) {
            var re = /^[0-1]+$/;
            return re.test(str) ? "" : `${str[str.length - 1]} is not a valid binary symbol. Valid inputs are 0 and 1 `;
        }
        return "";
    }
    return (
        <div className="container">
            <Head resultMaker={binary_hex} error={error}/>
            binaryTohexadecimal
        </div>
    )
}
export default binaryTohexadecimal;