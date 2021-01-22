import React from 'react';

function Buttons(props) {

function plus() {
    if(props.counter >= 0) {
        props.setCounter(props.counter + 1);
    }
}
function minus() {
    if(props.counter > 0) {
        props.setCounter(props.counter - 1);
    }
}
function reset() {
    if(props.counter > 0) {
        props.setCounter(0);
    }
}
    return (
        <div className="buttons">
            <div className="butt-1" onClick={plus}>Увеличить</div>
            <div className="butt-2" onClick={minus}>Уменьшить</div>
            <div className="butt-3" onClick={reset}>Сбросить</div>
        </div>
    );
}

export default Buttons;