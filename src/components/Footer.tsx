'use client'

import { motion } from 'framer-motion'
import {
  HiFacebook,
  HiTwitter,
  HiInstagram,
  HiLinkedin,
  HiArrowUp,
} from 'react-icons/hi'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: HiFacebook, href: '#', label: 'Facebook' },
    { icon: HiTwitter, href: '#', label: 'Twitter' },
    { icon: HiInstagram, href: '#', label: 'Instagram' },
    { icon: HiLinkedin, href: '#', label: 'LinkedIn' },
  ]

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative w-full bg-gray-900 dark:bg-black text-gray-300 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.div
          animate={{
            background: [
              'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Main Footer */}
        <div className="section-padding border-b border-gray-700">
          <div className="container-custom px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-3">Creative Studio</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Design digital experiences that grow businesses. Transform your ideas into
                  stunning, high-performing digital products.
                </p>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {footerLinks.map((link) => (
                    <motion.li
                      key={link.label}
                      whileHover={{ x: 5 }}
                      className="hover:text-indigo-400 transition-colors"
                    >
                      <a href={link.href}>{link.label}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  {['UI/UX Design', 'Web Development', 'Branding', 'Digital Marketing'].map(
                    (service) => (
                      <motion.li
                        key={service}
                        whileHover={{ x: 5 }}
                        className="hover:text-indigo-400 transition-colors"
                      >
                        <a href="#services">{service}</a>
                      </motion.li>
                    )
                  )}
                </ul>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-4">Newsletter</h4>
                <p className="text-sm text-gray-400 mb-4">Subscribe to get updates on our latest projects.</p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                    aria-label="Subscribe email"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-indigo-500 text-white rounded font-semibold text-sm hover:bg-indigo-600 transition-colors"
                  >
                    Subscribe
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 md:py-8">
          <div className="container-custom px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-500 text-sm text-center md:text-left"
              >
                © {currentYear} Creative Studio. All rights reserved.
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-indigo-500 rounded-full transition-colors text-gray-400 hover:text-white"
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  )
                })}
              </motion.div>

              {/* Scroll to Top */}
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="w-10 h-10 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-full transition-colors text-white"
                aria-label="Scroll to top"
              >
                <HiArrowUp />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
