<script setup>
import { useIntersectionObserver } from '../../composables/useAnimation'

const { isVisible, elementRef } = useIntersectionObserver()

defineProps({
  animation: {
    type: String,
    default: 'fade-up',
    validator: (value) => ['fade-up', 'fade-down', 'fade-in', 'scale-in', 'slide-left', 'slide-right'].includes(value)
  },
  delay: {
    type: Number,
    default: 0
  }
})

const animationClasses = {
  'fade-up': 'animate-fade-up',
  'fade-down': 'animate-fade-down',
  'fade-in': 'animate-fade-in',
  'scale-in': 'animate-scale-in',
  'slide-left': 'animate-slide-in-left',
  'slide-right': 'animate-slide-in-right'
}
</script>

<template>
  <div
    ref="elementRef"
    class="opacity-0"
    :class="[isVisible ? animationClasses[animation] : '']"
    :style="{ animationDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template>
