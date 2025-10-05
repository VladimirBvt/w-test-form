import type { PropsWithChildren } from 'react'
import { RouterProviderComponent } from './router-provider.tsx'

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <RouterProviderComponent />
      {children}
    </>
  )
}
