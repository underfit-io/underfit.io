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
  {
    label: 'Products & Services',
    children: [
      {
        label: 'Gateway',
        href: '/products/gateway',
        desc: 'AI control plane — identity, policy, guardrails & audit',
        category: 'Products',
      },
      {
        label: 'Data Fabric',
        href: '/products/data-fabric',
        desc: 'Unified AI-ready data intelligence layer',
        category: 'Products',
      },
      {
        label: 'Consulting',
        href: '/services',
        desc: 'AI security architecture, implementation & enablement',
        category: 'Services',
      },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
  },
]
