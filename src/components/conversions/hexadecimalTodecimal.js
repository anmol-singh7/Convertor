import React from 'react';
import Head from "../Head"
function hexadecimalTodecimal() {
    const hexa_decimal = (string) => {
        var x = Number(string);
        return x.toString(10);//Convert hex to decimal
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
            <Head resultMaker={hexa_decimal} error={error} />
            hexadecimalTodecimal
        </div>
    )
}
export default hexadecimalTodecimal;