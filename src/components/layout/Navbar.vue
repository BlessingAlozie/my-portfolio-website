<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useTheme } from '../../composables/useTheme'
import ThemeToggle from '../ui/ThemeToggle.vue'
import AnimatedButton from '../ui/AnimatedButton.vue'

const route = useRoute()
const { isDark, toggleTheme } = useTheme()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Design', path: '/design' },
  { name: 'Development', path: '/development' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'About', path: '/about' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
    :class="[
      isScrolled ? 'glass border-b border-border shadow-lg shadow-black/5' : 'bg-transparent'
    ]"
  >
    <nav class="container mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <RouterLink 
          to="/" 
          class="relative group"
          @click="closeMobileMenu"
        >
          <span class="font-display text-xl lg:text-2xl font-bold tracking-tight">
            <span class="text-foreground">Port</span>
            <span class="text-primary">folio</span>
          </span>
          <span 
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
          />
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-muted"
            :class="[
              route.path === link.path 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            ]"
          >
            {{ link.name }}
            <span 
              v-if="route.path === link.path"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
            />
          </RouterLink>
        </div>

        <!-- Right Side -->
        <div class="flex items-center gap-3">
          <ThemeToggle :is-dark="isDark" @toggle="toggleTheme" />
          
          <RouterLink to="/contact" class="hidden lg:block">
            <AnimatedButton variant="primary" size="sm">
              Get in Touch
            </AnimatedButton>
          </RouterLink>

          <!-- Mobile Menu Button -->
          <button
            class="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="isMobileMenuOpen"
          >
            <div class="w-5 flex flex-col gap-1.5">
              <span 
                class="block h-0.5 bg-foreground transition-all duration-300"
                :class="[isMobileMenuOpen ? 'rotate-45 translate-y-2' : '']"
              />
              <span 
                class="block h-0.5 bg-foreground transition-all duration-300"
                :class="[isMobileMenuOpen ? 'opacity-0' : '']"
              />
              <span 
                class="block h-0.5 bg-foreground transition-all duration-300"
                :class="[isMobileMenuOpen ? '-rotate-45 -translate-y-2' : '']"
              />
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div 
          v-if="isMobileMenuOpen"
          class="lg:hidden absolute top-full left-0 right-0 glass border-b border-border"
        >
          <div class="container mx-auto px-6 py-6 space-y-2">
            <RouterLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="block px-4 py-3 rounded-lg text-base font-medium transition-colors"
              :class="[
                route.path === link.path 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              ]"
              @click="closeMobileMenu"
            >
              {{ link.name }}
            </RouterLink>
            <RouterLink to="/contact" @click="closeMobileMenu">
              <AnimatedButton variant="primary" size="md" class="w-full mt-4">
                Get in Touch
              </AnimatedButton>
            </RouterLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>
