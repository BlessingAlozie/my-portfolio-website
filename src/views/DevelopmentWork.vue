<script setup>
import SectionWrapper from '../components/ui/SectionWrapper.vue'
import AnimatedSection from '../components/ui/AnimatedSection.vue'
import AnimatedButton from '../components/ui/AnimatedButton.vue'

const projects = [
  {
    title: 'Real-Time Analytics Dashboard',
    description: 'A comprehensive analytics dashboard built with Vue.js 3 and D3.js. Features real-time data updates via WebSocket, interactive charts, and customizable widgets.',
    image: '/images/dev-1.jpg',
    tags: ['Vue.js 3', 'D3.js', 'WebSocket', 'Tailwind CSS'],
    liveUrl: 'https://example.com/dashboard',
    githubUrl: 'https://github.com/username/dashboard',
    highlights: [
      'Real-time data streaming with WebSocket',
      'Custom chart components with D3.js',
      'Responsive and accessible design',
      'Performance optimized for large datasets'
    ],
    challenges: 'Handling real-time updates efficiently while maintaining smooth 60fps animations for charts with thousands of data points.'
  },
  {
    title: 'Vue Component Library',
    description: 'An open-source Vue 3 component library with 50+ accessible, customizable components. Built with TypeScript and documented with Storybook.',
    image: '/images/dev-2.jpg',
    tags: ['Vue.js 3', 'TypeScript', 'Storybook', 'Vite'],
    liveUrl: 'https://example.com/components',
    githubUrl: 'https://github.com/username/vue-components',
    highlights: [
      '50+ production-ready components',
      'Full TypeScript support',
      'WCAG 2.1 AA accessible',
      'Tree-shakeable for optimal bundle size'
    ],
    challenges: 'Designing an API that is both simple for beginners and flexible enough for advanced use cases.'
  },
  {
    title: 'E-Commerce Storefront',
    description: 'A performant e-commerce storefront using Nuxt 3 with server-side rendering. Features product search, filtering, cart management, and Stripe checkout.',
    image: '/images/dev-3.jpg',
    tags: ['Nuxt 3', 'Pinia', 'Stripe', 'Prisma'],
    liveUrl: 'https://example.com/store',
    githubUrl: 'https://github.com/username/ecommerce',
    highlights: [
      'SSR for optimal SEO and performance',
      'Instant search with Algolia',
      'Secure Stripe checkout integration',
      'Inventory management system'
    ],
    challenges: 'Optimizing the initial page load while maintaining dynamic content and real-time inventory updates.'
  },
  {
    title: 'Project Management Tool',
    description: 'A Kanban-style project management application with drag-and-drop, real-time collaboration, and team workspaces.',
    image: '/images/dev-4.jpg',
    tags: ['Vue.js 3', 'Socket.io', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://example.com/tasks',
    githubUrl: 'https://github.com/username/taskboard',
    highlights: [
      'Real-time collaborative editing',
      'Drag-and-drop task management',
      'Team workspaces and permissions',
      'Activity timeline and notifications'
    ],
    challenges: 'Implementing conflict resolution for real-time collaboration when multiple users edit the same data simultaneously.'
  },
  {
    title: 'Weather App PWA',
    description: 'A progressive web app that provides weather forecasts with offline support. Uses geolocation and features beautiful weather animations.',
    image: '/images/dev-5.jpg',
    tags: ['Vue.js 3', 'PWA', 'Canvas', 'IndexedDB'],
    liveUrl: 'https://example.com/weather',
    githubUrl: 'https://github.com/username/weather',
    highlights: [
      'Works offline with service workers',
      'Animated weather visualizations',
      'Location-based forecasts',
      'Push notifications for alerts'
    ],
    challenges: 'Creating smooth canvas animations that work well on both high-end and low-powered devices.'
  },
  {
    title: 'Markdown Editor',
    description: 'A distraction-free markdown editor with live preview, syntax highlighting, and cloud sync. Supports custom themes and keyboard shortcuts.',
    image: '/images/dev-6.jpg',
    tags: ['Vue.js 3', 'CodeMirror', 'Firebase', 'Electron'],
    liveUrl: 'https://example.com/editor',
    githubUrl: 'https://github.com/username/markdown-editor',
    highlights: [
      'Real-time markdown preview',
      'Syntax highlighting for code',
      'Cloud sync across devices',
      'Export to PDF, HTML, and more'
    ],
    challenges: 'Implementing a performant live preview that handles large documents without lag.'
  }
]

const techStack = [
  { name: 'Vue.js 3', level: 95, category: 'Framework' },
  { name: 'TypeScript', level: 90, category: 'Language' },
  { name: 'Nuxt.js', level: 85, category: 'Framework' },
  { name: 'Tailwind CSS', level: 95, category: 'Styling' },
  { name: 'Pinia', level: 90, category: 'State' },
  { name: 'Vite', level: 85, category: 'Build Tool' }
]
</script>

<template>
  <main class="pt-24 lg:pt-32">
    <!-- Hero -->
    <SectionWrapper size="md">
      <div class="max-w-3xl">
        <AnimatedSection animation="fade-up">
          <span class="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Development Work
          </span>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" :delay="100">
          <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Building with <span class="gradient-text">Vue.js</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" :delay="150">
          <p class="text-lg text-muted-foreground leading-relaxed">
            Frontend projects showcasing Vue.js expertise, clean code architecture, 
            and attention to performance and accessibility. Each project includes 
            live demos and source code.
          </p>
        </AnimatedSection>
      </div>
    </SectionWrapper>

    <!-- Tech Stack -->
    <SectionWrapper size="md" class="bg-muted/30">
      <AnimatedSection animation="fade-up">
        <h2 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
          Primary Tech Stack
        </h2>
      </AnimatedSection>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatedSection 
          v-for="(tech, index) in techStack" 
          :key="tech.name"
          animation="fade-up"
          :delay="index * 50"
        >
          <div class="bg-card border border-border rounded-xl p-5">
            <div class="flex items-center justify-between mb-3">
              <span class="font-medium text-foreground">{{ tech.name }}</span>
              <span class="text-xs text-muted-foreground px-2 py-1 bg-muted rounded">{{ tech.category }}</span>
            </div>
            <div class="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                class="h-full bg-primary rounded-full transition-all duration-1000"
                :style="{ width: `${tech.level}%` }"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>

    <!-- Projects -->
    <SectionWrapper size="lg">
      <AnimatedSection animation="fade-up">
        <h2 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
          Featured Projects
        </h2>
      </AnimatedSection>

      <div class="space-y-16 lg:space-y-24">
        <AnimatedSection 
          v-for="(project, index) in projects" 
          :key="project.title"
          :animation="index % 2 === 0 ? 'slide-left' : 'slide-right'"
        >
          <article class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <!-- Image -->
            <div 
              class="relative rounded-2xl overflow-hidden bg-muted group"
              :class="[index % 2 === 1 ? 'lg:order-2' : '']"
            >
              <div class="aspect-[16/10]">
                <img
                  v-if="project.image"
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <!-- Overlay with links -->
              <div class="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a 
                  :href="project.liveUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="View live demo"
                >
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  :href="project.githubUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-12 h-12 rounded-full bg-card border border-border text-foreground flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="View source code"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Content -->
            <div :class="[index % 2 === 1 ? 'lg:order-1' : '']">
              <h3 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                {{ project.title }}
              </h3>
              <p class="text-muted-foreground leading-relaxed mb-4">
                {{ project.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Highlights -->
              <div class="mb-6">
                <h4 class="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li 
                    v-for="highlight in project.highlights" 
                    :key="highlight"
                    class="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <svg class="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {{ highlight }}
                  </li>
                </ul>
              </div>

              <!-- Technical Challenge -->
              <div class="p-4 rounded-lg bg-muted/50 border border-border">
                <h4 class="text-sm font-semibold text-foreground mb-2">Technical Challenge</h4>
                <p class="text-sm text-muted-foreground">{{ project.challenges }}</p>
              </div>

              <!-- Links -->
              <div class="flex gap-4 mt-6">
                <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer">
                  <AnimatedButton variant="primary" size="sm">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </AnimatedButton>
                </a>
                <a :href="project.githubUrl" target="_blank" rel="noopener noreferrer">
                  <AnimatedButton variant="outline" size="sm">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source Code
                  </AnimatedButton>
                </a>
              </div>
            </div>
          </article>
        </AnimatedSection>
      </div>
    </SectionWrapper>

    <!-- GitHub Stats -->
    <SectionWrapper size="md" class="bg-muted/30">
      <AnimatedSection animation="scale-in">
        <div class="text-center">
          <h2 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Open Source Contributions
          </h2>
          <p class="text-muted-foreground max-w-xl mx-auto mb-8">
            I believe in giving back to the community. Check out my contributions and open-source projects.
          </p>
          <a 
            href="https://github.com/username" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <AnimatedButton variant="primary" size="lg">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub Profile
            </AnimatedButton>
          </a>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  </main>
</template>
