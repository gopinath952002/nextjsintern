'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Email validation regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setIsLoading(false)

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1000)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="contact"
      className="relative w-full section-padding bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-900 dark:to-black text-white"
    >
      <div className="container-custom px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's work together
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Have a project in mind? Let's create something amazing together. Reach out to us
              and let's discuss your next big idea.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              {[
                { label: 'Email', value: 'hello@creativestudio.com' },
                { label: 'Phone', value: '+1 (555) 123-4567' },
                { label: 'Address', value: '123 Design Street, Tech City, TC 12345' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-lg font-semibold text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <HiCheckCircle className="w-20 h-20 text-green-400 mb-4 mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                <p className="text-gray-300">
                  We've received your message and will get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 bg-gray-700 dark:bg-gray-800 rounded-lg border-2 transition-colors focus:outline-none ${
                      errors.name
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-gray-600 focus:border-indigo-500'
                    } text-white placeholder-gray-400`}
                    aria-label="Name"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-400 text-sm mt-2"
                    >
                      <HiExclamationCircle /> {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                {/* Email Input */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 bg-gray-700 dark:bg-gray-800 rounded-lg border-2 transition-colors focus:outline-none ${
                      errors.email
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-gray-600 focus:border-indigo-500'
                    } text-white placeholder-gray-400`}
                    aria-label="Email"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-400 text-sm mt-2"
                    >
                      <HiExclamationCircle /> {errors.email}
                    </motion.p>
                  )}
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-700 dark:bg-gray-800 rounded-lg border-2 transition-colors focus:outline-none resize-none ${
                      errors.message
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-gray-600 focus:border-indigo-500'
                    } text-white placeholder-gray-400`}
                    aria-label="Message"
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-400 text-sm mt-2"
                    >
                      <HiExclamationCircle /> {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
