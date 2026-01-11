'use client'

import { useState } from 'react'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').optional().or(z.literal('')),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  services?: { name: string; slug: string }[]
}

export default function ContactForm({ services }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Validate with Zod
      const validated = contactSchema.parse(formData)

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {}
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0].toString()] = issue.message
          }
        })
        setErrors(fieldErrors)
      }
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputBaseClass =
    'w-full px-4 py-3 border rounded-lg font-body text-base focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition-colors'
  const inputErrorClass = 'border-red-600 bg-red-50'
  const inputNormalClass = 'border-gray-300 bg-white'

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block font-body font-semibold text-sm uppercase tracking-wide mb-2"
        >
          Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${inputBaseClass} ${errors.name ? inputErrorClass : inputNormalClass}`}
          disabled={isSubmitting}
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block font-body font-semibold text-sm uppercase tracking-wide mb-2"
        >
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${inputBaseClass} ${errors.email ? inputErrorClass : inputNormalClass}`}
          disabled={isSubmitting}
          placeholder="your@email.com"
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block font-body font-semibold text-sm uppercase tracking-wide mb-2"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`${inputBaseClass} ${errors.phone ? inputErrorClass : inputNormalClass}`}
          disabled={isSubmitting}
          placeholder="(615) 555-1234"
        />
        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Service (optional) */}
      {services && services.length > 0 && (
        <div>
          <label
            htmlFor="service"
            className="block font-body font-semibold text-sm uppercase tracking-wide mb-2"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputBaseClass} ${inputNormalClass}`}
            disabled={isSubmitting}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block font-body font-semibold text-sm uppercase tracking-wide mb-2"
        >
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`${inputBaseClass} ${errors.message ? inputErrorClass : inputNormalClass} resize-none`}
          disabled={isSubmitting}
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#D32F2F] text-white font-heading font-semibold uppercase tracking-wide text-sm px-8 py-4 rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          <p className="font-body text-sm">
            Thank you for your message! We&apos;ll get back to you soon.
          </p>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          <p className="font-body text-sm">
            Failed to send message. Please try again or call us directly.
          </p>
        </div>
      )}
    </form>
  )
}
