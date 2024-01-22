import { useState } from 'react'
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

    return (
        <>
            <div className="container mx-auto">
                <Outlet/>
            </div>
            <div className="text-3xl">
                數量: {count}
                <button onClick={() => setCount((count) => count + 1)}>↑</button>
                {/*if count === 0 button no display*/}
                <button disabled={count <= 0} onClick={() => setCount((count) => count - 1)}>↓</button>
            </div>
        </>
    );
}

export default App
