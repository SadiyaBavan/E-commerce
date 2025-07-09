import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Routing from './pages/auth/Routing'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
       <RouterProvider router={Routing}></RouterProvider>
    </div>
  )
}

export default App
