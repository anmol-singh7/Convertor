import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import binaryTodecimal from "./conversions/binaryTodecimal";
import binaryTohexadecimal from "./conversions/binaryTohexadeximal";
import binaryToOctal from "./conversions/binaryToOctal";
import decimalTobinary from "./conversions/decimalTobinary";
import decimalToOctal from "./conversions/decimalToOcatal";
import decimalToHexadecimal from "./conversions/decimalTohexadecimal";
import OctalTobinary from "./conversions/octalTobinary";
import octalTodecimal from "./conversions/octalTodecimal";
import octalTohexadecimal from "./conversions/octalTohexadecimal";
import hexadecimalTodecimal from "./conversions/hexadecimalTodecimal";
import hexadecimalTobinary from "./conversions/hexadecimalTobinary";
import hexadecimalToOctal from "./conversions/hexadecimalToOctal";
import history from '../history';
import Head from "./Head";

function App() {
    return (
        <Router history={history}>
        <Head/>
            <Switch>
                {/* <Route path="/" exact component={homePage} /> */}
                <Route path="/binaryTodecimal" exact component={binaryTodecimal} />
                <Route path="/binaryToOctal" exact component={binaryToOctal} />
                <Route path="/binaryTohexadecimal" exact component={binaryTohexadecimal}  />

                <Route path="/decimalTobinary" exact component={decimalTobinary} />
                <Route path="/decimalToOctal" exact component={decimalToOctal } />
                <Route path="/decimalTohexadecimal" exact component={decimalToHexadecimal } />

                <Route path="/OctalTobinary" exact component={OctalTobinary } />
                <Route path="/OctalTodecimal" exact component={octalTodecimal } />
                <Route path="/OctalTohexadecimal" exact component={octalTohexadecimal } />

                <Route path="/hexadecimalTodecimal" exact component={hexadecimalTodecimal } />
                <Route path="/hexadecimalTobinary" exact component={hexadecimalTobinary} />
                <Route path="/hexadecimalToOctal" exact component={hexadecimalToOctal } />
                
            </Switch>
        </Router>

    )
}
export default App;
