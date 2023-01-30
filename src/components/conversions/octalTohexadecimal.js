import React from 'react';
import Head from "../Head"
function octalTohexadecimal() {

    const octal_hexa = (string) => {

            return parseInt(string, 8).toString(16);
    }
    const error = (str) => {
        if (str.length !== 0) {
            return /^[0-7]+$/.test(str) ? "" : `${str[str.length - 1]} is not a valid Octal symbol. Valid Octal symbols are 0-7`;
        }
        return "";
    }

    return (
        <div className="container">
            <Head resultMaker={octal_hexa} error={error} />
            octalTohexadecimal
        </div>
    )
}
export default octalTohexadecimal;