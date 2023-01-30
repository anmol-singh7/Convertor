import React from 'react';
import Head from "../Head"
function binaryToOctal() {

    const binary_Octal = (string) => {

        let ans = parseInt(string, 2);//Convert binary to decimal
        ans = ans.toString(8);//Convert decimal to octal
        return ans;
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
            <Head resultMaker={binary_Octal} error={error} />
            binaryToOctal
        </div>
    )
}
export default binaryToOctal;