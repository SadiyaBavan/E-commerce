import { createBrowserRouter } from "react-router-dom"
import Layouts from "../auth/Layouts"
import { Forgotpass, Login, Register, Resetpass } from "./block"
import Productcart from "../auth/product/listing/common/Productcart"

const Routing = createBrowserRouter([
    {
        path: '/auth',
        element: <Layouts />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'resetpass',
                element: <Resetpass />
            },
            {
                path: 'forgotpass',
                element: <Forgotpass />
            }
        ]


    },
    {
        path: 'product/listing',
        element: <Productcart />,

    }



])



export default Routing
