import React, { useState } from 'react';
import { firstValue, secondValue } from '../actions';
import { connect } from 'react-redux';
const Head = (props) => {

    return (
        <div className="container">
            BinaryToDecimal
            <div class="row g-3">
                <div class="col">
                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {props.value.first}
                    </button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item" onClick={() => firstValue("binary")}>Binary</li>
                        <li className="dropdown-item" onClick={() => firstValue("decimal")}>Decimal</li>
                        <li className="dropdown-item" onClick={() => firstValue("octa")}>octa</li>
                        <li className="dropdown-item" onClick={() => firstValue("Hexa")}>Hexa</li>

                    </ul>

                </div>
                <div class="col">
                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {props.value.second}
                    </button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item" onClick={()=>secondValue("binary")}>Binary</li>
                        <li className="dropdown-item" onClick={() => secondValue("decimal")}>Decimal</li>
                        <li className="dropdown-item" onClick={() => secondValue("octa")}>octa</li>
                        <li className="dropdown-item" onClick={() => secondValue("Hexa")}>Hexa</li>

                    </ul>
                </div>
            </div>

        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return { value: state.values }
}

export default connect(mapStateToProps, { firstValue, secondValue })(Head);