import {createBrowserRouter,RouterProvider}  from "react-router-dom"
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";


function App() {

  const router=createBrowserRouter([{
    path:"/",
    element:<Home/>
  },
  {
    path:"cart/:ids",
    element:<Cart/>
  }
])

  return (
  <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
