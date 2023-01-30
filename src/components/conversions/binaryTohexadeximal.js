import React from 'react';
import Head from "../Head"
function binaryTohexadecimal() {
    const binary_hex=(string)=>{
        
        let ans = parseInt(string, 2);//Convert binary to decimal
        ans = ans.toString(16);//Convert decimal to hex
        return ans.toUpperCase();
    }
    return (
        <div className="container">
            <Head resultMaker={binary_hex}/>
            binaryTohexadecimal
        </div>
    )
}
export default binaryTohexadecimal;