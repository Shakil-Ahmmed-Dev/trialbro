import LandingPage from '../features/landing/components'
import { createFileRoute } from '@tanstack/react-router'
import { TRIAL_BRO } from '@/constants'
import { generateMetadata } from '@/lib/tanstack-meta'

export const Route = createFileRoute('/')({
  component: App,
  head: () =>
    generateMetadata({
      title: 'Home',
      openGraph: {
        title: TRIAL_BRO.title,
        description: TRIAL_BRO.description,
        url: TRIAL_BRO.url,
      },
    }),
})

function App() {
  return <LandingPage />
}
