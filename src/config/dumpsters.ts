export interface DumpsterSize {
  id: string
  name: string
  size: string  // "10 YD", "15 YD", "20 YD"
  capacity: string
  dimensions: {
    length: number
    width: number
    height: number
  }
  weight_limit: number
  pricing: {
    seven_day: number
    fourteen_day: number
    thirty_day: number
  }
  best_for: string[]
  image: string
}

export const dumpsterSizes: DumpsterSize[] = [
  {
    id: '10-yard',
    name: '10 Yard Dumpster',
    size: '10 YD',
    capacity: '~3 pickup truck loads',
    dimensions: { length: 14, width: 8, height: 4 },
    weight_limit: 4000,
    pricing: {
      seven_day: 349,
      fourteen_day: 459,
      thirty_day: 619
    },
    best_for: [
      'Small cleanouts',
      'Single room renovations',
      'Garage decluttering'
    ],
    image: '/images/dumpsters/10-yard.jpg'
  },
  {
    id: '15-yard',
    name: '15 Yard Dumpster',
    size: '15 YD',
    capacity: '~4-5 pickup truck loads',
    dimensions: { length: 16, width: 8, height: 4.5 },
    weight_limit: 6000,
    pricing: {
      seven_day: 439,
      fourteen_day: 529,
      thirty_day: 679
    },
    best_for: [
      'Medium renovations',
      'Basement cleanouts',
      'Roofing projects'
    ],
    image: '/images/dumpsters/15-yard.jpg'
  },
  {
    id: '20-yard',
    name: '20 Yard Dumpster',
    size: '20 YD',
    capacity: '~6 pickup truck loads',
    dimensions: { length: 22, width: 8, height: 4.5 },
    weight_limit: 8000,
    pricing: {
      seven_day: 519,
      fourteen_day: 609,
      thirty_day: 769
    },
    best_for: [
      'Large renovations',
      'Construction debris',
      'Full home cleanouts'
    ],
    image: '/images/dumpsters/20-yard.jpg'
  }
]

export function getDumpsterById(id: string): DumpsterSize | undefined {
  return dumpsterSizes.find(d => d.id === id)
}

export function getDumpsterPricing(id: string, duration: 'seven_day' | 'fourteen_day' | 'thirty_day'): number | undefined {
  const dumpster = getDumpsterById(id)
  return dumpster?.pricing[duration]
}
