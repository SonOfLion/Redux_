import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../src/counter.actions';

const Counter = ({ counter, increment, decrement, reset }) => {
    return (
        <div className="counter">
            <button
                className="counter__button"
                onClick={decrement}
            >
                -
            </button>

            <span className="counter__value" onClick={reset}>
                {counter}
            </span>

            <button
                className="counter__button"
                onClick={increment}
            >
                +
            </button>
        </div>
    )
}

const mapState = state => {
                            
    return {
        counter: state,
    }
}
//mapState - это функция которая принимает сосстояние и//выбираем какие проперти хоти закинуть в компоненту

const mapDispatch =  {                   
    increment: counterActions.increment,
    decrement: counterActions.decrement,
    reset: counterActions.reset,                          
}

// const mapDispatch = dispatch => {
//     return {
//         incr: () => dispatch(increment()),
//         decr: () => dispatch(decrement()),
//         res: () => dispatch(reset()),
//     }
// }
//Принимает дизпатч который есть в сторе// И возвращает обьект
const connector = connect(mapState, mapDispatch)//HOC

export default connector(Counter);