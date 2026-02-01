'use client';

import { ref, watch, onMounted } from 'vue'

const isDark = ref(true)

export function useTheme() {
  const initTheme = () => {
    // Check localStorage first
    const stored = localStorage.getItem('theme')
    if (stored) {
      isDark.value = stored === 'dark'
    } else {
      // Respect system preference
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme()
  }

  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    applyTheme()
  }

  // Watch for changes
  watch(isDark, () => {
    applyTheme()
  })

  onMounted(() => {
    initTheme()
  })

  return {
    isDark,
    toggleTheme
  }
}
