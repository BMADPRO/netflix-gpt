import React from 'react'
import Browser from './Browser';
import Login from './Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {
  

  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/browse",
        element: <Browser/>
    }
  ]);

  
  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body;