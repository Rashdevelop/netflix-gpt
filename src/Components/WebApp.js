import React from 'react'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Slash from './Slash'

import SignIn from './SignIn'

const WebApp = () => {
    const AppRouter=createBrowserRouter([
        {
            path:"/",
            element:<Slash></Slash>
        },
       
        {
            path:"/signin",
            element:<SignIn></SignIn>
        },
        
    ])
  return (
    <div>
       <RouterProvider router={AppRouter} />
    </div>
  )
}

export default WebApp
