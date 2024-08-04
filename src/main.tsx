import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.tsx'
import CenteredPage from './Components/CenteredPage.tsx'
import MyContextProvider from './Components/MyContextProvider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
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
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <MyContextProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </MyContextProvider>
  // <App />
  // </React.StrictMode>,
)
