// Schema.org JSON-LD utility functions for AEO optimization

export const businessSchema = {
  "@type": "LocalBusiness",
  "@id": "https://csdwaste.com/#business",
  "name": "Clean Site Dumpsters",
  "alternateName": "CSD",
  "description": "Professional dumpster rental services in Nashville, Franklin, and Hendersonville. Residential, commercial, and construction dumpsters available.",
  "url": "https://csdwaste.com",
  "telephone": "+16157172200",
  "email": "info@csdwaste.com",
  "foundingDate": "2021",
  "priceRange": "$349-$769",
  "image": "https://csdwaste.com/images/logo.png",
  "logo": "https://csdwaste.com/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "609 Newsome Street",
    "addressLocality": "Nashville",
    "addressRegion": "TN",
    "postalCode": "37211",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "36.1115",
    "longitude": "-86.7631"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Nashville",
      "containedInPlace": {
        "@type": "State",
        "name": "Tennessee"
      }
    },
    {
      "@type": "City",
      "name": "Franklin",
      "containedInPlace": {
        "@type": "State",
        "name": "Tennessee"
      }
    },
    {
      "@type": "City",
      "name": "Hendersonville",
      "containedInPlace": {
        "@type": "State",
        "name": "Tennessee"
      }
    },
    {
      "@type": "City",
      "name": "Murfreesboro",
      "containedInPlace": {
        "@type": "State",
        "name": "Tennessee"
      }
    },
    {
      "@type": "City",
      "name": "Brentwood",
      "containedInPlace": {
        "@type": "State",
        "name": "Tennessee"
      }
    },
    {
      "@type": "City",
      "name": "Mount Juliet",
      "containedInPlace": {
        "@type": "State",
        "name": "Tennessee"
      }
    }
  ]
}

export const reviewsSchema = {
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "7",
    "bestRating": "5",
    "worstRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Amber W" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "22 years in a home you accumulate lots of junk. These guys are awesome, super easy to work with. I described what I was trying to remove, I knew nothing about dumpsters or what size I needed I explained how much junk I was trying to get rid of. They are on point, they suggested the size I'd need, they were accurate if ever I need a dumpster this is the place I'm going to tell all my friends and family too! Thank you so much."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Charna E" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Rented this dumpster online. Absolutely had no problems or issues. Paid with a credit card, dropped a note as to where the dumpster was to be placed and wa-la, it was there the next day. Perfect size. I would highly recommend this company. Very reasonable cost and very professional service. A+++"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Jack J" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "One of the most professional businesses I've worked with. Pricing was upfront clear, ordering was easy, and there was great communication through texting. The driver was friendly and professional. I was very happy to be able to find a 20 yard dumpster available for my renovation. I would 100% use again and recommend."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Debbi D" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Britt was exceptional! I needed to extended the week we were allocated. Was no problem, the extension was granted immediately. I then found myself in need of a second dumpster. Dumpster was delivered in a matter of a couple of hours and sat exactly where I had requested. The whole process was handled with ease, promptness and professionalism. A wonderful company to do business!"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Chadi H" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Great, very professional. I used them three times they were always on time, made sure to let me know when dropping the dumpster off and giving me a heads up two days before they pick it up. I also asked them to come pick it up early two times and they came the next morning. Highly recommend them!!!"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sandi W" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "We rented a dumpster during our home renovation and really had a great experience with this company. The drop off was hassle free and they were great at communicating each week when we needed to extend and keep it longer than expected. Super flexible, accommodating and very, very friendly & professional. Definitely recommend!!!!"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sheri H" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "We were working between two different companies for dumpsters to get the sizes we needed on our job sites. Clean Site Dumpsters was able to take care of it all - and they're faster and more responsive than anyone else we've worked with."
    }
  ]
}

export const offerCatalogSchema = {
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dumpster Rental Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "10 Yard Dumpster Rental",
          "description": "Perfect for small cleanouts, single room renovations, and garage decluttering. Capacity: approximately 3 pickup truck loads.",
          "category": "Dumpster Rental"
        },
        "price": "349",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "349",
          "priceCurrency": "USD",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": "7",
            "unitCode": "DAY"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "15 Yard Dumpster Rental",
          "description": "Ideal for medium renovations, basement cleanouts, and roofing projects. Capacity: approximately 4-5 pickup truck loads.",
          "category": "Dumpster Rental"
        },
        "price": "439",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "439",
          "priceCurrency": "USD",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": "7",
            "unitCode": "DAY"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "20 Yard Dumpster Rental",
          "description": "Best for large renovations, construction debris, and full home cleanouts. Capacity: approximately 6 pickup truck loads.",
          "category": "Dumpster Rental"
        },
        "price": "519",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "519",
          "priceCurrency": "USD",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": "7",
            "unitCode": "DAY"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "30 Yard Dumpster Rental",
          "description": "Maximum capacity for large construction projects, commercial cleanouts, and major demolition. Capacity: approximately 9 pickup truck loads.",
          "category": "Dumpster Rental"
        },
        "price": "619",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "619",
          "priceCurrency": "USD",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": "7",
            "unitCode": "DAY"
          }
        }
      }
    ]
  }
}

export const faqSchema = {
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does dumpster rental cost in Nashville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dumpster rental in Nashville costs $349-$769 depending on size and rental duration. A 10-yard dumpster is $349 for 7 days, a 15-yard is $439 for 7 days, and a 20-yard is $519 for 7 days. Extended rentals of 14 or 30 days are also available."
      }
    },
    {
      "@type": "Question",
      "name": "What size dumpster do I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 10-yard dumpster works for small cleanouts and single room renovations (about 3 pickup truck loads). A 15-yard dumpster is best for medium renovations and basement cleanouts (4-5 truck loads). A 20-yard dumpster handles large renovations and construction debris (6 truck loads). A 30-yard is for major construction and demolition."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I get a dumpster delivered in Nashville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clean Site Dumpsters offers same-day and next-day delivery in Nashville, Franklin, and Hendersonville. You can order 24/7 online and schedule your preferred delivery date."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a permit for a dumpster in Nashville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You typically don't need a permit if the dumpster is placed on private property like your driveway. If the dumpster needs to be placed on a public street or right-of-way, you may need a permit from the city of Nashville."
      }
    },
    {
      "@type": "Question",
      "name": "What can I put in a dumpster rental?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can dispose of most non-hazardous construction debris, household junk, furniture, appliances (without freon), and yard waste. Prohibited items include hazardous materials, paint, chemicals, tires, electronics, and materials exceeding weight limits."
      }
    },
    {
      "@type": "Question",
      "name": "How long can I keep the dumpster?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard rental periods are 7, 14, or 30 days. If you need more time, extensions are available. Clean Site Dumpsters offers flexible scheduling to accommodate your project timeline."
      }
    },
    {
      "@type": "Question",
      "name": "What areas does Clean Site Dumpsters serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clean Site Dumpsters serves Nashville, Franklin, Hendersonville, Murfreesboro, Brentwood, Mount Juliet, Smyrna, La Vergne, Gallatin, Lebanon, Spring Hill, Columbia and surrounding areas in Middle Tennessee."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any hidden fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Clean Site Dumpsters provides transparent pricing with no hidden fees. The quoted price includes delivery, pickup, disposal, and the rental period. Additional charges only apply if you exceed weight limits or extend the rental period beyond what was agreed."
      }
    }
  ]
}

export function getHomepageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...businessSchema,
        ...reviewsSchema,
        ...offerCatalogSchema,
        "openingHoursSpecification": [{
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59",
          "description": "24/7 online ordering available"
        }]
      },
      faqSchema,
      {
        "@type": "WebSite",
        "@id": "https://csdwaste.com/#website",
        "url": "https://csdwaste.com",
        "name": "Clean Site Dumpsters",
        "description": "Nashville's premier dumpster rental service",
        "publisher": { "@id": "https://csdwaste.com/#business" }
      }
    ]
  }
}

export function getServiceSchema(serviceType: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Clean Site Dumpsters",
      "telephone": "+16157172200",
      "url": "https://csdwaste.com"
    },
    "areaServed": [
      { "@type": "City", "name": "Nashville", "containedInPlace": { "@type": "State", "name": "Tennessee" } },
      { "@type": "City", "name": "Franklin", "containedInPlace": { "@type": "State", "name": "Tennessee" } },
      { "@type": "City", "name": "Hendersonville", "containedInPlace": { "@type": "State", "name": "Tennessee" } }
    ],
    ...offerCatalogSchema
  }
}

export function getContactSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Clean Site Dumpsters",
      "telephone": "+16157172200",
      "email": "info@csdwaste.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "609 Newsome Street",
        "addressLocality": "Nashville",
        "addressRegion": "TN",
        "postalCode": "37211",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+16157172200",
        "contactType": "Customer Service",
        "areaServed": "US",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    }
  }
}

export function getAboutSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Clean Site Dumpsters",
      "alternateName": "CSD",
      "url": "https://csdwaste.com",
      "logo": "https://csdwaste.com/images/logo.png",
      "foundingDate": "2021",
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nashville",
          "addressRegion": "TN"
        }
      },
      "description": "Locally owned and operated dumpster rental company founded in 2021 by a Nashville native with a decade of experience in construction and contracting.",
      "slogan": "We Take Out The Trash So You Don't Have To"
    }
  }
}

export function getServiceAreaSchema(cityName: string, lat: string, lng: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Dumpster Rental",
    "name": `Dumpster Rental in ${cityName}, TN`,
    "description": `Professional dumpster rental services serving ${cityName}, Tennessee. Same-day delivery available. 10, 15, 20, and 30 yard dumpsters for residential, commercial, and construction projects.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Clean Site Dumpsters",
      "telephone": "+16157172200"
    },
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "containedInPlace": {
        "@type": "State",
        "name": "Tennessee"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": lat,
        "longitude": lng
      }
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "349",
      "highPrice": "769",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `https://csdwaste.com${item.url}`
    }))
  }
}
