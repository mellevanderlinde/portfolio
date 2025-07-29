'use client'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { TextEffect } from '@/components/ui/text-effect'

export function Header(): ReactNode {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Melle van der Linde
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Cloud Engineer
        </TextEffect>
      </div>
    </header>
  )
}
