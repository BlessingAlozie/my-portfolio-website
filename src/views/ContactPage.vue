<script setup>
import { ref, reactive } from 'vue'
import SectionWrapper from '../components/ui/SectionWrapper.vue'
import AnimatedSection from '../components/ui/AnimatedSection.vue'
import AnimatedButton from '../components/ui/AnimatedButton.vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const error = ref('')

const subjects = [
  { value: '', label: 'Select a subject' },
  { value: 'project', label: 'Project Inquiry' },
  { value: 'job', label: 'Job Opportunity' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'other', label: 'Other' }
]

const socialLinks = [
  { 
    name: 'GitHub', 
    url: 'https://github.com', 
    icon: 'github',
    description: 'Check out my code'
  },
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
  { 
    name: 'Dribbble', 
    url: 'https://dribbble.com', 
    icon: 'dribbble',
    description: 'See my designs'
  }
]

const handleSubmit = async () => {
  error.value = ''
  
  // Basic validation
  if (!form.name || !form.email || !form.subject || !form.message) {
    error.value = 'Please fill in all fields'
    return
  }

  if (!form.email.includes('@')) {
    error.value = 'Please enter a valid email address'
    return
  }

  isSubmitting.value = true

  // Simulate form submission
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    isSubmitted.value = true
    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (e) {
    error.value = 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <main class="pt-24 lg:pt-32 w-full">
    <!-- Hero -->
    <SectionWrapper size="md">
       <div class="max-w-7xl mx-auto">
      <div class="max-w-3xl">
        <AnimatedSection animation="fade-up">
          <span class="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Contact
          </span>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" :delay="100">
          <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Let's work <span class="gradient-text">together</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" :delay="150">
          <p class="text-lg text-muted-foreground leading-relaxed">
            Have a project in mind? Looking for a designer who codes or a developer 
            who understands design? I'd love to hear from you.
          </p>
        </AnimatedSection>
      </div>
       </div>
    </SectionWrapper>

    <!-- Contact Form & Info -->
    <SectionWrapper size="lg">
       <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Form -->
        <AnimatedSection animation="fade-up">
          <div class="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 class="font-display text-2xl font-bold text-foreground mb-6">
              Send a message
            </h2>

            <!-- Success state -->
            <div 
              v-if="isSubmitted" 
              class="text-center py-12"
            >
              <div class="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-foreground mb-2">Message sent!</h3>
              <p class="text-muted-foreground mb-6">Thanks for reaching out. I'll get back to you soon.</p>
              <AnimatedButton variant="outline" @click="isSubmitted = false">
                Send another message
              </AnimatedButton>
            </div>

            <!-- Form -->
            <form v-else @submit.prevent="handleSubmit" class="space-y-5">
              <!-- Error message -->
              <div 
                v-if="error" 
                class="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
              >
                {{ error }}
              </div>

              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Your name"
                  class="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="your@email.com"
                  class="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  class="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option 
                    v-for="option in subjects" 
                    :key="option.value" 
                    :value="option.value"
                    :disabled="!option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  class="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              <!-- Submit -->
              <AnimatedButton 
                variant="primary" 
                size="lg" 
                :disabled="isSubmitting"
                class="w-full"
              >
                <span v-if="isSubmitting" class="flex items-center gap-2">
                  <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
                <span v-else class="flex items-center gap-2">
                  Send Message
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </AnimatedButton>
            </form>
          </div>
        </AnimatedSection>

        <!-- Contact Info -->
        <div>
          <AnimatedSection animation="fade-up" :delay="100">
            <div class="mb-10">
              <h2 class="font-display text-2xl font-bold text-foreground mb-4">
                Get in touch
              </h2>
              <p class="text-muted-foreground leading-relaxed mb-6">
                I'm currently open to freelance projects, full-time opportunities, 
                and interesting collaborations. Feel free to reach out through any 
                of the channels below.
              </p>
              
              <!-- Email -->
              <a 
                href="mailto:hello@example.com"
                class="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <div class="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span class="text-sm text-muted-foreground">Email me at</span>
                  <p class="font-medium">hello@example.com</p>
                </div>
              </a>
            </div>
          </AnimatedSection>

          <!-- Social Links -->
          <AnimatedSection animation="fade-up" :delay="200">
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
                  <!-- GitHub -->
                  <svg v-if="social.icon === 'github'" class="w-5 h-5 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <!-- LinkedIn -->
                  <svg v-if="social.icon === 'linkedin'" class="w-5 h-5 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <!-- Twitter -->
                  <svg v-if="social.icon === 'twitter'" class="w-5 h-5 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <!-- Dribbble -->
                  <svg v-if="social.icon === 'dribbble'" class="w-5 h-5 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-foreground group-hover:text-primary transition-colors">{{ social.name }}</p>
                  <p class="text-sm text-muted-foreground">{{ social.description }}</p>
                </div>
              </a>
            </div>
          </AnimatedSection>

          <!-- Availability -->
          <AnimatedSection animation="fade-up" :delay="300">
            <div class="mt-10 p-6 rounded-xl bg-gradient-to-br from-primary/5 via-card to-blue-400/5 border border-border">
              <div class="flex items-center gap-3 mb-3">
                <span class="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span class="font-medium text-foreground">Available for new projects</span>
              </div>
              <p class="text-sm text-muted-foreground">
                I typically respond within 24-48 hours. Looking forward to hearing about your project!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
       </div>
    </SectionWrapper>
  </main>
</template>
