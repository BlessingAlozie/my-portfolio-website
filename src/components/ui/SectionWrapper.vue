<script setup>
defineProps({
  size: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  noPadding: {
    type: Boolean,
    default: false
  }
})

const paddingClasses = {
  sm: 'py-12 lg:py-16',
  md: 'py-16 lg:py-20',
  lg: 'py-20 lg:py-28',
  xl: 'py-24 lg:py-32'
}
</script>

<template>
  <section
    class="w-full"
    :class="[noPadding ? '' : paddingClasses[size]]"
  >
    <div class="container mx-auto px-6 lg:px-8">
      <slot />
    </div>
  </section>
</template>
