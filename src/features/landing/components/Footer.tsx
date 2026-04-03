import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

const toolsLinks = [
  { label: 'Tools', href: '#' },
  { label: 'Pricing', href: '#' },
]

const companyLinks = [
  { label: 'Terms', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-black text-slate-900 dark:text-white">
              Trial Bro
            </span>
          </Link>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
            Empowering creators and professionals with premium AI tools at
            accessible prices.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {toolsLinks.map((link) => (
            <Button
              key={link.label}
              variant="link"
              size="sm"
              asChild
              className="h-auto p-0"
            >
              <Link
                to={link.href}
                className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            </Button>
          ))}
          {companyLinks.map((link) => (
            <Button
              key={link.label}
              variant="link"
              size="sm"
              asChild
              className="h-auto p-0"
            >
              <Link
                to={link.href}
                className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            </Button>
          ))}
        </div>

        <div className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Trial Bro. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
