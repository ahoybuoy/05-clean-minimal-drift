import { useState } from 'react'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl font-bold text-gray-900">
              CleanApp
            </a>
            <div className="hidden items-center gap-6 md:flex">
              <NavLink href="#">Features</NavLink>
              <NavLink href="#">Pricing</NavLink>
              <NavLink href="#">Docs</NavLink>
              <NavLink href="#">Blog</NavLink>
            </div>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost">Sign in</Button>
            <Button>Get Started</Button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <MenuIcon className="h-6 w-6 text-gray-600" />
          </button>
        </nav>
      </Container>
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <Container>
            <div className="space-y-1 py-4">
              <MobileNavLink href="#">Features</MobileNavLink>
              <MobileNavLink href="#">Pricing</MobileNavLink>
              <MobileNavLink href="#">Docs</MobileNavLink>
              <MobileNavLink href="#">Blog</MobileNavLink>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" className="w-full">Sign in</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
    >
      {children}
    </a>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
    >
      {children}
    </a>
  )
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )
}
