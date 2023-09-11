import React from 'react';
//import ProductList from './features/product-list/ProductList';


import Home from "./app/pages/Home";

import LoginPage from "./app/pages/LoginPage";
import SignupPage from "./app/pages/SignupPage";
import {
  RouterProvider,
  createBrowserRouter,
  
} from "react-router-dom";

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);


function App() {
  return (
    <div className="App">
     
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
