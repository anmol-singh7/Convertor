import React from 'react';
import Head from "../Head"
function decimalToOctal() {
    const decimal_Oct = (string) => {
        let x = Number(string);
        x = x.toString(8);//Decimal to hex
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
            <Head resultMaker={decimal_Oct} error={error} />
            decimalToOctal
        </div>
    )
}
export default decimalToOctal;