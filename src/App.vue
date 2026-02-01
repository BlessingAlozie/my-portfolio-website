<script setup>
import { RouterView } from 'vue-router'
import { useTheme } from './composables/useTheme'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import PageTransition from './components/ui/PageTransition.vue'

// Initialize theme system
useTheme()
</script>

<template>
  <div class="min-h-screen bg-background text-foreground transition-colors duration-500">
    <Navbar />
    <PageTransition>
      <RouterView />
    </PageTransition>
    <Footer />
  </div>
</template>
