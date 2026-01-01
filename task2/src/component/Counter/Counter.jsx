import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  // conditional class
  const buttonClass =
    count < 0 ? "btn danger" : count > 10 ? "btn success" : "btn";

  return (
    <div>
      <div className="counter-container">
        <button
          className={buttonClass}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>

        <span className="count">{count}</span>

        <button
          className={buttonClass}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Counter