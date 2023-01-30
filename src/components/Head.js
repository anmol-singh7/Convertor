import React, { useState } from 'react';
import { firstValue, secondValue,swap } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Head = (props) => {
    const [valueToConvert,setValue]=useState('');
    const [result,setResult] =useState('');

    const resultCaller=()=>{
        // console.log("a")
        setResult(props.resultMaker(valueToConvert));
    }

    const { first, second } = props.value;

    const firstWatcher = (initials) => {
        if (initials !== second) {
            props.firstValue(initials, second)
        }
    }
    const secondWatcher = (lasts) => {
        if (lasts !== first) {
            props.secondValue(lasts, first)
        }
    }
  
    //   history.push
    return (

        <div className="col-6" style={{ position: 'relative', marginTop: '40px' }}>
            <div className="row g-3">
                <div className="col-6" >
                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {props.value.first}
                    </button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item" onClick={() => firstWatcher("binary")}>Binary</li>
                        <li className="dropdown-item" onClick={() => firstWatcher("decimal")}>Decimal</li>
                        <li className="dropdown-item" onClick={() => firstWatcher("Octal")}>Octal</li>
                        <li className="dropdown-item" onClick={() => firstWatcher("hexadecimal")}>Hexadecimal</li>

                    </ul>

                </div>
                <div className="col-6" >
                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {props.value.second}
                    </button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item" onClick={() => secondWatcher("binary")}>Binary</li>
                        <li className="dropdown-item" onClick={() => secondWatcher("decimal")}>Decimal</li>
                        <li className="dropdown-item" onClick={() => secondWatcher("Octal")}>Octal</li>
                        <li className="dropdown-item" onClick={() => secondWatcher("hexadecimal")}>Hexadecimal</li>

                    </ul>
                </div>
            </div>
            <div className="form-floating mb-3 col-12" style={{ position: 'relative', marginTop: '40px' }}>
               
                <input type="text" className="form-control" value={valueToConvert} onChange={(e)=>{setValue(e.target.value)}}/>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <button type="button" className="btn btn-success" onClick={()=>resultCaller()}>Convert</button>
                </div>
                <div className='col-4'>
                    <button type="button" className="btn btn-primary" onClick={() => {
                                                                                       setValue("");
                                                                                        setResult("");
                                                                                       }}>Reset</button>
                </div>
                <div className='col-4'>
                    <button type="button" className="btn btn-warning" onClick={()=>props.swap(first,second)}>Swap</button>
                </div>
            </div>
            <div className='row g-6 mt-5 ' style={{border:"1px grey solid",height:"8rem",textAlign:"end"}}  >
                 <p>{result}</p>
            </div>

        </div>
    )
}
const mapStateToProps = (state) => {
    console.log("map", state.values)
    return { value: state.values }
}
// export default connect(mapStateToProps, { firstValue, secondValue })(reduxForm({
//     form: 'HeAD'
// })(Head));

export default connect(mapStateToProps, { firstValue, secondValue ,swap})(Head);