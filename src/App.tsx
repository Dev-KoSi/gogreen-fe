import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/login"
import { Signup } from "./pages/signup"
import { Learn } from "./pages/Learn"
import { TakeAction } from "./pages/TakeAction"


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
    {
      path: '/learn',
      element: (
        <>
          <Learn/>
        </>
      )
    },
    {
      path: '/takeaction',
      element: (
        <>
          <TakeAction/>
        </>
      )
    },
  ])

  return(
    <RouterProvider router={router}/>
  )
}