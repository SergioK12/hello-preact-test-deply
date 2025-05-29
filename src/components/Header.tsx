import { useLocation } from 'preact-iso'
import { NavLink } from './nav-link'

export function Header() {
  const { url } = useLocation()

  return (
    <header>
      <nav class="flex gap-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/form">Form</NavLink>
        <NavLink href="/404">404</NavLink>
      </nav>
    </header>
  )
}
