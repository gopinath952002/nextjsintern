'use client'

import { motion } from 'framer-motion'
import {
  HiPencil,
  HiCode,
  HiSparkles,
  HiTrendingUp,
} from 'react-icons/hi'

const ServicesSection = () => {
  const services = [
    {
      icon: HiPencil,
      title: 'UI/UX Design',
      description: 'Stunning, intuitive interfaces that users love. We create beautiful digital products with seamless user experiences.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: HiCode,
      title: 'Web Development',
      description: 'High-performance web solutions built with cutting-edge technologies. Scalable, secure, and optimized for success.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: HiSparkles,
      title: 'Branding',
      description: 'Distinctive brand identities that stand out. From logo design to complete visual systems, we tell your story.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: HiTrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic marketing that drives results. SEO, social media, and campaigns that convert visitors into customers.',
      color: 'from-green-500 to-teal-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="services"
      className="relative w-full section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container-custom px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to transform your business and create meaningful experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)' }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg hover-lift transition-all"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}
                >
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Arrow Icon */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-4 text-indigo-500 text-2xl"
                >
                  →
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
