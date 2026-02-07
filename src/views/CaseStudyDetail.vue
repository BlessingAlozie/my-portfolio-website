<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import SectionWrapper from '../components/ui/SectionWrapper.vue'
import AnimatedSection from '../components/ui/AnimatedSection.vue'
import AnimatedButton from '../components/ui/AnimatedButton.vue'

const route = useRoute()

// Case study data (in a real app, this would come from an API/CMS)
const caseStudiesData = {
  'peerpay-credit-dashboard': {
  title: 'PeerPay Credit Transactions Dashboard',
  subtitle: 'Simplifying complex financial data into clear, actionable insights',
  heroImage: '/Peerpay-Network-Credit Transaction _ All Type.png',
  role: 'Product Designer',
  timeline: 'Initial design: 3 months | Iterations ongoing based on user feedback',
  team: '2 Designers, 4 Developers, 1 PM',
  tools: ['Figma', 'Responsive Design', 'Fintech UX Patterns', 'Data Visualization Tools'],
  overview: 'Designed a comprehensive credit transactions dashboard for PeerPay Network in Figma, transforming complex financial data into clear, actionable insights. The project focused on creating structured data visualization, intuitive filtering, and responsive layouts for desktop and tablet users, while maintaining trust and transparency in sensitive financial interactions.',
  
  problem: {
    title: 'The Challenge',
    content: 'Users struggled to quickly understand their credit transactions and overall portfolio due to complex workflows, lack of visual clarity, and insufficient feedback on actions. The dashboard needed to simplify financial data while maintaining accuracy and trust.',
    painPoints: [
      'Difficulty tracking multiple loan and repayment statuses',
      'Complex filtering and search across transactions',
      'Lack of visual hierarchy for important metrics',
      'Mobile and tablet layouts were inconsistent'
    ]
  },

  process: {
    title: 'Design Process',
    steps: [
      {
        phase: 'User Research & Discovery',
        description: 'Conducted interviews with borrowers, lenders, and internal staff to identify pain points and understand real-world transaction workflows.',
        outcomes: ['15 user interviews', 'Workflow mapping', 'Stakeholder insights']
      },
      {
        phase: 'Information Architecture & Wireframing',
        description: 'Organized data structures and created wireframes for the dashboard, focusing on hierarchy, filtering, and key metrics visibility.',
        outcomes: ['Wireframes', 'Data hierarchy diagrams', 'Filtering prototypes']
      },
      {
        phase: 'Responsive & Interaction Design',
        description: 'Designed mobile-first layouts and interactive components, ensuring a seamless experience across tablet and desktop.',
        outcomes: ['Mobile screens', 'Desktop layouts', 'Interactive prototypes']
      },
      {
        phase: 'Visual Design & Iteration',
        description: 'Developed a clear visual system aligned with PeerPay’s brand, iterated designs based on internal and beta user feedback to refine usability and trust indicators.',
        outcomes: ['Component library', 'Design system', 'Iterative prototypes']
      },
      {
        phase: 'Handoff & Collaboration',
        description: 'Prepared detailed specs, assets, and interactions for the development team, ensuring smooth implementation and adherence to UX principles.',
        outcomes: ['Handoff documentation', 'Developer support', 'QA for design fidelity']
      }
    ]
  },

  solution: {
    title: 'The Solution',
    content: 'A clear, user-focused credit transactions dashboard that makes monitoring, filtering, and understanding financial data intuitive and reliable.',
    features: [
      {
        title: 'Structured Data Visualization',
        description: 'Graphs, charts, and tables organized to highlight key metrics and trends.'
      },
      {
        title: 'Intuitive Filtering & Search',
        description: 'Easy-to-use filters and search to locate transactions quickly.'
      },
      {
        title: 'Responsive Layouts',
        description: 'Optimized for tablet and desktop, ensuring accessibility and readability across devices.'
      },
      {
        title: 'Real-Time Updates & Notifications',
        description: 'Live updates on transaction status, repayment schedules, and system alerts to keep users informed.'
      }
    ]
  },

  results: {
    title: 'Results & Impact',
    metrics: [
      { label: 'Transaction Completion Rate', value: '+85%', description: 'More users successfully completed transactions' },
      { label: 'User Satisfaction', value: '4.8/5', description: 'High rating from beta users on ease-of-use and clarity' },
      { label: 'Mobile/Tablet Usage', value: '78%', description: 'Majority of users engaging via mobile and tablet' },
      { label: 'Customer Retention', value: '82%', description: 'Increased repeat usage due to clear UX' }
    ],
    testimonial: {
      quote: 'The dashboard finally makes understanding my credit transactions easy and stress-free. I can see everything at a glance and trust the system.',
      author: 'Beta User',
      company: 'PeerPay Network'
    }
  },

  learnings: [
    'Iterative design is crucial for fintech dashboards—real user feedback shapes clarity and trust.',
    'Visual hierarchy and filtering are key for understanding complex financial data.',
    'Responsive design is essential for on-the-go banking.',
    'Trust indicators and feedback loops in the UI increase user confidence.'
  ],

  gallery: [
    '/Peerpay-Network-Credit Transaction _ All Type.png',
    '/Peerpay-Network-Credit Transaction _ Filters.png',
    '/Peerpay-Network-Credit Transaction _ Charts.png'
  ]
},
  'crrnetwork-website': {
  title: "CRRNetwork Website Design",
  subtitle: "Designing and building a high-performance, brand-focused website",
  heroImage: "/CRRNetwork.png",
  role: "Product Designer & Frontend Developer",
  timeline: "1 month",
  team: "Solo Project (Me)",
  tools: ["Figma", "HTML", "CSS", "JavaScript", "Vue.js", "SEO", "Responsive Design"],
  overview: "I designed and developed the CRRNetwork website from the ground up. I translated the brand’s vision into a clean, modern digital experience with intuitive navigation, strong visual hierarchy, and fully responsive layouts. SEO best practices were integrated during development to ensure discoverability and performance across search engines.",
  problem: {
    title: "The Challenge",
    content: "CRRNetwork needed a website that clearly communicated their services, reinforced their brand identity, and performed well across devices and search engines. The previous presence was minimal and didn’t reflect the quality of their offerings.",
    painPoints: [
      "No cohesive visual brand online",
      "Unstructured content and confusing navigation",
      "Poor mobile experience",
      "Limited organic search visibility"
    ]
  },
  process: {
    title: "Design & Development Process",
    steps: [
      {
        phase: "Brand Alignment & Strategy",
        description: "Defined visual direction, typography, and color palette aligned with the company’s brand identity.",
        outcomes: ["Brand-aligned style guide", "Typography & color system"]
      },
      {
        phase: "UX Architecture & Wireframes",
        description: "Mapped out user flows, structured content, and created wireframes to ensure intuitive navigation and clear content hierarchy.",
        outcomes: ["Sitemap", "User flows", "Wireframes"]
      },
      {
        phase: "UI Design & Responsive Layouts",
        description: "Designed high-fidelity, responsive interfaces in Figma that adapt seamlessly across mobile, tablet, and desktop devices.",
        outcomes: ["Responsive UI system", "High-fidelity mockups", "Interactive prototypes"]
      },
      {
        phase: "Frontend Development & SEO Integration",
        description: "Developed the website using HTML, CSS, and JavaScript while implementing SEO best practices, including meta tags, semantic markup, performance optimization, and accessibility considerations.",
        outcomes: ["Live responsive website", "SEO-optimized structure", "Performance & accessibility audit"]
      }
    ]
  },
  solution: {
    title: "The Solution",
    content: "A fully responsive, visually cohesive website that communicates CRRNetwork’s brand effectively, guides users intuitively, and ranks well on search engines. Every design and development decision was made with both user experience and performance in mind.",
    features: [
      {
        title: "Brand-Driven Design",
        description: "Visual identity fully reflected across all pages to strengthen brand recognition."
      },
      {
        title: "Intuitive Navigation",
        description: "Clear menu structure and logical content hierarchy for seamless browsing."
      },
      {
        title: "Responsive Performance",
        description: "Optimized layouts and assets for all devices, from mobile to desktop."
      },
      {
        title: "SEO & Accessibility",
        description: "Built with semantic HTML, meta tags, and accessibility standards to boost search visibility and user inclusivity."
      }
    ]
  },
  results: {
    title: "Results & Impact",
    metrics: [
      { label: "Page Load Speed", value: "95/100", description: "Google PageSpeed Insights score" },
      { label: "Mobile Responsiveness", value: "100%", description: "Fully optimized for mobile devices" },
      { label: "Organic Traffic Growth", value: "+120%", description: "Improved search visibility after launch" },
      { label: "User Engagement", value: "+75%", description: "Longer session durations and lower bounce rates" }
    ],
    testimonial: {
      quote: "The website exceeded our expectations. The design is modern, user-friendly, and SEO-friendly, giving our brand a professional online presence.",
      author: "Founder",
      company: "CRRNetwork"
    }
  },
  learnings: [
    "Designing and developing a site end-to-end ensures consistent execution",
    "Integrating SEO during development saves costly retrofits",
    "Responsive design requires testing across multiple real devices",
    "Clear UX and brand alignment increase both engagement and trust"
  ],
  gallery: ["/CRRNetwork.png"]
},
  
   'peerpay-network': {
    title: 'PeerPay Network Product Design',
    subtitle: 'Designing clear fintech workflows',
    heroImage: '/Peerpay-Network.png',
    role: 'Product Designer',
    timeline: 'Continuous (Ongoing)',
    team: '2 Designers, 4 Developers, 1 PM',
    tools: ['Figma', 'Responsive Design', 'Fintech Tools'],
    overview: 'Designed key product experiences for PeerPay Network in Figma, translating complex fintech workflows into clear, user-friendly interfaces. Focused on intuitive navigation, trust-building UI patterns, and fully responsive layouts.',
    problem: {
      title: 'The Challenge',
      content: 'Complex fintech workflows were difficult to navigate, causing user confusion and abandonment. Users struggled to understand transaction flows and security measures.',
      painPoints: [
        'Complex fintech terminology and workflows',
        'Unclear transaction status and history',
        'Poor mobile experience for on-the-go banking',
        'Security features felt intimidating rather than reassuring'
      ]
    },
    process: {
    title: 'Design Process',
    steps: [
      {
        phase: 'User Research',
        description: 'Collaborating with the PM, we interviewed users, observed transaction flows, and analyzed where friction occurred.',
        outcomes: ['20 user interviews', 'Workflow mapping', 'Competitive analysis insights']
      },
      {
        phase: 'Information Architecture',
        description: 'I translated research insights into wireframes and user flows to simplify complex workflows.',
        outcomes: ['Wireframes', 'User flows', 'Navigation structure']
      },
      {
        phase: 'Responsive & Interaction Design',
        description: 'Designed mobile-first layouts and interactions that provide clear feedback and consistent patterns across devices.',
        outcomes: ['Mobile screens', 'Tablet & desktop layouts', 'Interactive prototypes']
      },
      {
        phase: 'Visual Design & Handoff',
        description: 'Developed a visual system aligned with the brand and prepared detailed specs for the development team.',
        outcomes: ['Design system', 'Component library', 'Handoff documentation']
      }
      ]
    },
    solution: {
      title: 'The Solution',
      content: 'A clear, intuitive fintech platform that makes peer-to-peer transactions feel simple and secure.',
      features: [
        {
          title: 'Simple Transaction Flows',
          description: 'Streamlined 3-step process for sending and receiving money'
        },
        {
          title: 'Trust-Building UI',
          description: 'Clear security indicators and transaction confirmations'
        },
        {
          title: 'Responsive Design',
          description: 'Seamless experience across mobile, tablet, and desktop'
        },
        {
          title: 'Real-time Notifications',
          description: 'Instant updates on transaction status and account activity'
        }
      ]
    },
    results: {
      title: 'Results & Impact',
      metrics: [
        { label: 'Transaction Completion', value: '+85%', description: 'Higher completion rates' },
        { label: 'User Satisfaction', value: '4.7/5', description: 'App store rating' },
        { label: 'Mobile Usage', value: '78%', description: 'Mobile transactions' },
        { label: 'Customer Retention', value: '82%', description: 'Monthly active users' }
      ],
      testimonial: {
        quote: 'The new design makes sending money feel effortless. Security doesn\'t feel like a hassle anymore.',
        author: 'Beta User',
        company: 'PeerPay Network'
      }
    },
    learnings: [
      'Fintech requires clear security UX, not just backend security',
      'Mobile-first design is critical for peer-to-peer transactions',
      'Trust is built through transparency in every interaction',
      'Simplifying complex workflows requires deep domain understanding'
    ],
    gallery: [
      '/Peerpay-Network.png'
    ]
  },
 'daniels-kitchen': {
    title: 'Daniels Kitchen - Designed & Built E-Commerce Website',
    subtitle: 'Creating a premium digital storefront that drives sales and brand trust',
    heroImage: '/Daniels-kitchen.png',

    role: 'Sole Designer & Frontend Developer (Led Design to Build)',
    timeline: '1 Month',
    team: '1 Designer (Me), 1 Developers (Me)',
    tools: ['Figma', 'HTML', 'Tailwind CSS', 'Vue.js', 'E-Commerce Architecture', 'SEO'],

    overview: 'I designed and built Daniels Kitchen’s website from scratch, delivering a premium digital storefront that communicates product quality, builds brand trust, and enables seamless online sales. The platform is fully responsive, scalable, and optimized for SEO, helping the business grow online revenue significantly.',

    problem: {
      title: 'The Challenge',
      content: 'Daniels Kitchen needed a professional online presence that could support product visibility and digital sales. The goal was to establish a strong premium identity while ensuring the platform could scale with future growth.',
      painPoints: [
        'No clear online product presentation to showcase premium quality',
        'Digital brand identity was non-existent',
        'Existing solutions could not scale with sales growth',
        'Mobile users had poor experience, limiting conversions'
      ]
    },

    process: {
      title: 'Design & Build Approach',
      steps: [
        {
          phase: 'Brand & Strategy Alignment',
          description: 'Defined visual direction and digital positioning to reflect a premium gourmet identity.',
          outcomes: ['Visual design system', 'Typography & color palette', 'Brand consistency guidelines']
        },
        {
          phase: 'UX Architecture & User Flows',
          description: 'Mapped product categories and created intuitive browsing-to-checkout flows to improve discoverability and conversions.',
          outcomes: ['User journey mapping', 'Sitemap', 'Wireframes & prototypes']
        },
        {
          phase: 'UI Design & Mobile-First Layout',
          description: 'Designed high-fidelity responsive interfaces with strong product storytelling and optimized layouts for conversion.',
          outcomes: ['Responsive UI system', 'Product pages', 'Conversion-focused design']
        },
        {
          phase: 'Development & Launch',
          description: 'Built the website frontend with optimized performance and SEO-ready structure, ensuring smooth deployment and scalability.',
          outcomes: ['Live website', 'Optimized for SEO', 'Performance improvements']
        }
      ]
    },

    solution: {
      title: 'The Solution',
      content: 'A premium, fully responsive e-commerce platform designed to highlight product quality and provide a smooth purchasing experience.',
      features: [
        { title: 'Premium Brand Expression', description: 'Elegant visual system reflecting gourmet positioning' },
        { title: 'Structured Product Discovery', description: 'Intuitive categories and search to help users find products quickly' },
        { title: 'Streamlined Purchase Flow', description: 'Optimized checkout with minimal steps and mobile-friendly forms' },
        { title: 'Scalable Frontend Architecture', description: 'Built to support future growth and feature expansion' }
      ]
    },

    results: {
      title: 'Impact',
      metrics: [
        { label: 'Online Sales Growth', value: '+200%', description: 'First year after launch' },
        { label: 'Monthly Visitors', value: '15K+', description: 'Consistent traffic from SEO and marketing' },
        { label: 'Average Order Value', value: '+45%', description: 'Boosted through product presentation improvements' },
        { label: 'Conversion Rate', value: '3.8%', description: 'Healthy benchmark for e-commerce' }
      ],
      testimonial: {
        quote: 'The website helped us reach customers beyond our physical location and positioned our brand as truly premium.',
        author: 'Founder',
        company: 'Daniels Kitchen'
      }
    },

    learnings: [
      'Building from scratch taught me strong information architecture and UX decisions',
      'Premium brand experience relies on visual consistency and storytelling',
      'Mobile-first design directly impacts conversion rates for food e-commerce',
      'Clear UX design can measurably increase revenue and customer engagement'
    ],

    gallery: ['/Daniels-kitchen.png']
  }

}

const study = computed(() => {
  return caseStudiesData[route.params.slug] || null
})
</script>

<template>
  <main class="pt-24 lg:pt-32 " v-if="study">
  
    <!-- Hero -->
    <SectionWrapper size="md w-full">
        <div class="max-w-7xl mx-auto">
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
          <div class="px-8">
            <span class="text-muted-foreground">Role</span>
            <p class="font-medium text-foreground">{{ study.role }}</p>
          </div>
          <div class="px-8">
            <span class="text-muted-foreground">Timeline</span>
            <p class="font-medium text-foreground">{{ study.timeline }}</p>
          </div>
          <div class="px-8">
            <span class="text-muted-foreground">Team</span>
            <p class="font-medium text-foreground">{{ study.team }}</p>
          </div>
          <div class="px-8">
            <span class="text-muted-foreground">Tools</span>
            <p class="font-medium text-foreground">{{ study.tools.join(', ') }}</p>
          </div>
        </div>
      </AnimatedSection>
        </div>
    </SectionWrapper>

    <!-- Hero Image -->
    <SectionWrapper size="sm" :no-padding="true" class="py-8">
        <div class="max-w-7xl mx-auto py-8">
      <AnimatedSection animation="scale-in">
        <div class="rounded-2xl overflow-hidden bg-muted">
          <img
            :src="study.heroImage"
            :alt="study.title"
            class="w-full aspect-video pos object-cover object-top"
          />
        </div>
      </AnimatedSection>
       </div>
    </SectionWrapper>

    <!-- Overview -->
    <SectionWrapper size="md">
        <div class="max-w-7xl mx-auto">
     <AnimatedSection animation="fade-up">
        <div class="max-w-3xl">
          <h2 class="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Overview</h2>
          <p class="text-lg text-muted-foreground leading-relaxed">{{ study.overview }}</p>
        </div>
      </AnimatedSection>
        </div>
    </SectionWrapper>

    <!-- Problem -->
    <SectionWrapper size="md" class="bg-muted/30">
        <div class="max-w-7xl mx-auto">
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
        </div>
    </SectionWrapper>

    <!-- Process -->
    <SectionWrapper size="lg">
        <div class="max-w-7xl mx-auto">
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
        </div>
    </SectionWrapper>

    <!-- Solution -->
    <SectionWrapper size="lg" class="bg-muted/30">
        <div class="max-w-7xl mx-auto">
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
        </div>
    </SectionWrapper>

    <!-- Results -->
    <SectionWrapper size="lg">
        <div class="max-w-7xl mx-auto">
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
        </div>
    </SectionWrapper>

    <!-- Learnings -->
    <SectionWrapper size="md" class="bg-muted/30">
        <div class="max-w-7xl mx-auto">
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
        </div>
    </SectionWrapper>

    <!-- CTA -->
    <SectionWrapper size="md">
        <div class="max-w-7xl mx-auto">
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
        </div>
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
