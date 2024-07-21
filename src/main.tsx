import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.tsx'
import CenteredPage from './Components/CenteredPage.tsx'
import MyContextProvider from './Components/MyContextProvider.tsx'
const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/Fitness-Tracker", element: <App /> },
      { path: "*", element: <CenteredPage><h1>Wrong Route</h1></CenteredPage> },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <MyContextProvider>
    <RouterProvider router={router} />
  </MyContextProvider>
  // <App />
  // </React.StrictMode>,
)
