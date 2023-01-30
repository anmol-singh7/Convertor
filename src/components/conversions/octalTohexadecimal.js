import React from 'react';
import Head from "../Head"
function octalTohexadecimal() {

    const octal_hexa = (string) => {

        var x = Number(string);
        return x.toString(16);
    }


    return (
        <div className="container">
            <Head />
            octalTohexadecimal
        </div>
    )
}
export default octalTohexadecimal;