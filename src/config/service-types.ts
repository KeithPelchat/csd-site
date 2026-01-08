export interface ServiceType {
  id: string
  name: string
  icon: string  // Font Awesome icon class
}

export const serviceTypes: ServiceType[] = [
  { id: 'commercial', name: 'Commercial Construction', icon: 'fa-building' },
  { id: 'roofing', name: 'Roofing', icon: 'fa-home' },
  { id: 'residential', name: 'Residential & DIY', icon: 'fa-hammer' },
  { id: 'landscaping', name: 'Yard & Landscaping', icon: 'fa-tree' },
  { id: 'demolition', name: 'Demolition', icon: 'fa-hard-hat' }
]

export function getServiceTypeById(id: string): ServiceType | undefined {
  return serviceTypes.find(s => s.id === id)
}
