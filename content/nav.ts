export interface NavChild {
  label: string
  href: string
  desc: string
  category?: string
}

export interface NavItem {
  label: string
  href?: string
  children?: NavChild[]
}

export const navItems: NavItem[] = [
  { label: 'Gateway', href: '/products/gateway' },
  { label: 'Data Fabric', href: '/products/data-fabric' },
  { label: 'Services', href: '/services' },
  { label: 'Resources', href: '/resources' },
]
