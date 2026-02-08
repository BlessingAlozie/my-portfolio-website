<script setup>
import { RouterLink } from 'vue-router'
import SectionWrapper from '../components/ui/SectionWrapper.vue'
import AnimatedSection from '../components/ui/AnimatedSection.vue'
import AnimatedButton from '../components/ui/AnimatedButton.vue'

// const designSkills = [
//   'Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'Design Systems', 
//   'User Research', 'Wireframing', 'Visual Design', 'Interaction Design'
// ]

const designSkills = [
  'Figma', 'Prototyping', 
  'User Research', 'Wireframing', 'Visual Design', 'Interaction Design'
]

// const frontendSkills = [
//   'Vue.js 3', 'React', 'TypeScript', 'Tailwind CSS', 'Nuxt.js',
//   'JavaScript ES6+', 'HTML5/CSS3', 'Git', 'REST APIs', 'GraphQL'
// ]

const frontendSkills = [
  'Vue.js 3', 'React',  'Tailwind CSS', 
  'JavaScript ES6+', 'HTML5/CSS3', 'Git', 'REST APIs', 'SEO'
]

const productSkills = [
  'Product Strategy', 'User Stories', 'Agile/Scrum', 'Roadmapping',
  'Analytics', 'A/B Testing', 'Stakeholder Management', 'PRDs'
]

const experience = [
{
  role: 'Frontend Developer',
  company: 'Ivory Learn',
  period: '2025 - Present',
  description: 'Developed responsive and high-performance web applications using Vue.js. Worked closely with designers to implement intuitive, user-friendly interfaces, optimized frontend performance, and ensured cross-browser compatibility. Contributed to improving the overall user experience and maintaining scalable, reusable code.'
},
  {
    role: 'Product Designer',
    company: 'Peerpay Network',
    period: '2025 - Present',
   description: 'Designing and refining the PeerPay lending platform, creating intuitive user interfaces, seamless onboarding flows, and robust design systems. Collaborating with product and engineering teams to build secure, user-friendly fintech experiences that drive adoption and engagement.'
},
  {
  role: 'Frontend Web Developer (Internship)',
  company: 'The Boltcliq Company',
  period: '2023 - 2024',
  description: 'Assisted in building responsive web applications and collaborated with designers to implement user-friendly interfaces.'
}
 
]
</script>

<template>
  <main class="pt-24 lg:pt-32">
    <!-- Hero -->
    <SectionWrapper size="lg">
       <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Image -->
        <AnimatedSection animation="fade-up">
          <div class="relative">
            <div class="aspect-[4/5] rounded-2xl overflow-hidden bg-muted glow">
              <img
                src="/Blessing.jpeg"
                alt="Profile photo"
                class="w-full h-full object-cover md:scale-x-[-1]" 
              />
            </div>
            <!-- Decorative badge -->
            <div class="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-xl">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span class="text-2xl font-bold text-primary">3+</span>
                </div>
                <div>
                  <p class="text-sm font-medium text-foreground">Years of</p>
                  <p class="text-sm text-muted-foreground">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <!-- Content -->
        <div>
          <AnimatedSection animation="fade-up" :delay="100">
            <span class="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              About Me
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" :delay="150">
            <h1 class="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              A designer who codes, a developer who designs
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" :delay="200">
            <div class="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a multidisciplinary creative who believes the best digital products are born 
                at the intersection of design and technology. With a background in both UI/UX design 
                and frontend development, I bring a unique perspective to every project.
              </p>
              <p>
                My approach is rooted in product thinking - understanding user needs, business goals, 
                and technical constraints to create solutions that truly work. Whether I'm designing 
                an interface or writing code, I'm always thinking about the bigger picture.
              </p>
              <p>
                When I'm not designing or coding, you'll find me exploring new design tools, 
                contributing to open source, or reading about product strategy and psychology.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" :delay="250">
            <div class="flex flex-wrap gap-4 mt-8">
              <RouterLink to="/contact">
                <AnimatedButton variant="primary" size="md">
                  Get in Touch
                </AnimatedButton>
              </RouterLink>
              <a href="/resume1.pdf" target="_blank">
                <AnimatedButton variant="outline" size="md">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </AnimatedButton>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
       </div>
    </SectionWrapper>

    <!-- Skills -->
    <SectionWrapper size="lg" class="bg-muted/30">
       <div class="max-w-7xl mx-auto">
      <AnimatedSection animation="fade-up">
        <div class="text-center mb-12">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p class="text-muted-foreground max-w-2xl mx-auto">
            A versatile toolkit spanning design, development, and product management
          </p>
        </div>
      </AnimatedSection>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Design -->
        <AnimatedSection animation="fade-up" :delay="100">
          <div class="bg-card border border-border rounded-2xl p-6 h-full">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-3">Design</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="skill in designSkills" 
                :key="skill"
                class="px-3 py-1.5 text-sm bg-muted rounded-lg text-muted-foreground"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </AnimatedSection>

        <!-- Frontend -->
        <AnimatedSection animation="fade-up" :delay="200">
          <div class="bg-card border border-border rounded-2xl p-6 h-full">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-3">Frontend</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="skill in frontendSkills" 
                :key="skill"
                class="px-3 py-1.5 text-sm bg-muted rounded-lg text-muted-foreground"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </AnimatedSection>

        <!-- Product -->
        <AnimatedSection animation="fade-up" :delay="300">
          <div class="bg-card border border-border rounded-2xl p-6 h-full">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-3">Product</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="skill in productSkills" 
                :key="skill"
                class="px-3 py-1.5 text-sm bg-muted rounded-lg text-muted-foreground"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
       </div>
    </SectionWrapper>

    <!-- Experience -->
    <SectionWrapper size="lg">
      <AnimatedSection animation="fade-up">
        <div class="text-center mb-12">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p class="text-muted-foreground max-w-2xl mx-auto">
            A journey through design, development, and product
          </p>
        </div>
      </AnimatedSection>

      <div class="max-w-3xl mx-auto space-y-8">
        <AnimatedSection 
          v-for="(job, index) in experience" 
          :key="job.role"
          animation="fade-up"
          :delay="index * 100"
        >
          <div class="relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300">
            <div class="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
            <span class="text-sm text-primary font-medium">{{ job.period }}</span>
            <h3 class="text-xl font-semibold text-foreground mt-1">{{ job.role }}</h3>
            <p class="text-muted-foreground font-medium">{{ job.company }}</p>
            <p class="text-muted-foreground mt-2 leading-relaxed">{{ job.description }}</p>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>

    <!-- CTA -->
    <SectionWrapper size="lg" class="bg-muted/30">
      <AnimatedSection animation="scale-in">
        <div class="text-center">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Want to work together?
          </h2>
          <p class="text-muted-foreground max-w-xl mx-auto mb-8">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about design and technology.
          </p>
          <RouterLink to="/contact">
            <AnimatedButton variant="primary" size="lg">
              Let's Connect
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </AnimatedButton>
          </RouterLink>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  </main>
</template>
   <!-- Form -->
        <!-- <AnimatedSection animation="fade-up">
          <div class="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h2 class="font-display text-2xl font-bold text-foreground mb-6">
              Send a message
            </h2>

             Success state -->
            <!-- <div 
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
            </div> -->

            <!-- Form -->
            <!-- <form v-else @submit.prevent="handleSubmit" class="space-y-5"> -->
              <!-- Error message -->
              <!-- <div 
                v-if="error" 
                class="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
              >
                {{ error }}
              </div> -->

              <!-- Name -->
              <!-- <div>
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
              </div> -->

              <!-- Email -->
              <!-- <div>
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
              </div> -->

              <!-- Subject -->
              <!-- <div>
                <label for="subject" class="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label> -->
                <!-- <select
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
              </div> -->

              <!-- Message -->
              <!-- <div>
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
              </div> -->

              <!-- Submit -->
              <!-- <AnimatedButton 
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
        </AnimatedSection> -->