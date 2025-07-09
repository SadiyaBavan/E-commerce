import { createBrowserRouter } from "react-router-dom"
import Layouts from "../auth/Layouts"
import { Forgotpass, Login, Register, Resetpass } from "./block"

const Routing = createBrowserRouter ([
    {
        path:'/auth',
        element: <Layouts />,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'resetpass',
                element: <Resetpass/>
            },
            {
                path: 'forgotpass',
                element: <Forgotpass/>
            }
        ]
    }
])



export default Routing
