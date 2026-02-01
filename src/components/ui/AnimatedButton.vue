<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'ghost', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const variantClasses = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:shadow-xl',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-muted text-foreground',
  outline: 'border border-border hover:bg-muted text-foreground'
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg'
}
</script>

<template>
  <button
    class="relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
    :class="[variantClasses[variant], sizeClasses[size]]"
    :disabled="disabled"
  >
    <!-- Hover gradient overlay for primary -->
    <span
      v-if="variant === 'primary'"
      class="absolute inset-0 bg-gradient-to-r from-primary via-blue-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
    
    <!-- Content -->
    <span class="relative flex items-center gap-2">
      <slot />
    </span>

    <!-- Ripple effect on hover -->
    <span
      class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"
    />
  </button>
</template>
