import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Flame, Wind, Mountain, Gauge, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const materials = [
  { name: 'PLA', category: 'Standard', icon: Wind, color: 'from-green-400 to-emerald-600', description: 'Eco-friendly and easy to print, perfect for prototypes and decorative items.', features: ['Biodegradable', 'Easy to print', 'Great surface finish'] },
  { name: 'ABS', category: 'Standard', icon: Flame, color: 'from-orange-400 to-red-600', description: 'High strength and heat resistance for functional parts.', features: ['Heat resistant', 'Impact resistant', 'Durable'] },
  { name: 'PETG', category: 'Standard', icon: Shield, color: 'from-blue-400 to-cyan-600', description: 'Combines strength and flexibility with chemical resistance.', features: ['Chemical resistant', 'UV resistant', 'Flexible & strong'] },
  { name: 'TPU', category: 'Special', icon: Gauge, color: 'from-purple-400 to-pink-600', description: 'Flexible and elastic material for custom applications.', features: ['Highly flexible', 'Wear resistant', 'Shock absorbing'] },
  { name: 'ASA', category: 'Special', icon: Mountain, color: 'from-yellow-400 to-amber-600', description: 'Weather-resistant material ideal for outdoor applications.', features: ['UV stable', 'Weather proof', 'High durability'] },
  { name: 'Carbon Fiber', category: 'Engineering', icon: Zap, color: 'from-gray-700 to-gray-900', description: 'Ultimate strength with reinforced composite materials.', features: ['Ultra strong', 'Lightweight', 'Professional grade'] },
]

export default function MaterialsSection() {
  return (
    <section id="materials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700">Premium Materials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Diverse Material Options</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">From standard to engineering-grade filaments, we've got the perfect material for your project</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-200 overflow-hidden h-full">
                <div className={`h-2 bg-gradient-to-r ${m.color}`}></div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                      <m.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">{m.category}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{m.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{m.description}</p>
                  <div className="space-y-2">
                    {m.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${m.color}`}></div>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Engineering Filaments Available</h3>
            <p className="text-gray-700 mb-4">We also offer carbon fiber, fiberglass reinforced PLA, ABS, PETG, and other composite materials for professional applications.</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Carbon Fiber PLA','Carbon Fiber ABS','Carbon Fiber PETG','Fiberglass PLA','Fiberglass ABS'].map((mat) => (
                <Badge key={mat} className="bg-white">{mat}</Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
