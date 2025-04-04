import type { ReactNode } from 'react'
import Link from 'next/link'

// eslint-disable-next-line react-refresh/only-export-components
export const name = 'Melle'

// eslint-disable-next-line react-refresh/only-export-components
export const navItems = {
  '/blog': { name: 'Blog' },
  '/projects': { name: 'Projects' },
  '/work': { name: 'Work' },
}

export function Navbar(): ReactNode {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {name}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
