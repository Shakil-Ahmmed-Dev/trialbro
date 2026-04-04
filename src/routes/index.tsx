import LandingPage from '../features/landing/components'
import { createFileRoute } from '@tanstack/react-router'
import { generateMetadata } from '@/lib/tanstack-meta'

export const Route = createFileRoute('/')({
  component: App,
  head: () =>
    generateMetadata({
      title: 'Home',
    }),
})

function App() {
  return <LandingPage />
}
