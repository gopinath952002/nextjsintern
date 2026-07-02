'use client'

import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            background: [
              'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="w-full h-full opacity-10"
        />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom relative z-10 px-4 py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center"
      >
        {/* Text Content */}
        <motion.div className="space-y-6 md:space-y-8">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="gradient-text">Creative Digital</span>
            <br />
            <span className="text-gray-900 dark:text-white">Experiences</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
          >
            We design digital experiences that grow businesses. Transform your ideas into stunning,
            high-performing digital products that captivate and convert.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center gap-2"
            >
              Get Started
              <HiArrowRight />
            </motion.button>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              View Portfolio
              <HiArrowRight />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            {[
              { number: '50+', label: 'Projects' },
              { number: '100+', label: 'Happy Clients' },
              { number: '8+', label: 'Years' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-indigo-500">{stat.number}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          variants={itemVariants}
          className="relative h-96 md:h-full min-h-96 flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl blur-3xl opacity-30" />
            <div className="relative w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-white font-semibold text-lg">Creative Studio</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, 100, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 z-0"
      />
      <motion.div
        animate={{ y: [0, -100, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 z-0"
      />
    </section>
  )
}

export default HeroSection
