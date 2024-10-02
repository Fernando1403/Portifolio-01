import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageSobre from './pages/PageSobre.jsx'
import PageProjetos from './pages/PageProjetos.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import PageCertificados from './pages/PageCertificados.jsx'
import PageEspecialidades from './pages/PageEspecialidades.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'especialidades', element: <PageEspecialidades/>},
      {path: 'sobre', element: <PageSobre/>},
      {path: 'projetos', element: <PageProjetos/>},
      {path: 'certificados', element: <PageCertificados/>},
      {path: '*', element: <PageNotFound/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
<StrictMode>
  <RouterProvider router={router}/>
</StrictMode>,
)
