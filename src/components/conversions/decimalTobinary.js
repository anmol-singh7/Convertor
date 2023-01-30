import React from 'react';
import Head from "../Head"
function decimalTobinary() {
    const decimal_binary = (string) => {
        const number = parseInt(string);
        const result = number.toString(2);
        return result;
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
            <Head resultMaker={decimal_binary} error={error} />
            DecimalToBinary
        </div>
    )
}
export default decimalTobinary;