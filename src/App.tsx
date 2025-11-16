import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/login"
import { Signup } from "./pages/signup"


export function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Home/>
        </>
      )
    },
    {
      path: '/login',
      element: (
        <>
          <Login/>
        </>
      )
    },
    {
      path: '/create-account',
      element: (
        <>
          <Signup/>
        </>
      )
    },
  ])

  return(
    <RouterProvider router={router}/>
  )
}