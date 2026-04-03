import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Link } from '@tanstack/react-router'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
]

function NavLinks({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <ul className="flex flex-col gap-1 sm:flex-row sm:gap-6">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/30 bg-background/95 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold">Trial Bro</span>
        </Link>
        <NavLinks className="hidden md:flex" />

        <div className="hidden md:flex md:items-center md:gap-3">
          <Button variant="outline" size="sm">
            Log in
          </Button>
          <Button size="sm">Get Started</Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon className="size-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex w-72 flex-col p-6">
            <div className="flex items-center gap-2">
              <span className="font-heading text-xl font-bold">Trial Bro</span>
            </div>
            <nav className="mt-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <SheetClose key={link.label} asChild>
                  <a
                    href={link.href}
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2">
              <SheetClose asChild>
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button className="w-full">Get Started</Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
