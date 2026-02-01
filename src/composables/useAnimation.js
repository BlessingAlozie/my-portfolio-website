import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(options = {}) {
  const isVisible = ref(false)
  const elementRef = ref(null)
  let observer = null

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  }

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          // Once visible, stop observing for one-time animations
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        } else if (options.once === false) {
          isVisible.value = false
        }
      })
    }, defaultOptions)

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    isVisible,
    elementRef
  }
}

export function useSmoothScroll() {
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return {
    scrollTo,
    scrollToTop
  }
}
