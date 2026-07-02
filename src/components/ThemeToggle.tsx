'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { HiSun, HiMoon } from 'react-icons/hi'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
    </motion.button>
  )
}

export default ThemeToggle
