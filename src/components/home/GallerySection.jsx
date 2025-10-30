import React from 'react'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

const galleryItems = [
  { title: 'Mechanical Parts', image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80', category: 'Engineering' },
  { title: 'Custom Figurines', image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&q=80', category: 'Art & Design' },
  { title: 'Prototypes', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80', category: 'Product Design' },
  { title: 'Functional Parts', image: 'https://images.unsplash.com/photo-1612837017391-4b6b7d3b0f84?w=800&q=80', category: 'Industrial' },
  { title: 'Artistic Creations', image: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=800&q=80', category: 'Art & Design' },
  { title: 'Custom Solutions', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80', category: 'Custom' },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <Badge className="mb-4 bg-pink-100 text-pink-700">Our Work</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Precision in Every Layer</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore our portfolio of successful projects across various industries and applications</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Badge className="mb-2 bg-white/20 backdrop-blur-sm text-white border-white/30">{item.category}</Badge>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-16 text-center">
          <p className="text-lg text-gray-600">Every project is unique. Let's create something amazing together.</p>
        </motion.div>
      </div>
    </section>
  )
}
