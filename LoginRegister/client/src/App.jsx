import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import ListService from './Components/Dashboard/ListService'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <div><Dashboard /></div>
  },
  {
    path: '/register',
    element: <div><Register /></div>
  },
  {
    path: '/',
    element: <div><Login /></div>
  },
  {
    path: '/listservice',
    element: <div><ListService /></div>
  },
])

function App() {

  return (
      <div>
        <RouterProvider router={router} />
      </div>
  )
}

export default App
