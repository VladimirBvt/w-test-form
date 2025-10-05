import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../../shared/root-layout/root-layout.tsx'
import { PersonalDataPage } from '../../pages/personal-data-page/personal-data-page.tsx'
import { LoanParamsPage } from '../../pages/loan-params-page/loan-params-page.tsx'
import { AddressWorkPage } from '../../pages/address-work-page/address-work-page.tsx'
import { Home } from '../../pages/home/home.tsx'

export const appRouterConfig = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/step-one',
        element: <PersonalDataPage />,
      },
      {
        path: '/step-two',
        element: <AddressWorkPage />,
      },
      {
        path: '/step-three',
        element: <LoanParamsPage />,
      },
    ],
  },
])
