import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Layers, Globe, Mail } from 'lucide-react'
import HeroSection from '@/components/home/HeroSection'
import MaterialsSection from '@/components/home/MaterialsSection'
import ServicesSection from '@/components/home/ServicesSection'
import GallerySection from '@/components/home/GallerySection'
import ContactSection from '@/components/home/ContactSection'
import { Button } from '@/components/ui/button'

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                3D Thrill
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('materials')} className="text-gray-700 hover:text-purple-600 font-medium">Materials</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-purple-600 font-medium">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-purple-600 font-medium">Gallery</button>
              <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <HeroSection scrollToSection={scrollToSection} />
      <MaterialsSection />
      <ServicesSection scrollToSection={scrollToSection} />
      <GallerySection />
      <ContactSection />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">3D Thrill</span>
              </div>
              <p className="text-gray-400 mb-4">Bringing your ideas to life with cutting-edge 3D printing technology and premium materials.</p>
              <div className="flex items-center gap-2 text-gray-400">
                <Globe className="w-4 h-4" />
                <span className="font-medium">3dthrill.com</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('materials')} className="block text-gray-400 hover:text-white">Materials</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white">Services</button>
                <button onClick={() => scrollToSection('gallery')} className="block text-gray-400 hover:text-white">Gallery</button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a className="hover:underline" href="mailto:3dthrillcanada@gmail.com">3dthrillcanada@gmail.com</a>
                </p>
                <p><a className="hover:underline" href="https://instagram.com/3dthrillca" target="_blank" rel="noreferrer">Instagram: @3dthrillca</a></p>
                <p><a className="hover:underline" href="https://www.tiktok.com/@3d_thrill_" target="_blank" rel="noreferrer">TikTok: @3d_thrill_</a></p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Location</h3>
              <p className="text-gray-400">Canada • Online orders</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} 3D Thrill. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
