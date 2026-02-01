<script setup>
import { RouterLink } from 'vue-router'
import SectionWrapper from '../components/ui/SectionWrapper.vue'
import AnimatedSection from '../components/ui/AnimatedSection.vue'

const caseStudies = [
  {
    slug: 'ecommerce-redesign',
    title: 'E-Commerce Platform Redesign',
    subtitle: 'Transforming the shopping experience',
    description: 'How strategic UX improvements led to a 40% increase in conversion rates and significantly reduced cart abandonment for a fashion e-commerce platform.',
    image: '/images/case-1.jpg',
    category: 'UI/UX Design',
    metrics: [
      { label: 'Conversion Increase', value: '+40%' },
      { label: 'Cart Abandonment', value: '-25%' },
      { label: 'Session Duration', value: '+35%' }
    ]
  },
  {
    slug: 'banking-app',
    title: 'Mobile Banking App',
    subtitle: 'Banking for the next generation',
    description: 'Designing an inclusive, mobile-first banking experience that makes financial management intuitive and accessible for Gen Z users.',
    image: '/images/case-2.jpg',
    category: 'Product Design',
    metrics: [
      { label: 'User Satisfaction', value: '4.8/5' },
      { label: 'Task Completion', value: '95%' },
      { label: 'App Downloads', value: '500K+' }
    ]
  },
  {
    slug: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    subtitle: 'Data visualization reimagined',
    description: 'Creating an intuitive analytics dashboard that transforms complex data into actionable insights for enterprise decision-makers.',
    image: '/images/case-3.jpg',
    category: 'Dashboard Design',
    metrics: [
      { label: 'Time to Insight', value: '-60%' },
      { label: 'Feature Adoption', value: '+80%' },
      { label: 'User Retention', value: '92%' }
    ]
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
            Case Studies
          </span>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" :delay="100">
          <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            End-to-end <span class="gradient-text">product thinking</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" :delay="150">
          <p class="text-lg text-muted-foreground leading-relaxed">
            Deep dives into how design decisions influence development, highlighting 
            trade-offs, constraints, and measurable impact. Written from a product mindset.
          </p>
        </AnimatedSection>
      </div>
    </SectionWrapper>

    <!-- Case Studies List -->
    <SectionWrapper size="lg">
      <div class="space-y-16 lg:space-y-24">
        <AnimatedSection 
          v-for="(study, index) in caseStudies" 
          :key="study.slug"
          :animation="index % 2 === 0 ? 'slide-left' : 'slide-right'"
          :delay="100"
        >
          <RouterLink 
            :to="`/case-studies/${study.slug}`" 
            class="group block"
          >
            <article class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <!-- Image -->
              <div 
                class="relative rounded-2xl overflow-hidden bg-muted glow-sm"
                :class="[index % 2 === 1 ? 'lg:order-2' : '']"
              >
                <div class="aspect-[4/3]">
                  <img
                    v-if="study.image"
                    :src="study.image"
                    :alt="study.title"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <!-- Category badge -->
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1.5 text-xs font-medium rounded-full bg-background/90 backdrop-blur-sm text-foreground">
                    {{ study.category }}
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div :class="[index % 2 === 1 ? 'lg:order-1' : '']">
                <span class="text-sm text-primary font-medium">Case Study {{ String(index + 1).padStart(2, '0') }}</span>
                <h2 class="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                  {{ study.title }}
                </h2>
                <p class="text-lg text-muted-foreground mb-4">{{ study.subtitle }}</p>
                <p class="text-muted-foreground leading-relaxed mb-6">
                  {{ study.description }}
                </p>

                <!-- Metrics -->
                <div class="grid grid-cols-3 gap-4 mb-6">
                  <div 
                    v-for="metric in study.metrics" 
                    :key="metric.label"
                    class="text-center p-3 rounded-lg bg-muted/50"
                  >
                    <div class="text-xl md:text-2xl font-bold text-primary">{{ metric.value }}</div>
                    <div class="text-xs text-muted-foreground mt-1">{{ metric.label }}</div>
                  </div>
                </div>

                <!-- Read more link -->
                <span class="inline-flex items-center gap-2 text-primary font-medium group-hover:underline underline-offset-4">
                  Read case study
                  <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </article>
          </RouterLink>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  </main>
</template>
