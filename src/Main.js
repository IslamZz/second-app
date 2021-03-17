import React from 'react';
import Number from "./Number";
import Buttons from "./Buttons";
import { useState } from "react";

function Main(props) {
    const [counter, setCounter] = useState(0);
    return (
        <div className="main">
            <Number counter={counter} />
            <Buttons counter={counter} setCounter={setCounter} />
        </div>
    );
}

export default Main;