import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

interface ContactFormData {
  name: string
  email: string
  phone: string
  service?: string
  message?: string
}

// Rate limiting (simple in-memory for single server)
const rateLimit = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimit.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + 60000 }) // 1 minute window
    return true
  }

  if (limit.count >= 5) {
    // Max 5 requests per minute
    return false
  }

  limit.count++
  return true
}

// Sanitize inputs (remove HTML/scripts)
function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim()
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/
  return phoneRegex.test(phone)
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const headersList = await headers()
    const forwarded = headersList.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown'

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const data: ContactFormData = await request.json()

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitize(data.name || ''),
      email: sanitize(data.email || ''),
      phone: sanitize(data.phone || ''),
      service: data.service ? sanitize(data.service) : undefined,
      message: data.message ? sanitize(data.message) : undefined,
    }

    // Validate required fields
    if (!sanitizedData.name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    if (!sanitizedData.email || !validateEmail(sanitizedData.email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    if (!sanitizedData.phone || !validatePhone(sanitizedData.phone)) {
      return NextResponse.json(
        { error: 'Valid phone number is required' },
        { status: 400 }
      )
    }

    // TODO: Send email via SES
    // await sendContactEmail(sanitizedData)

    // TODO: Send SMS notification via Twilio
    // await sendSMSNotification(sanitizedData)

    // Log the submission (in production, save to database)
    console.log('Contact form submission:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      service: sanitizedData.service || 'Not specified',
      message: sanitizedData.message || 'No message',
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry. We will contact you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
