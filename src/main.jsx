import React, { Profiler } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Expertise from './Expertise.jsx'
import Profile from './Profile.jsx'
import Skill from './Skill.jsx'

const router = createBrowserRouter([
  {
    path: "/", // http://localhost:5173
    element: <App />,
    children: [
      {
        index: true,
        element: <Profile />
      },
      {
        path: "profile", // http://localhost:5173/profile
        element: <Profile />
      },
      {
        path: "expertise", // http://localhost:5173/expertise
        element: <Expertise />
      },
      {
        path: "skill", // http://localhost:5173/skill
        element: <Skill />
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
