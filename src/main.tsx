import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './Style/index.scss'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [{
        path: "/",
        element: <div>home</div>,
    }, {
        path: "/about",
        element: <div>about</div>,
    }],
}, {
    path: "*",
    element: <Navigate to={"/"} />
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,

)
