import { ServiceAreaConfig } from '@/types/config'

export const serviceAreas: ServiceAreaConfig[] = [
  {
    id: 'nashville',
    name: 'Nashville',
    slug: 'nashville',
    description: 'Serving all of Nashville and Davidson County with fast, reliable dumpster rental services. From downtown to the suburbs, we deliver where you need us.',
    zip_codes: ['37201', '37202', '37203', '37204', '37205', '37206', '37207', '37208', '37209', '37210', '37211', '37212', '37213', '37214', '37215', '37216', '37217', '37218', '37219', '37220', '37221', '37222', '37224', '37227', '37228', '37229', '37230', '37232', '37234', '37235', '37236', '37238', '37240', '37241', '37242', '37243', '37244', '37246', '37250'],
    coordinates: {
      lat: 36.1627,
      lng: -86.7816
    },
    featured: true
  },
  {
    id: 'franklin',
    name: 'Franklin',
    slug: 'franklin',
    description: 'Premium dumpster rental services for Franklin and Williamson County. Supporting residential and commercial projects in one of Tennessee\'s fastest-growing areas.',
    zip_codes: ['37064', '37065', '37067', '37068', '37069'],
    coordinates: {
      lat: 35.9251,
      lng: -86.8689
    },
    featured: true
  },
  {
    id: 'hendersonville',
    name: 'Hendersonville',
    slug: 'hendersonville',
    description: 'Reliable dumpster rental for Hendersonville and Sumner County. Quick delivery and pickup for all your waste disposal needs.',
    zip_codes: ['37075', '37077'],
    coordinates: {
      lat: 36.3048,
      lng: -86.6200
    },
    featured: true
  },
  {
    id: 'murfreesboro',
    name: 'Murfreesboro',
    slug: 'murfreesboro',
    description: 'Serving Murfreesboro and Rutherford County with dependable dumpster rental services for residential, commercial, and construction projects.',
    zip_codes: ['37127', '37128', '37129', '37130', '37131', '37132', '37133'],
    coordinates: {
      lat: 35.8456,
      lng: -86.3903
    },
    featured: false
  },
  {
    id: 'brentwood',
    name: 'Brentwood',
    slug: 'brentwood',
    description: 'Professional dumpster rental services for Brentwood residents and businesses. Clean, reliable service for your waste management needs.',
    zip_codes: ['37024', '37027'],
    coordinates: {
      lat: 36.0331,
      lng: -86.7828
    },
    featured: false
  }
]

export function getAreaBySlug(slug: string): ServiceAreaConfig | undefined {
  return serviceAreas.find(area => area.slug === slug)
}

export function getAllAreaSlugs(): string[] {
  return serviceAreas.map(area => area.slug)
}

export function getFeaturedAreas(): ServiceAreaConfig[] {
  return serviceAreas.filter(area => area.featured)
}
