import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { NotFound } from './pages/404'
import { About } from './pages/app/about'
import { CertificadoDigital } from './pages/app/certificado-digital'
import { DeixarMei } from './pages/app/deixar-mei'
import { Home } from './pages/app/home'
import { OpenCompany } from './pages/app/open-company'
import { Plans } from './pages/app/plans'
import { TrocarContador } from './pages/app/trocar-contador'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/plans',
        element: <Plans />,
      },
      {
        path: '/deixar-de-ser-mei',
        element: <DeixarMei />,
      },
      {
        path: '/abrir-empresa',
        element: <OpenCompany />,
      },
      {
        path: '/como-funciona',
        element: <About />,
      },
      {
        path: '/trocar-contador',
        element: <TrocarContador />,
      },
      {
        path: '/certificado-digital',
        element: <CertificadoDigital />,
      },
    ],
  },
])
