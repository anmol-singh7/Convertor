import React from 'react';
import Head from "../Head"
function hexadecimalTodecimal() {
    const hexa_decimal = (string) => {
        var x = Number(string);
        return x.toString(10);//Convert hex to decimal
    }
    return (
        <div className="container">
            <Head resultMaker={hexa_decimal}/>
            hexadecimalTodecimal
        </div>
    )
}
export default hexadecimalTodecimal;