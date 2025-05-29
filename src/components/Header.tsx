import { useLocation } from 'preact-iso'
import { cn } from '../lib/utils'

export function Header() {
  const { url } = useLocation()

  return (
    <header>
      <nav class="flex gap-4">
        <a href="/" class={cn(url === '/' && 'active', 'text-blue-500')}>
          Home
        </a>
        <a href="/404" class={url === '/404' && 'active'}>
          404
        </a>
      </nav>
    </header>
  )
}
