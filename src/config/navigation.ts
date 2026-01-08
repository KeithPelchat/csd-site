import { NavigationConfig } from '@/types/config'
import { services } from './services'
import { serviceAreas } from './areas'

export const navigation: NavigationConfig = {
  main: [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Services',
      href: '/services',
      submenu: services.map(service => ({
        name: service.name,
        href: `/services/${service.slug}`
      }))
    },
    {
      name: 'Service Areas',
      href: '/service-areas',
      submenu: serviceAreas.map(area => ({
        name: area.name,
        href: `/service-areas/${area.slug}`
      }))
    },
    {
      name: 'About',
      href: '/about'
    },
    {
      name: 'Contact',
      href: '/contact'
    }
  ],
  footer: {
    services: services.map(service => ({
      name: service.name,
      href: `/services/${service.slug}`
    })),
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Service Areas', href: '/service-areas' }
    ]
  }
}
