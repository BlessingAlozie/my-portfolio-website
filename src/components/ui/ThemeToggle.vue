<script setup>
defineProps({
  isDark: {
    type: Boolean,
    required: true
  }
})

defineEmits(['toggle'])
</script>

<template>
  <button
    class="relative w-10 h-10 flex items-center justify-center rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200"
    @click="$emit('toggle')"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <!-- Sun Icon -->
    <svg
      class="w-5 h-5 absolute transition-all duration-500"
      :class="[isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100']"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>

    <!-- Moon Icon -->
    <svg
      class="w-5 h-5 absolute transition-all duration-500"
      :class="[isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0']"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  </button>
</template>
