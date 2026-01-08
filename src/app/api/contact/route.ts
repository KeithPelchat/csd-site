import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  phone: string
  service?: string
  message?: string
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
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.name.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    if (!data.email || !validateEmail(data.email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    if (!data.phone || !validatePhone(data.phone)) {
      return NextResponse.json(
        { error: 'Valid phone number is required' },
        { status: 400 }
      )
    }

    // TODO: Send email via SES
    // await sendContactEmail(data)

    // TODO: Send SMS notification via Twilio
    // await sendSMSNotification(data)

    // Log the submission (in production, save to database)
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service || 'Not specified',
      message: data.message || 'No message',
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry. We will contact you soon.'
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
