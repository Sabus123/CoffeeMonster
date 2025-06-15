import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdatedCoffee from './Components/UpdatedCoffee.jsx';
import CoffeeDetailse from './Components/CoffeeDetailse.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProvider from './Context/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: ()=> fetch('http://localhost:3000/coffees'),
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path:'coffee/:;id',
        Component: CoffeeDetailse,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdatedCoffee,
      },
      {
        path: 'signin',
        Component:SignIn
      },
      {
        path: 'signup',
        Component: SignUp
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
