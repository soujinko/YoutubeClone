import React, { useCallback, useRef, useState } from 'react';

const SimpleHabit = (props) => {
    const [count, setCount] =  useState(0);
    const spanRef = useRef();
    
    const handleIncrement = () => {
        setCount(count +1 )
    }
    const handleDecrement = () => {
        
        setCount(count -1 )
    }
    
    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button onClick={handleIncrement}>
            <i className="far fa-plus-square"></i>
            </button>
            <button onClick={handleDecrement}>
            <i className="far fa-minus-square"></i>
            </button>
        </li>
    );
}

export default SimpleHabit;