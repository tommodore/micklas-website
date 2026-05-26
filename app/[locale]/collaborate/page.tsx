'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CollaboratePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) {
      alert('Please accept the data processing agreement to continue.')
      return
    }

    setIsSubmitting(true)

    // Simulate sending (we'll connect real email/Payload later)
    await new Promise(resolve => setTimeout(resolve, 1200))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="mx-auto w-20 h-20 bg-brand-teal/10 rounded-full flex items-center justify-center mb-8">
          <div className="text-4xl">✉️</div>
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-6">Thank you!</h1>
        <p className="text-2xl text-gray-600 mb-8">
          Your message has been received. Micklas will get back to you within 48 hours.
        </p>
        <Link href="/" className="btn-primary">Back to homepage</Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal text-sm tracking-[3px] mb-4">LET'S CREATE SOMETHING GREAT</div>
        <h1 className="text-6xl font-bold tracking-tight mb-6">Collaborate with Micklas</h1>
        <p className="text-xl text-gray-600 max-w-lg mx-auto">
          Whether you're a brand, tourism board, hotel, or agency — we'd love to hear from you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium mb-2">Your Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-brand-teal"
              placeholder="Anna Schmidt"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-brand-teal"
              placeholder="anna@brand.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Company / Organization</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-brand-teal"
            placeholder="Your Brand or Tourism Board"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tell us about your project *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={8}
            className="w-full border border-gray-300 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-brand-teal resize-y"
            placeholder="We're looking for a travel photographer for our summer campaign in the Alps..."
          />
        </div>

        {/* GDPR Consent */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1.5 w-5 h-5 accent-brand-teal"
              required
            />
            <div className="text-sm text-gray-700 leading-relaxed">
              I agree that my data (name, email, company, message) will be processed by Micklas Travels 
              to respond to my inquiry. The data will be stored for a maximum of 6 months and will not be 
              shared with third parties. I can revoke this consent at any time by emailing{' '}
              <a href="mailto:hello@micklas.travel" className="text-brand-teal underline">hello@micklas.travel</a>.
              <br /><br />
              For more information, please read our{' '}
              <Link href="/privacy" className="text-brand-teal underline">Privacy Policy</Link>.
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !formData.consent}
          className="w-full btn-primary py-5 text-xl disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending your message...' : 'Send Message'}
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          This form is GDPR / DSGVO compliant. Your data is handled with care.
        </p>
      </form>
    </div>
  )
}