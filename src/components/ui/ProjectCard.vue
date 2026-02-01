<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  tags: {
    type: Array,
    default: () => []
  },
  link: {
    type: String,
    default: ''
  },
  external: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <component
    :is="link ? 'a' : 'div'"
    :href="external ? link : undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="group relative block bg-card rounded-2xl border border-border overflow-hidden transition-all duration-400 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
  >
    <!-- Image -->
    <div class="relative aspect-[16/10] overflow-hidden bg-muted">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center text-muted-foreground"
      >
        <svg class="w-16 h-16 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      
      <!-- Overlay gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
        {{ title }}
      </h3>
      <p class="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
        {{ description }}
      </p>

      <!-- Tags -->
      <div v-if="tags.length" class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Arrow indicator -->
    <div
      v-if="link"
      class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
    >
      <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
      </svg>
    </div>
  </component>
</template>
