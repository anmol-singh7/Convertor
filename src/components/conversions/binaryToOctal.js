import React from 'react';
import Head from "../Head"
function binaryToOctal() {

    const binary_Octal = (string) => {

        let ans = parseInt(string, 2);//Convert binary to decimal
        ans = ans.toString(8);//Convert decimal to octal
        return ans;
    }
    return (
        <div className="container">
            <Head resultMaker={binary_Octal} />
            binaryToOctal
        </div>
    )
}
export default binaryToOctal;