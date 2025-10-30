import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Box, Palette, CheckCircle, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ServicesSection({ scrollToSection }) {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#FAFAF9] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700">Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Two Ways to Create</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose from our ready-to-print library or get a fully custom design tailored to your needs</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Card className="h-full border-2 hover:border-blue-300 hover:shadow-2xl transition-all overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <Box className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl">Ready-to-Print Files</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">Browse our curated library of pre-designed 3D models ready for immediate printing. Quick turnaround and tested quality.</p>
                <div className="space-y-3">
                  {['Extensive catalog of designs','Instant availability','Pre-optimized for printing','Multiple size options','Fast production time'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4"><Button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-lg py-6">Browse Catalog</Button></div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Card className="h-full border-2 hover:border-purple-300 hover:shadow-2xl transition-all overflow-hidden relative">
              <div className="absolute top-4 right-4"><Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0"><Sparkles className="w-3 h-3 mr-1" />Popular</Badge></div>
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl">Custom Design & Print</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">Bring your unique vision to life. Our design team works with you from concept to final product with full customization.</p>
                <div className="space-y-3">
                  {['Personalized consultation','Professional 3D modeling','Unlimited revisions','Material recommendations','End-to-end project management'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4"><Button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg py-6">Start Custom Project</Button></div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white rounded-2xl p-8 shadow-lg border">
          <h3 className="text-2xl font-bold text-center mb-8">Our Simple Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Share your idea or choose a design' },
              { step: '02', title: 'Material Selection', desc: 'Pick the perfect filament' },
              { step: '03', title: 'Production', desc: 'We print with precision' },
              { step: '04', title: 'Delivery', desc: 'Receive your quality product' },
            ].map((it, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">{it.step}</span>
                </div>
                <h4 className="font-semibold mb-2">{it.title}</h4>
                <p className="text-sm text-gray-600">{it.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
