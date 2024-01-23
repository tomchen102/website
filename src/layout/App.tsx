import { useState } from "react"
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="/" className="flex items-center">
                            <img src="../assets/snack.png" className="mr-3 h-6" alt="Website Logo"/>
                            <span className="self-center text-xl font-normal whitespace-nowrap">Website</span>
                        </a>
                        <div>
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/about">ABOUT</a>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <a href="#">Log in</a>
                            <a href="#">Cart</a>
                        </div>
                    </div>
                </nav>
            </header>
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

export default App;
