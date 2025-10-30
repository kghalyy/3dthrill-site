import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, Sparkles, Box } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection({ scrollToSection }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply blur-xl animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-purple-200 mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-900">Premium 3D Printing Solutions</span>
            </div>
          </motion.div>

          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">Transform Ideas</span><br/>
            <span className="text-gray-900">Into Reality</span>
          </motion.h1>

          <motion.p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            From concept to creation with cutting-edge 3D printing technology and premium materials. Ready-to-print designs or fully custom solutions.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <Button onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl">
              <Box className="w-5 h-5 mr-2" /> Start Your Project
            </Button>
            <Button onClick={() => scrollToSection('materials')}
              className="text-lg px-8 py-6 rounded-xl border-2 text-gray-700 bg-white hover:bg-white/60">
              Explore Materials
            </Button>
          </motion.div>

          <motion.div className="mt-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
            <button onClick={() => scrollToSection('materials')} className="inline-flex flex-col items-center gap-2 text-gray-600 hover:text-purple-600">
              <span className="text-sm font-medium">Discover More</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes blob { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-50px) scale(1.1)} 66%{transform:translate(-20px,20px) scale(.9)} }
        .animate-blob{animation:blob 7s infinite}
        .animation-delay-2000{animation-delay:2s}
        .animation-delay-4000{animation-delay:4s}
      `}</style>
    </section>
  )
}
