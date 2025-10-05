import { RouterProvider } from 'react-router-dom'

import { appRouterConfig } from '../router/config.tsx'

export const RouterProviderComponent = () => {
  return <RouterProvider router={appRouterConfig} />
}
