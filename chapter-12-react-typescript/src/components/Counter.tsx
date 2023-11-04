import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState<number | null>(null)
    return (
        <>
            <h1>Count is {count}</h1>
            <button onClick={() => setCount((count || 0) + 1)} >Add</button>
            <button onClick={() => setCount(prev => (prev || 0) + 1)} >+</button>
            <button onClick={() => setCount(prev => (prev || 0) - 1)} >-</button>
        </>
    )
}

export default Counter