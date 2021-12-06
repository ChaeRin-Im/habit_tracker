import React, { useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = props => {
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    //useCallback: 함수를 캐시에 저장
    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });

    //두번째 인자의 값이 변경될 때 호출이 됨.
    useEffect(() => {
        console.log(`mounted & updated!: ${count}`);
    }, [count]);

    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;