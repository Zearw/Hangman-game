import { Layout } from './Layout/Layout'
import { WordProvider } from './context/WordContext'

export function App () {
  return (
    <WordProvider>
      <Layout />
    </WordProvider>
  )
}
