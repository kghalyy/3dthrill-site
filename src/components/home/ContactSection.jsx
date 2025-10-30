import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Mail, CheckCircle, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

// Put your Formspree endpoint here, e.g. https://formspree.io/f/abcde123
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xxxxxxxx';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', projectType: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setIsSuccess(true)
        setFormData({ name: '', email: '', projectType: '', message: '' })
        setTimeout(() => setIsSuccess(false), 6000)
      } else {
        const data = await res.json().catch(() => ({}))
        setError(data?.error || 'Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    }
    setIsSubmitting(false)
  }

  const handleChange = (field, value) => setFormData((p) => ({ ...p, [field]: value }))

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-[#FAFAF9]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-700">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Start Your Project Today</span></h2>
          <p className="text-xl text-gray-600">Let's discuss how we can bring your ideas to life with precision 3D printing</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Card className="border-2 shadow-2xl">
            <CardHeader className="border-b bg-gradient-to-r from-purple-50 to-blue-50">
              <CardTitle className="flex items-center gap-2 text-2xl"><Mail className="w-6 h-6 text-purple-600" /> Contact Form</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {isSuccess ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Your Name *</label>
                      <Input required placeholder="John Doe" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address *</label>
                      <Input required type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Project Type *</label>
                    <Input required placeholder="e.g., Custom Design, Ready-to-Print, Prototype" value={formData.projectType} onChange={(e) => handleChange('projectType', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Project Details *</label>
                    <Textarea required placeholder="Tell us about your project, preferred materials, timeline, etc." value={formData.message} onChange={(e) => handleChange('message', e.target.value)} className="min-h-[150px] resize-none" />
                  </div>
                  {error && <p className="text-red-600 text-sm">{error}</p>}
                  <Button type="submit" disabled={isSubmitting} className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg">
                    {isSubmitting ? (<><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</>) : (<><Mail className="w-5 h-5 mr-2" /> Send Message</>)}
                  </Button>
                  <p className="text-sm text-gray-500 text-center">Or email us directly at <a href="mailto:3dthrillcanada@gmail.com" className="text-purple-600 hover:underline font-medium">3dthrillcanada@gmail.com</a></p>
                  <p className="text-center text-sm text-gray-500">Follow us: <a className="hover:underline" href="https://instagram.com/3dthrillca" target="_blank" rel="noreferrer">Instagram</a> • <a className="hover:underline" href="https://www.tiktok.com/@3d_thrill_" target="_blank" rel="noreferrer">TikTok</a></p>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
