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
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Dribbble', url: 'https://dribbble.com', icon: 'dribbble' },
]
</script>

<template>
  <footer class="border-t border-border bg-card/50">
    <SectionWrapper size="md">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        <!-- Brand -->
        <div class="space-y-4">
          <RouterLink to="/" class="inline-block">
            <span class="font-display text-2xl font-bold tracking-tight">
              <span class="text-foreground">Port</span>
              <span class="text-primary">folio</span>
            </span>
          </RouterLink>
          <p class="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Designer who codes. Developer who designs. Building digital experiences that matter.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul class="space-y-3">
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
              class="w-10 h-10 flex items-center justify-center rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-200"
              :aria-label="social.name"
            >
              <!-- GitHub -->
              <svg v-if="social.icon === 'github'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <!-- LinkedIn -->
              <svg v-if="social.icon === 'linkedin'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <!-- Twitter -->
              <svg v-if="social.icon === 'twitter'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <!-- Dribbble -->
              <svg v-if="social.icon === 'dribbble'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
              </svg>
            </a>
          </div>
          <a 
            href="mailto:hello@example.com"
            class="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            hello@example.com
          </a>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
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
