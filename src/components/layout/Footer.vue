<script setup>
import { RouterLink } from 'vue-router'
import SectionWrapper from '../ui/SectionWrapper.vue'

const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: 'Design Work', path: '/design' },
  { name: 'Development', path: '/development' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const socialLinks = [

  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/blessingalozie1/', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://x.com/lightdevbabe', icon: 'twitter' },
  // { name: 'Dribbble', url: 'https://dribbble.com', icon: 'dribbble' },
]
</script>

<template>
  <footer class="w-full bg-card/50 border-t border-border">
    <!-- full-width background -->
    <SectionWrapper size="md" class="px-0">
      <!-- main content grid -->
      <div class="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
        
        <!-- Brand -->
        <div class="space-y-4">
          <RouterLink to="/" class="inline-block">
            <span class="font-display text-2xl font-bold tracking-tight">
              <span class="text-foreground">Blessing</span>&nbsp;
              <span class="text-primary">Alozie</span>
            </span>
          </RouterLink>
          <p class="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Designer who codes. Developer who designs. Building digital experiences that matter.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.path">
              <RouterLink
                :to="link.path"
                class="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Social & Contact -->
        <div>
          <h4 class="font-semibold text-foreground mb-4">Connect</h4>
          <div class="flex gap-3 mb-6">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 flex items-center justify-center rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-200"
              :aria-label="social.name"
            >
             
              <!-- LinkedIn -->
              <svg v-if="social.icon === 'linkedin'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <!-- Twitter -->
              <svg v-if="social.icon === 'twitter'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <!-- Dribbble -->
              <!-- <svg v-if="social.icon === 'dribbble'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12z"/>
              </svg> -->
            </a>
          </div>

          <a href="mailto:alozieblessing23@gmail.com" class="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
            alozieblessing23@gmail.com
          </a>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-left gap-4 max-w-7xl mx-auto ">
        <p class="text-sm text-muted-foreground">
          {{ currentYear }} Portfolio. Crafted with care.
        </p>
        <p class="text-sm text-muted-foreground">
          Built with Vue.js & Tailwind CSS
        </p>
      </div>
    </SectionWrapper>
  </footer>
</template>
