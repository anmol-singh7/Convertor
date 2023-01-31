import React from  'react';
function dropButton(props){
    return (<div className="col-5" >

        <button className=" form-select form-select-lg mb-3" type="button" data-bs-toggle="dropdown" aria-label=".form-select-lg example"  aria-expanded="false">
            {props.value}
        </button>
        <ul className="dropdown-menu">
            <li className="dropdown-item col-6 mb-2" style={{width:"20vw"}} onClick={() => props.Watcher("binary")}>Binary</li>
            <li className="dropdown-item col-6 mb-2" style={{width:"20vw"}} onClick={() => props.Watcher("decimal")}>Decimal</li>
            <li className="dropdown-item col-6 mb-2" style={{width:"20vw"}} onClick={() => props.Watcher("Octal")}>Octal</li>
            <li className="dropdown-item col-6 mb-2" style={{width:"20vw"}} onClick={() => props.Watcher("hexadecimal")}>Hexadecimal</li>

        </ul>

    </div>)
}
export default dropButton;