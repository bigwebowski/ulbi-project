import React, { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState<number>(0)

  const increment = () => setCount(c => c + 1)

  return (
    <div>
      <button onClick={increment}>increment</button>
      <div className={classes.green}>Count: {count}</div>
    </div>
  )
}
