'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://via.placeholder.com/400x300?text=E-Commerce',
    },
    {
      id: 2,
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      image: 'https://via.placeholder.com/400x300?text=Mobile+App',
    },
    {
      id: 3,
      title: 'Brand Identity',
      category: 'Branding',
      image: 'https://via.placeholder.com/400x300?text=Branding',
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'Web Development',
      image: 'https://via.placeholder.com/400x300?text=SaaS+Dashboard',
    },
    {
      id: 5,
      title: 'Social Media Campaign',
      category: 'Digital Marketing',
      image: 'https://via.placeholder.com/400x300?text=Social+Campaign',
    },
    {
      id: 6,
      title: 'Product Photography',
      category: 'Branding',
      image: 'https://via.placeholder.com/400x300?text=Photography',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="portfolio"
      className="relative w-full section-padding bg-white dark:bg-gray-900"
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
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcase of our latest and greatest projects that drive results.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift bg-gray-100 dark:bg-gray-800"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-end p-6"
                >
                  {/* Content */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <span className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Bottom Info */}
              <div className="p-6 bg-white dark:bg-gray-800">
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-indigo-500 transition-colors font-medium">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection
