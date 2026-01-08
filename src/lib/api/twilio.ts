/**
 * Twilio SMS Utility
 *
 * This is a placeholder for Twilio SMS integration.
 * To use this in production, install the Twilio SDK:
 * npm install twilio
 */

interface SMSOptions {
  to: string
  body: string
}

interface ContactFormData {
  name: string
  email: string
  phone: string
  service?: string
  message?: string
}

// Environment variables needed:
// TWILIO_ACCOUNT_SID
// TWILIO_AUTH_TOKEN
// TWILIO_PHONE_NUMBER
// NOTIFICATION_PHONE_NUMBER

export async function sendSMS(options: SMSOptions): Promise<boolean> {
  // TODO: Implement Twilio integration
  //
  // import twilio from 'twilio'
  //
  // const client = twilio(
  //   process.env.TWILIO_ACCOUNT_SID,
  //   process.env.TWILIO_AUTH_TOKEN
  // )
  //
  // await client.messages.create({
  //   body: options.body,
  //   from: process.env.TWILIO_PHONE_NUMBER,
  //   to: options.to
  // })

  console.log('Twilio SMS would be sent:', options)
  return true
}

export async function sendNewLeadNotification(data: ContactFormData): Promise<boolean> {
  const body = `
New Lead!
Name: ${data.name}
Phone: ${data.phone}
Service: ${data.service || 'Not specified'}
  `.trim()

  // Send to business owner
  return sendSMS({
    to: process.env.NOTIFICATION_PHONE_NUMBER || '',
    body
  })
}

export async function sendCustomerConfirmationSMS(data: ContactFormData): Promise<boolean> {
  const body = `
Hi ${data.name}! Thanks for contacting Clean Site Dumpsters. We've received your inquiry and will call you back shortly. Questions? Call 615.717.2200
  `.trim()

  return sendSMS({
    to: data.phone,
    body
  })
}
