import type { PropsWithChildren } from 'react'
import { Provider } from './providers/provider.tsx'
import './App.css'

function App({ children }: PropsWithChildren) {
  return <Provider>{children}</Provider>
}

export default App
