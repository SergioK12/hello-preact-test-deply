import { useLocation } from 'preact-iso'
import { cn } from '../lib/utils'

export const NavLink = ({
  href,
  class: customClass,
  children,
}: {
  href: string
  class?: string
  children
}) => {
  const { url } = useLocation()

  return (
    <a
      href={href}
      aria-current={url === href ? 'page' : undefined}
      class={cn(
        'aria-[current=page]:font-semibold aria-[current=page]:underline',
        url === href && 'active',
        customClass,
      )}
    >
      {children}
    </a>
  )
}
