import React from 'react';
import Head from "../Head"
function binaryTodecimal(){
  const binary_decimal=(string)=>{
     return parseInt(string, 2)
  }
 
    return(
        <div className="container">
            <Head resultMaker ={binary_decimal}/>
            BinaryToDecimal       
        </div>
    )
}
export default binaryTodecimal;