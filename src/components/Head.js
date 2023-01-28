import React, { useState } from 'react';
import { firstValue, secondValue } from '../actions';
import { connect } from 'react-redux';
import history from '../history';
const Head = (props) => {
    const { first, second } = props.value;

    const firstWatcher = (initials) => {
        if (initials !== second) {
            props.firstValue(initials, second)
        }
    }
    const secondWatcher=(lasts)=>{
         if(lasts!==first){
            props.secondValue(lasts,first)
         }
    }
    //   history.push
    return (
        <div className="container">
            <div className="row g-3">
                <div className="col">
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
                <div className="col">
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

        </div>

    )
}
const mapStateToProps = (state) => {
    console.log("map", state.values)
    return { value: state.values }
}

export default connect(mapStateToProps, { firstValue, secondValue })(Head);