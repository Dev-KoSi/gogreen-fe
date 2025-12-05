import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { Learn } from "./pages/Learn"
import { TakeAction } from "./pages/TakeAction"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Books } from "./pages/Books"


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
      path: '/learn/books',
      element: (
        <>
          <Books/>
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
    {
      path: '/about',
      element: (
        <>
          <About/>
        </>
      )
    },
    {
      path: '/contact',
      element: (
        <>
          <Contact/>
        </>
      )
    },
  ])

  return(
    <RouterProvider router={router}/>
  )
}