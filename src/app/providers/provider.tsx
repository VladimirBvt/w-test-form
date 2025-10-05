import { QueryProvider } from './query-client-provider'
import { RouterProviderComponent } from './router-provider'

export const Provider = () => {
  return (
    <QueryProvider>
      <RouterProviderComponent />
    </QueryProvider>
  )
}
