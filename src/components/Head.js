import React, { useState } from 'react';
import { firstValue, secondValue, swap } from '../actions';
import { connect } from 'react-redux';
import DropButton from './DropButtons';
import "../Designs/head.css";

const Head = (props) => {
    const [valueToConvert, setValue] = useState('');
    const [result, setResult] = useState("");
    const [classname, setClassname] = useState('form-control2');
    const [errorMessage, setError] = useState('');
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

    const handleChange = (e) => {
        let err = "";
        err = props.error(e);
        if (err !== "") {
            setError(err);
            setClassname('form-control2  form-control2-red-outline');
        }
        else {
            setValue(e)
            setClassname('form-control2');
            setError("");

        }
    }
    return (

        <div className="col-6 container" style={{ position: 'relative', marginTop: '40px', backgroundColor:"#F0EEDC"}}>
            <div className="row g-3">
                <DropButton value={props.value.first} Watcher={firstWatcher} />
                <div className="col-1 " style={{marginTop:"1.5rem", cursor:"pointer"}}onClick={() => props.swap(first, second)}><img alt="" src="https://cdn-icons-png.flaticon.com/512/4305/4305578.png" height="30vh" width="25vw" />
                </div>
                <DropButton value={props.value.second} Watcher={secondWatcher} />
            </div>
            <div className="form-floating mb-3 col-12" style={{ position: 'relative', marginTop: '40px' }}>
                <form className="row g-3" >
                    <div className="col-md-8 ">
                        <input type="text" className={classname} value={valueToConvert} onChange={(e) => handleChange(e.target.value)} />
                        <div className="errorcolor">
                            {errorMessage}
                        </div>
                    </div>
                </form >
            </div >

            <div className='row' style={{marginTop:"10px"}}>
                <div className='col-6'>
                    <button type="button" className="btn btn-success btn-lg" onClick={() => {
                        setResult(props.resultMaker(valueToConvert));
                        setClassname('form-control2')
                        setError("");
                    }}>Convert</button>
                </div>
                <div className='col-6'>
                    <button type="button" className="btn btn-primary btn-lg" onClick={() => {
                        setValue("");
                        setResult("");
                        setClassname("form-control2");
                        setError("");
                    }}>Reset</button>
                </div>
                
            </div>
            <div className='row g-6 result_align' style={{marginLeft:"1rem"}} >
                
                <p>{result}</p>

            </div>

        </div >
    )
}
const mapStateToProps = (state) => {
    console.log("map", state.values)
    return { value: state.values }
}
export default connect(mapStateToProps, { firstValue, secondValue, swap })(Head);