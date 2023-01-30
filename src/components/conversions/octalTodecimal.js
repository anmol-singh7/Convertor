import React from 'react';
import Head from "../Head"
function octalTodecimal() {
    function octalToDecimal(octal) {
        let decimal = 0;
        for (let i = 0; i < octal.length; i++) {
            let digit = parseInt(octal[i]);
            if (isNaN(digit) || digit < 0 || digit > 7) {
                return `Wrong input: ${octal[i]} is not a valid octal digit.`;
            }
            decimal = decimal * 8 + digit;
        }
        return decimal;
    }

    return (
        <div className="container">
            <Head resultMaker={octalToDecimal} />
            octalTodecimal
        </div>
    )
}
export default octalTodecimal;