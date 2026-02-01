<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import SectionWrapper from '../components/ui/SectionWrapper.vue'
import AnimatedSection from '../components/ui/AnimatedSection.vue'
import AnimatedButton from '../components/ui/AnimatedButton.vue'

const route = useRoute()

// Case study data (in a real app, this would come from an API/CMS)
const caseStudiesData = {
  'ecommerce-redesign': {
    title: 'E-Commerce Platform Redesign',
    subtitle: 'Transforming the shopping experience for a fashion brand',
    heroImage: '/images/case-detail-1.jpg',
    role: 'Lead Product Designer',
    timeline: '3 months',
    team: '2 Designers, 3 Developers, 1 PM',
    tools: ['Figma', 'Maze', 'Hotjar', 'Google Analytics'],
    overview: 'A fashion e-commerce platform was struggling with low conversion rates and high cart abandonment. The existing design felt dated and didn\'t meet modern user expectations for a seamless shopping experience.',
    problem: {
      title: 'The Challenge',
      content: 'The client\'s conversion rate had dropped 15% year-over-year, and user research revealed several pain points: confusing navigation, a complicated checkout process, and poor mobile experience. Cart abandonment was at an alarming 75%.',
      painPoints: [
        'Users couldn\'t easily find products they were looking for',
        'Checkout required 6+ steps and mandatory account creation',
        'Mobile experience was essentially a shrunk desktop site',
        'No personalization or product recommendations'
      ]
    },
    process: {
      title: 'Design Process',
      steps: [
        {
          phase: 'Research & Discovery',
          description: 'Conducted user interviews, analyzed heatmaps, and reviewed session recordings to understand user behavior and pain points.',
          outcomes: ['15 user interviews', 'Heatmap analysis', 'Competitive audit']
        },
        {
          phase: 'Information Architecture',
          description: 'Restructured the navigation and created intuitive category hierarchies based on user mental models.',
          outcomes: ['Card sorting sessions', 'New site map', 'Navigation prototype']
        },
        {
          phase: 'Wireframing & Prototyping',
          description: 'Created low-fidelity wireframes and interactive prototypes for usability testing.',
          outcomes: ['50+ wireframes', 'Clickable prototype', 'User testing']
        },
        {
          phase: 'Visual Design',
          description: 'Developed a modern, cohesive visual language that aligned with the brand while improving usability.',
          outcomes: ['Design system', 'Component library', 'Style guide']
        }
      ]
    },
    solution: {
      title: 'The Solution',
      content: 'We completely reimagined the shopping experience with a mobile-first approach, streamlined checkout, and personalized recommendations.',
      features: [
        {
          title: 'Simplified Navigation',
          description: 'Mega menu with visual categories and smart search with autocomplete'
        },
        {
          title: '3-Step Checkout',
          description: 'Reduced checkout to 3 simple steps with guest checkout option'
        },
        {
          title: 'Mobile-First Design',
          description: 'Designed specifically for mobile with touch-friendly interactions'
        },
        {
          title: 'Smart Recommendations',
          description: 'AI-powered product suggestions based on browsing behavior'
        }
      ]
    },
    results: {
      title: 'Results & Impact',
      metrics: [
        { label: 'Conversion Rate', value: '+40%', description: 'Increase in completed purchases' },
        { label: 'Cart Abandonment', value: '-25%', description: 'Reduction in abandoned carts' },
        { label: 'Mobile Revenue', value: '+60%', description: 'Growth in mobile transactions' },
        { label: 'Session Duration', value: '+35%', description: 'Longer time spent browsing' }
      ],
      testimonial: {
        quote: 'The redesign exceeded all our expectations. Not only did our metrics improve dramatically, but we\'re receiving constant positive feedback from customers about the new shopping experience.',
        author: 'Marketing Director',
        company: 'Fashion Brand'
      }
    },
    learnings: [
      'Guest checkout is critical - forcing account creation loses customers',
      'Mobile isn\'t just responsive - it needs dedicated UX thinking',
      'Small friction points compound into major conversion blockers',
      'User testing early saves costly development rework'
    ],
    gallery: [
      '/images/gallery-1.jpg',
      '/images/gallery-2.jpg',
      '/images/gallery-3.jpg',
      '/images/gallery-4.jpg'
    ]
  },
  'banking-app': {
    title: 'Mobile Banking App',
    subtitle: 'Banking for the next generation',
    heroImage: '/images/case-detail-2.jpg',
    role: 'UI/UX Designer',
    timeline: '4 months',
    team: '3 Designers, 5 Developers, 2 PMs',
    tools: ['Figma', 'Principle', 'UserTesting', 'Mixpanel'],
    overview: 'Designing a mobile banking experience that makes financial management intuitive and accessible for Gen Z users while maintaining the trust and security expected from financial institutions.',
    problem: {
      title: 'The Challenge',
      content: 'Traditional banking apps felt overwhelming and intimidating to younger users. Research showed Gen Z wanted simpler interfaces, more transparency, and better financial education.',
      painPoints: [
        'Complex interfaces with too much financial jargon',
        'Poor onboarding experience',
        'Lack of financial literacy features',
        'No social or gamification elements'
      ]
    },
    process: {
      title: 'Design Process',
      steps: [
        {
          phase: 'User Research',
          description: 'Extensive research with Gen Z users to understand their relationship with money and banking.',
          outcomes: ['30 user interviews', 'Survey (500+ responses)', 'Persona development']
        },
        {
          phase: 'Concept Development',
          description: 'Explored multiple design directions focusing on simplicity and education.',
          outcomes: ['3 design concepts', 'Stakeholder workshops', 'Direction selection']
        },
        {
          phase: 'Prototyping & Testing',
          description: 'Iterative prototyping with continuous user feedback.',
          outcomes: ['Interactive prototype', '5 rounds of testing', 'Accessibility audit']
        },
        {
          phase: 'Final Design',
          description: 'Polished visual design and comprehensive documentation.',
          outcomes: ['Complete design system', 'Developer handoff', 'Animation specs']
        }
      ]
    },
    solution: {
      title: 'The Solution',
      content: 'A fresh, approachable banking app that makes money management feel less intimidating and more empowering.',
      features: [
        {
          title: 'Visual Balance',
          description: 'Dashboard showing money in vs out with simple visualizations'
        },
        {
          title: 'Smart Insights',
          description: 'Plain-language spending analysis and saving suggestions'
        },
        {
          title: 'Learning Hub',
          description: 'Bite-sized financial education integrated into the experience'
        },
        {
          title: 'Goals & Rewards',
          description: 'Gamified savings goals with achievement system'
        }
      ]
    },
    results: {
      title: 'Results & Impact',
      metrics: [
        { label: 'User Satisfaction', value: '4.8/5', description: 'App store rating' },
        { label: 'Task Completion', value: '95%', description: 'Key tasks completed successfully' },
        { label: 'App Downloads', value: '500K+', description: 'Downloads in first 6 months' },
        { label: 'Daily Active Users', value: '68%', description: 'Return rate' }
      ],
      testimonial: {
        quote: 'Finally, a banking app that doesn\'t make me feel like I need a finance degree to use it. It\'s actually helped me start saving.',
        author: 'User Review',
        company: 'App Store'
      }
    },
    learnings: [
      'Financial jargon is a major barrier - plain language wins',
      'Education works best when integrated, not separate',
      'Trust is built through transparency and clear feedback',
      'Accessibility benefits all users, not just those with disabilities'
    ],
    gallery: [
      '/images/banking-1.jpg',
      '/images/banking-2.jpg',
      '/images/banking-3.jpg',
      '/images/banking-4.jpg'
    ]
  },
  'saas-dashboard': {
    title: 'SaaS Analytics Dashboard',
    subtitle: 'Data visualization reimagined',
    heroImage: '/images/case-detail-3.jpg',
    role: 'Product Designer',
    timeline: '2 months',
    team: '1 Designer, 2 Developers, 1 Data Scientist',
    tools: ['Figma', 'D3.js', 'Storybook', 'Amplitude'],
    overview: 'Creating an intuitive analytics dashboard that transforms complex data into actionable insights for enterprise decision-makers.',
    problem: {
      title: 'The Challenge',
      content: 'Enterprise users were drowning in data but starving for insights. The existing dashboard was a wall of numbers and charts that required training to understand.',
      painPoints: [
        'Information overload with no hierarchy',
        'Charts lacked context and explanations',
        'No way to customize or save views',
        'Mobile access was non-existent'
      ]
    },
    process: {
      title: 'Design Process',
      steps: [
        {
          phase: 'Discovery',
          description: 'Shadowed users to understand their daily workflows and decision-making processes.',
          outcomes: ['User shadowing', 'Workflow mapping', 'Key metrics identification']
        },
        {
          phase: 'Information Design',
          description: 'Restructured data hierarchy based on user priorities and decision needs.',
          outcomes: ['Information hierarchy', 'Data stories', 'Chart selection']
        },
        {
          phase: 'Interaction Design',
          description: 'Designed intuitive interactions for exploring and drilling into data.',
          outcomes: ['Interaction patterns', 'Filter system', 'Export flows']
        },
        {
          phase: 'Implementation',
          description: 'Worked closely with developers to ensure design fidelity and performance.',
          outcomes: ['Component library', 'Chart specifications', 'Performance optimization']
        }
      ]
    },
    solution: {
      title: 'The Solution',
      content: 'A clean, focused dashboard that surfaces insights instead of just data.',
      features: [
        {
          title: 'Executive Summary',
          description: 'At-a-glance view of key metrics with trend indicators'
        },
        {
          title: 'Smart Alerts',
          description: 'Proactive notifications for anomalies and opportunities'
        },
        {
          title: 'Custom Views',
          description: 'Save and share personalized dashboard configurations'
        },
        {
          title: 'Responsive Design',
          description: 'Full functionality on tablet and mobile devices'
        }
      ]
    },
    results: {
      title: 'Results & Impact',
      metrics: [
        { label: 'Time to Insight', value: '-60%', description: 'Faster decision making' },
        { label: 'Feature Adoption', value: '+80%', description: 'Users using advanced features' },
        { label: 'Support Tickets', value: '-45%', description: 'Reduction in dashboard questions' },
        { label: 'User Retention', value: '92%', description: 'Monthly active retention' }
      ],
      testimonial: {
        quote: 'For the first time, I can actually understand what our data is telling us without having to export to Excel.',
        author: 'VP of Operations',
        company: 'Enterprise Client'
      }
    },
    learnings: [
      'Less data shown = more insights gained',
      'Context is as important as the numbers themselves',
      'Customization is key for diverse user needs',
      'Performance directly impacts user trust in data accuracy'
    ],
    gallery: [
      '/images/dash-1.jpg',
      '/images/dash-2.jpg',
      '/images/dash-3.jpg',
      '/images/dash-4.jpg'
    ]
  }
}

const study = computed(() => {
  return caseStudiesData[route.params.slug] || null
})
</script>

<template>
  <main class="pt-24 lg:pt-32" v-if="study">
    <!-- Hero -->
    <SectionWrapper size="md">
      <AnimatedSection animation="fade-up">
        <RouterLink 
          to="/case-studies"
          class="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Case Studies
        </RouterLink>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" :delay="100">
        <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
          {{ study.title }}
        </h1>
        <p class="text-xl text-muted-foreground mb-8">{{ study.subtitle }}</p>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" :delay="150">
        <div class="flex flex-wrap gap-6 text-sm">
          <div>
            <span class="text-muted-foreground">Role</span>
            <p class="font-medium text-foreground">{{ study.role }}</p>
          </div>
          <div>
            <span class="text-muted-foreground">Timeline</span>
            <p class="font-medium text-foreground">{{ study.timeline }}</p>
          </div>
          <div>
            <span class="text-muted-foreground">Team</span>
            <p class="font-medium text-foreground">{{ study.team }}</p>
          </div>
          <div>
            <span class="text-muted-foreground">Tools</span>
            <p class="font-medium text-foreground">{{ study.tools.join(', ') }}</p>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>

    <!-- Hero Image -->
    <SectionWrapper size="sm" :no-padding="true" class="py-8">
      <AnimatedSection animation="scale-in">
        <div class="rounded-2xl overflow-hidden bg-muted glow">
          <img
            :src="study.heroImage"
            :alt="study.title"
            class="w-full aspect-video object-cover"
          />
        </div>
      </AnimatedSection>
    </SectionWrapper>

    <!-- Overview -->
    <SectionWrapper size="md">
      <AnimatedSection animation="fade-up">
        <div class="max-w-3xl">
          <h2 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Overview</h2>
          <p class="text-lg text-muted-foreground leading-relaxed">{{ study.overview }}</p>
        </div>
      </AnimatedSection>
    </SectionWrapper>

    <!-- Problem -->
    <SectionWrapper size="md" class="bg-muted/30">
      <AnimatedSection animation="fade-up">
        <div class="max-w-3xl">
          <h2 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            {{ study.problem.title }}
          </h2>
          <p class="text-muted-foreground leading-relaxed mb-6">{{ study.problem.content }}</p>
          
          <h3 class="font-semibold text-foreground mb-3">Key Pain Points</h3>
          <ul class="space-y-3">
            <li 
              v-for="point in study.problem.painPoints" 
              :key="point"
              class="flex items-start gap-3"
            >
              <svg class="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-muted-foreground">{{ point }}</span>
            </li>
          </ul>
        </div>
      </AnimatedSection>
    </SectionWrapper>

    <!-- Process -->
    <SectionWrapper size="lg">
      <AnimatedSection animation="fade-up">
        <h2 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
          {{ study.process.title }}
        </h2>
      </AnimatedSection>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatedSection 
          v-for="(step, index) in study.process.steps" 
          :key="step.phase"
          animation="fade-up"
          :delay="index * 100"
        >
          <div class="bg-card border border-border rounded-xl p-6 h-full">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                {{ index + 1 }}
              </span>
              <h3 class="font-semibold text-foreground">{{ step.phase }}</h3>
            </div>
            <p class="text-muted-foreground text-sm leading-relaxed mb-4">{{ step.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="outcome in step.outcomes" 
                :key="outcome"
                class="px-2 py-1 text-xs bg-muted rounded text-muted-foreground"
              >
                {{ outcome }}
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>

    <!-- Solution -->
    <SectionWrapper size="lg" class="bg-muted/30">
      <AnimatedSection animation="fade-up">
        <div class="max-w-3xl mb-8">
          <h2 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            {{ study.solution.title }}
          </h2>
          <p class="text-muted-foreground leading-relaxed">{{ study.solution.content }}</p>
        </div>
      </AnimatedSection>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <AnimatedSection 
          v-for="(feature, index) in study.solution.features" 
          :key="feature.title"
          animation="fade-up"
          :delay="index * 100"
        >
          <div class="bg-card border border-border rounded-xl p-6">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="font-semibold text-foreground mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-muted-foreground">{{ feature.description }}</p>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>

    <!-- Results -->
    <SectionWrapper size="lg">
      <AnimatedSection animation="fade-up">
        <h2 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
          {{ study.results.title }}
        </h2>
      </AnimatedSection>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <AnimatedSection 
          v-for="(metric, index) in study.results.metrics" 
          :key="metric.label"
          animation="scale-in"
          :delay="index * 100"
        >
          <div class="text-center p-6 rounded-xl bg-card border border-border">
            <div class="text-3xl md:text-4xl font-bold text-primary mb-2">{{ metric.value }}</div>
            <div class="font-medium text-foreground mb-1">{{ metric.label }}</div>
            <div class="text-xs text-muted-foreground">{{ metric.description }}</div>
          </div>
        </AnimatedSection>
      </div>

      <!-- Testimonial -->
      <AnimatedSection animation="fade-up">
        <blockquote class="relative bg-card border border-border rounded-2xl p-8 md:p-10">
          <svg class="absolute top-6 left-6 w-10 h-10 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p class="text-lg md:text-xl text-foreground italic leading-relaxed pl-12 md:pl-16 mb-6">
            "{{ study.results.testimonial.quote }}"
          </p>
          <footer class="pl-12 md:pl-16">
            <cite class="not-italic">
              <span class="font-medium text-foreground">{{ study.results.testimonial.author }}</span>
              <span class="text-muted-foreground"> / {{ study.results.testimonial.company }}</span>
            </cite>
          </footer>
        </blockquote>
      </AnimatedSection>
    </SectionWrapper>

    <!-- Learnings -->
    <SectionWrapper size="md" class="bg-muted/30">
      <AnimatedSection animation="fade-up">
        <h2 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
          Key Learnings
        </h2>
        <ul class="space-y-4">
          <li 
            v-for="(learning, index) in study.learnings" 
            :key="index"
            class="flex items-start gap-3"
          >
            <svg class="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span class="text-muted-foreground">{{ learning }}</span>
          </li>
        </ul>
      </AnimatedSection>
    </SectionWrapper>

    <!-- CTA -->
    <SectionWrapper size="md">
      <AnimatedSection animation="scale-in">
        <div class="text-center">
          <h2 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Interested in working together?
          </h2>
          <p class="text-muted-foreground mb-8">
            Let's discuss how I can help with your next project.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <RouterLink to="/contact">
              <AnimatedButton variant="primary" size="lg">
                Get in Touch
              </AnimatedButton>
            </RouterLink>
            <RouterLink to="/case-studies">
              <AnimatedButton variant="outline" size="lg">
                View More Work
              </AnimatedButton>
            </RouterLink>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  </main>

  <!-- 404 State -->
  <main v-else class="pt-24 lg:pt-32">
    <SectionWrapper size="lg">
      <div class="text-center">
        <h1 class="font-display text-4xl font-bold text-foreground mb-4">Case Study Not Found</h1>
        <p class="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
        <RouterLink to="/case-studies">
          <AnimatedButton variant="primary">
            View All Case Studies
          </AnimatedButton>
        </RouterLink>
      </div>
    </SectionWrapper>
  </main>
</template>
