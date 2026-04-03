import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import TanStackQueryDevtools from '../lib/tanstack-query/devtools'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'
import { generateMetadata } from '@/lib/tanstack-meta'
import { TRIAL_BRO } from '@/constants'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    ...generateMetadata({
      charSet: "utf-8",
      viewport: {
        width: "device-width",
        initialScale: 1,
      },
      description: TRIAL_BRO.description,
      openGraph: {
        title: TRIAL_BRO.title,
        type: 'website',
        description: TRIAL_BRO.description,
        url: TRIAL_BRO.url,
        images: [
          {
            url: `${TRIAL_BRO.url}/og-image.png`,
            width: 1200,
            height: 630,
          },
        ],
        siteName: TRIAL_BRO.title,
      },
      authors: [
        {
          name: TRIAL_BRO.title,
          url: TRIAL_BRO.url,
        },
        {
          name: 'Shakil Ahmmed',
          url: 'https://saw-dev.site',
        },
      ],
      twitter: {
        card: 'summary_large_image',
        title: TRIAL_BRO.title,
        description: TRIAL_BRO.shortDescription,
        images: [`${TRIAL_BRO.url}/og-image.png`],
        creator: '@shakil_ahm7345',
      },
      robots: {
        index: true,
        follow: true,
      },
    }),
    links: [
      {
        rel: 'canonical',
        href: TRIAL_BRO.url,
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: TRIAL_BRO.title,
    url: TRIAL_BRO.url,
    description: TRIAL_BRO.description,
    sameAs: ['https://x.com/shakil_ahm7345'],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@trialbro.saw-dev.site',
      contactType: 'customer service',
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased wrap-anywhere selection:bg-[rgba(79,184,178,0.24)]">
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
