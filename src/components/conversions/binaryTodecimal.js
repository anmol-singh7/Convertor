import React from 'react';
import Head from "../Head"
function binaryTodecimal(){

  const binary_decimal=(string)=>{
     return parseInt(string, 2)
  }

    const error=(str)=> {
        console.log("str",str.length);
        if(str.length!==0){
        var re = /^[0-1]+$/;
        return re.test(str) ? "" : `${str[str.length-1]} is not a valid binary symbol. Valid inputs are 0 and 1 `;
        }
        return "";
    }
    return(
        <div className="container">
            <Head resultMaker ={binary_decimal} error={error}/>
            BinaryToDecimal       
        </div>
    )
}
export default binaryTodecimal;