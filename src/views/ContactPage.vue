<template>
  <main class="pt-24 lg:pt-32">
    <!-- Hero -->
    <SectionWrapper size="md">
      <div class="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up">
          <span class="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Contact
          </span>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" :delay="100">
          <h1 class="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Let's work <span class="gradient-text">together</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" :delay="150">
          <p class="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Have a project in mind? Looking for a designer who codes or a developer 
            who understands design? I'd love to hear from you.
          </p>
        </AnimatedSection>
      </div>
    </SectionWrapper>

    <!-- Booking Calendar -->
    <SectionWrapper size="lg" class="mt-20">
      <div class="max-w-5xl mx-auto mt-20">
        <AnimatedSection animation="fade-up">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Schedule a call
            </h2>
            <p class="text-lg text-muted-foreground">
              Prefer to chat directly? Book a time that works for you.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" :delay="100">
          <div class="bg-card w-full border border-border rounded-2xl p-6 md:p-8 min-h-[600px] shadow-md">
            <CalBooking />
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>

    
 <!-- Contact Section -->
<SectionWrapper size="lg">
  <div class="flex justify-center items-center w-full min-h-[600px] bg-card mt-20">
    <div class="   max-w-7xl  w-full flex flex-col md:flex-row gap-10">
      
      <!-- Contact Info + Social Links -->
      <AnimatedSection animation="fade-up" :delay="150" class="flex-1 flex flex-col gap-6">
        <h2 class="font-display text-3xl font-bold text-foreground mb-4">
          Get in touch
        </h2>
        <p class="text-muted-foreground leading-relaxed max-w-xl mb-6">
          I'm currently open to freelance projects, full-time opportunities, 
          and interesting collaborations. Feel free to reach out through any 
          of the channels below.
        </p>

        <!-- Email -->
        <a 
          href="mailto:alozieblessing23@gmail.com"
          class="inline-flex items-center gap-4 text-foreground hover:text-primary transition-colors group w-full justify-start mb-6"
        >
          <div class="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <span class="text-sm text-muted-foreground">Email me at</span>
            <p class="font-medium">alozieblessing23@gmail.com</p>
          </div>
        </a>

      
      </AnimatedSection>

      <!-- Availability -->
      <AnimatedSection animation="fade-up" :delay="300" class="flex-1">
        <div class="mt-10 mb-10 p-6 rounded-xl bg-gradient-to-br from-primary/5 via-card to-blue-400/5 border border-border">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span class="font-medium text-foreground">Available for new projects</span>
          </div>
          <p class="text-sm text-muted-foreground">
            I typically respond within 24-48 hours. Looking forward to hearing about your project!
          </p>
        </div>
          <!-- Social Links -->
        <h3 class="font-semibold text-foreground mb-4">Connect on social</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
          >
            <div class="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
             
              
              <!-- LinkedIn -->
              <svg v-if="social.icon === 'linkedin'" class="w-5 h-5 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <!-- Twitter -->
              <svg v-if="social.icon === 'twitter'" class="w-5 h-5 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
             
            
            </div>
            <div>
              <p class="font-medium text-foreground group-hover:text-primary transition-colors">{{ social.name }}</p>
              <p class="text-sm text-muted-foreground">{{ social.description }}</p>
            </div>
          </a>
        </div>
      </AnimatedSection>

    </div>
  </div>
</SectionWrapper>

  </main>
</template>

<script setup>
import { ref } from 'vue'
import CalBooking from '@/components/ui/CalBooking.vue'

const socialLinks = [
 
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com', 
    icon: 'linkedin',
    description: 'Connect professionally'
  },
  { 
    name: 'Twitter', 
    url: 'https://twitter.com', 
    icon: 'twitter',
    description: 'Follow my thoughts'
  },

  
]

</script>


