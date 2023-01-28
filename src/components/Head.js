import React, { useState } from 'react';
import { firstValue, secondValue } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
const Head = (props) => {
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
    const render = (formProps) => {
        console.log(formProps)
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
                <Field name="value" component={render} label="value" />
                <input type="text" className="form-control" id="floatingInput" />
            </div>
            <div className='row'>
                <div className='col-4'>
                    <button type="button" className="btn btn-success">Convert</button>
                </div>
                <div className='col-4'>
                    <button type="button" className="btn btn-primary">Reset</button>
                </div>
                <div className='col-4'>
                    <Link to={`${second}To${first}`}> <button type="button" className="btn btn-warning">Swap</button></Link>
                </div>
            </div>

        </div>
    )
}
const mapStateToProps = (state) => {
    console.log("map", state.values)
    return { value: state.values }
}
export default connect(mapStateToProps, { firstValue, secondValue })(reduxForm({
    form: 'HeAD'
})(Head));


//  export default connect(mapStateToProps, { firstValue, secondValue })(Head);