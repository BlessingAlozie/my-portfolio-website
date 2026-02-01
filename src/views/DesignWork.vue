<script setup>
import { RouterLink } from 'vue-router'
import SectionWrapper from '../components/ui/SectionWrapper.vue'
import AnimatedSection from '../components/ui/AnimatedSection.vue'
import ProjectCard from '../components/ui/ProjectCard.vue'

const caseStudies = [
  {
    slug: 'ecommerce-redesign',
    title: 'E-Commerce Platform Redesign',
    description: 'Complete UX overhaul of a fashion e-commerce platform, resulting in 40% increase in conversion rates and 25% reduction in cart abandonment.',
    image: '/images/design-1.jpg',
    tags: ['UI/UX', 'E-Commerce', 'Mobile', 'Web'],
    role: 'Lead Product Designer',
    duration: '3 months'
  },
  {
    slug: 'banking-app',
    title: 'Mobile Banking App',
    description: 'Designing a mobile-first banking experience with focus on accessibility, security, and ease of use for Gen Z users.',
    image: '/images/design-2.jpg',
    tags: ['Product Design', 'Fintech', 'iOS', 'Android'],
    role: 'UI/UX Designer',
    duration: '4 months'
  },
  {
    slug: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    description: 'Creating an intuitive data visualization dashboard for a B2B analytics platform serving enterprise clients.',
    image: '/images/design-3.jpg',
    tags: ['Dashboard', 'Data Viz', 'Enterprise', 'Web'],
    role: 'Product Designer',
    duration: '2 months'
  },
  {
    slug: 'health-app',
    title: 'Healthcare Appointment App',
    description: 'Redesigning the patient journey for booking medical appointments, reducing booking time by 60%.',
    image: '/images/design-4.jpg',
    tags: ['Healthcare', 'UX Research', 'Mobile'],
    role: 'UX Designer',
    duration: '3 months'
  }
]

const designPrinciples = [
  {
    title: 'User-Centered',
    description: 'Every design decision starts with understanding user needs, pain points, and goals.',
    icon: 'user'
  },
  {
    title: 'Data-Informed',
    description: 'Combining qualitative insights with quantitative data to validate design choices.',
    icon: 'chart'
  },
  {
    title: 'Accessible',
    description: 'Designing inclusive experiences that work for everyone, regardless of ability.',
    icon: 'accessibility'
  },
  {
    title: 'Systematic',
    description: 'Building scalable design systems that ensure consistency and efficiency.',
    icon: 'grid'
  }
]
</script>

<template>
  <main class="pt-24 lg:pt-32">
    <!-- Hero -->
    <SectionWrapper size="md">
      <div class="max-w-3xl">
        <AnimatedSection animation="fade-up">
          <span class="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Design Work
          </span>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" :delay="100">
          <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Crafting experiences that <span class="gradient-text">matter</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" :delay="150">
          <p class="text-lg text-muted-foreground leading-relaxed">
            A collection of UI/UX case studies showcasing my approach to solving complex 
            design problems. Each project represents a journey from research to final delivery.
          </p>
        </AnimatedSection>
      </div>
    </SectionWrapper>

    <!-- Design Principles -->
    <SectionWrapper size="md" class="bg-muted/30">
      <AnimatedSection animation="fade-up">
        <h2 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
          Design Philosophy
        </h2>
      </AnimatedSection>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatedSection 
          v-for="(principle, index) in designPrinciples" 
          :key="principle.title"
          animation="fade-up"
          :delay="index * 100"
        >
          <div class="bg-card border border-border rounded-xl p-5 h-full hover:border-primary/50 transition-colors duration-300">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <!-- User Icon -->
              <svg v-if="principle.icon === 'user'" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <!-- Chart Icon -->
              <svg v-if="principle.icon === 'chart'" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <!-- Accessibility Icon -->
              <svg v-if="principle.icon === 'accessibility'" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <!-- Grid Icon -->
              <svg v-if="principle.icon === 'grid'" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h3 class="text-base font-semibold text-foreground mb-2">{{ principle.title }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ principle.description }}</p>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>

    <!-- Case Studies -->
    <SectionWrapper size="lg">
      <AnimatedSection animation="fade-up">
        <h2 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
          Case Studies
        </h2>
      </AnimatedSection>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedSection 
          v-for="(study, index) in caseStudies" 
          :key="study.slug"
          animation="fade-up"
          :delay="index * 100"
        >
          <RouterLink :to="`/case-studies/${study.slug}`" class="block group">
            <article class="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-400">
              <!-- Image -->
              <div class="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  v-if="study.image"
                  :src="study.image"
                  :alt="study.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                
                <!-- Role badge -->
                <div class="absolute bottom-4 left-4 flex items-center gap-3">
                  <span class="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
                    {{ study.role }}
                  </span>
                  <span class="text-xs text-white/80">{{ study.duration }}</span>
                </div>
              </div>

              <!-- Content -->
              <div class="p-6">
                <h3 class="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {{ study.title }}
                </h3>
                <p class="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {{ study.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in study.tags"
                    :key="tag"
                    class="px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </article>
          </RouterLink>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  </main>
</template>
