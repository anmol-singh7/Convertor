import React from 'react';
import Head from "../Head"
function decimalToHexadecimal() {
    const decimal_hex = (string) => {

        let x = Number(string);
        x = x.toString(16);//Decimal to hex
        return x;
    }
    const error = (decimal) => {
        if (decimal.length !== 0) {
            const w = /^[0-9]+$/.test(decimal);
            if (w) {
                return "";
            }
            else {
                return `${decimal[decimal.length - 1]} is not a valid decimal symbol. Valid decimal symbols are from 0-9`
            }
        }
        return "";
    }
    return (
        <div className="container">
            <Head resultMaker={decimal_hex} error={error} />
            decimalToHexadecimal
        </div>
    )
}
export default decimalToHexadecimal;