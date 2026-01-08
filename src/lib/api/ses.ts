/**
 * Amazon SES Email Utility
 *
 * This is a placeholder for Amazon SES integration.
 * To use this in production, install the AWS SDK:
 * npm install @aws-sdk/client-ses
 */

interface EmailOptions {
  to: string | string[]
  subject: string
  html: string
  text?: string
  from?: string
}

interface ContactFormData {
  name: string
  email: string
  phone: string
  service?: string
  message?: string
}

// Environment variables needed:
// AWS_REGION
// AWS_ACCESS_KEY_ID
// AWS_SECRET_ACCESS_KEY
// SES_FROM_EMAIL

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  // TODO: Implement AWS SES integration
  //
  // import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
  //
  // const client = new SESClient({ region: process.env.AWS_REGION })
  //
  // const command = new SendEmailCommand({
  //   Source: options.from || process.env.SES_FROM_EMAIL,
  //   Destination: {
  //     ToAddresses: Array.isArray(options.to) ? options.to : [options.to]
  //   },
  //   Message: {
  //     Subject: { Data: options.subject },
  //     Body: {
  //       Html: { Data: options.html },
  //       Text: { Data: options.text || options.html.replace(/<[^>]*>/g, '') }
  //     }
  //   }
  // })
  //
  // await client.send(command)

  console.log('SES Email would be sent:', options)
  return true
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Service:</strong> ${data.service || 'Not specified'}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message || 'No message provided'}</p>
  `

  return sendEmail({
    to: 'info@csdwaste.com',
    subject: `New Quote Request from ${data.name}`,
    html
  })
}

export async function sendConfirmationEmail(data: ContactFormData): Promise<boolean> {
  const html = `
    <h2>Thank You for Contacting Clean Site Dumpsters!</h2>
    <p>Hi ${data.name},</p>
    <p>We've received your inquiry and will get back to you within 24 hours.</p>
    <p>In the meantime, if you have any urgent questions, please call us at 615.717.2200.</p>
    <br>
    <p>Best regards,</p>
    <p>Clean Site Dumpsters Team</p>
  `

  return sendEmail({
    to: data.email,
    subject: 'Thank You for Your Inquiry - Clean Site Dumpsters',
    html
  })
}
