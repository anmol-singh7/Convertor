import React from 'react';
import Head from "../Head"
function octalTodecimal() {
    
       const  octalToDecimal=(octal)=> {
            return parseInt(octal, 8);
        }

    const error = (str) => {
        if (str.length !== 0) {
            return /^[0-7]+$/.test(str) ? "" : `${str[str.length - 1]} is not a valid Octal symbol. Valid Octal symbols are 0-7`;
        }
        return "";
    }
    return (
        <div className="container">
            <Head resultMaker={octalToDecimal} error={error} />
            octalTodecimal
        </div>
    )
}
export default octalTodecimal;