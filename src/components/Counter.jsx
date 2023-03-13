import React, { useState } from 'react'
import '../styles/Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className='counter-container'>
            <div className='counter-display'>
                <p>Button clicked {count} times</p>
            </div>
            <button className='counter-button' onClick={() => setCount(count + 1)}>
                Increase the Count
            </button>
        </div>
    )
}

// Note - this isn't actually used in the project. I just wanted to build it to play around with stateful components.