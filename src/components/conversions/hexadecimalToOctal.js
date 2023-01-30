import React from 'react';
import Head from "../Head"
function hexadecimalToOctal() {
    const hexa_Octa=(string)=>{
      
        return parseInt(string, 16).toString(8);
    }

    const error = (str) => {
        if (str.length !== 0) {
            const regexp = /^[0-9 A-F]+$/;

            if (regexp.test(str)) {
                return "";
            }
            else {
                return `${str[str.length - 1]} is not a valid hexadecimal symbol. Valid hexadecimal number are 0-9 and A-F`;
            }
        }
        else {
            return "";
        }
    }
    return (
        <div className="container">
            <Head resultMaker={hexa_Octa}  error={error}/>
            hexadecimalToOctal
        </div>
    )
}
export default hexadecimalToOctal;