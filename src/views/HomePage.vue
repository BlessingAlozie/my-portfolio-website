<script setup>
import { RouterLink } from "vue-router";
import SectionWrapper from "../components/ui/SectionWrapper.vue";
import AnimatedSection from "../components/ui/AnimatedSection.vue";
import AnimatedButton from "../components/ui/AnimatedButton.vue";
import ProjectCard from "../components/ui/ProjectCard.vue";

const featuredDesign = [

  {
  title: "Daniels Kitchen Website Design",
  description:
    "Designed a modern, conversion-focused website for Daniels Kitchen in Figma, translating brand identity into a clean, engaging digital experience. Focused on intuitive user flows, strong visual hierarchy, and fully responsive layouts to ensure seamless performance across mobile, tablet, and desktop devices.",
  image: "/Daniels-kitchen.png",
  tags: ["UI/UX Design", "Figma", "Responsive Design", "Brand Experience"],
  link: "/case-studies/daniels-kitchen",
},

 {
  title: "PeerPay Network Product Design",
  description:
    "Designed key product experiences for PeerPay Network in Figma, translating complex fintech workflows into clear, user-friendly interfaces. Focused on intuitive navigation, trust-building UI patterns, and fully responsive layouts to ensure seamless performance across mobile, tablet, and desktop devices.",
  image: "/Peerpay-Network.png",
  tags: ["Product Design", "Fintech", "Figma", "Responsive Design"],
  link: "/case-studies/peerpay-network",
},

  {
  title: "CRRNetwork Website Design",
  description:
    "Designed a modern, brand-aligned website for CRRNetwork in Figma, transforming business goals into a clear, engaging digital experience. Focused on strong visual hierarchy, intuitive navigation, and fully responsive layouts to ensure seamless performance across mobile, tablet, and desktop devices.",
  image: "/CRRNetwork..png",
  tags: ["UI/UX Design", "Figma", "Responsive Design", "Brand Strategy"],
  link: "/case-studies/crrnetwork-website",
},

 {
  title: "PeerPay Credit Transactions Dashboard",
  description:
    "Designed a comprehensive credit transactions dashboard for PeerPay Network in Figma, simplifying complex financial data into clear, actionable insights. Focused on structured data visualization, intuitive filtering, and responsive layouts to ensure seamless usability across desktop and tablet devices.",
  image: "/Peerpay-Network-Credit Transaction _ All Type.png",
  tags: ["Product Design", "Fintech", "Dashboard Design", "Figma", "Responsive Design"],
  link: "/case-studies/peerpay-credit-dashboard",
},

];

const featuredDev = [
 {
  title: "CRRNetwork Web Platform",
  description:
    "Developed a responsive and performance-focused web platform for CRRNetwork using HTML, CSS, Vue.js, and JavaScript. Implemented dynamic components, structured layouts, and interactive features to deliver a smooth user experience across desktop and mobile devices.",
  image: "/CRRNETWORK2.png",
  tags: ["Vue.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
  link: "https://www.crrnetwork.org/",
  link: "/case-studies/crrnetwork-web-platform",
},

//   {
//   title: "Daniels Kitchen Website",
//   description:
//     "Developed a modern and responsive restaurant website for Daniels Kitchen using HTML, CSS, Vue.js, and JavaScript. Built dynamic UI sections, interactive menus, and optimized layouts to ensure smooth performance and a seamless experience across mobile and desktop devices.",
//   image: "/Daniels-kitchen.png",
//   tags: ["Vue.js", "JavaScript", "Tailwind CSS", "Responsive Design"],
//   link: "https://daniels-kitchen-com.vercel.app/",
// },

];
</script>

<template>
  <main class="pt-16 lg:pt-20 w-full">
    <!-- Hero Section -->
    <section
      class="relative min-h-[90vh] max-w-7xl mx-auto flex items-center overflow-hidden"
    >
      <!-- Animated Background -->
      <div class="absolute inset-0 -z-100">
        <!-- Gradient orbs -->
        <div
          class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"
        />
        <div
          class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow delay-1000"
        />

        <!-- Grid pattern -->
        <div
          class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_90%)]"
        />
      </div>

      <SectionWrapper size="xl">
        <div class="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-down" :delay="0">
            <span
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
            >
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for new opportunities
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" :delay="100">
            <h1
              class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium sm:font-bold leading-tight text-balance mb-6"
            >
              Designer. Developer.
              <span class="gradient-text">Product Thinker.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" :delay="200">
            <p
              class="text-lg md:text-xl text-muted-foreground sm:max-w-2xl mx-auto leading-relaxed mb-10"
            >
             I design and build digital products that balance user needs, business goals, and technical quality, focusing on clarity, usability, and product impact.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" :delay="300">
            <div
              class="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <RouterLink to="/design">
                <AnimatedButton variant="primary" size="md">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  View Design Work
                </AnimatedButton>
              </RouterLink>
              <RouterLink to="/development" class="mb-8 sm:mb-0">
                <AnimatedButton variant="outline" size="md">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  View Development Work
                </AnimatedButton>
              </RouterLink>
            </div>
          </AnimatedSection>
        </div>

        <!-- Scroll indicator -->
        <AnimatedSection
          animation="fade-in"
          :delay="800"
          class="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div class="flex flex-col items-center gap-2 text-muted-foreground">
            <span class="text-xs uppercase tracking-widest">Scroll</span>
            <div
              class="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
            >
              <div
                class="w-1 h-2 rounded-full bg-muted-foreground animate-bounce"
              />
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </section>

    <!-- Featured Design Work -->
    <SectionWrapper size="lg" class="bg-muted w-full">
      <div class="max-w-7xl mx-auto ">
        <AnimatedSection animation="fade-up">
          <div
            class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
          >
            <div>
              <h2
                class="font-display text-3xl md:text-4xl font-bold text-foreground mb-2"
              >
                Design Work
              </h2>
              <p class="text-muted-foreground">
                Selected UI/UX projects and case studies
              </p>
            </div>
            <RouterLink
              to="/design"
              class="text-primary font-medium hover:underline underline-offset-4 inline-flex items-center gap-2 group"
            >
              View all
              <svg
                class="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </RouterLink>
          </div>
        </AnimatedSection>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <AnimatedSection
            v-for="(project, index) in featuredDesign"
            :key="project.title"
            animation="fade-up"
            :delay="index * 100"
          >
            <RouterLink :to="project.link">
              <ProjectCard v-bind="project" />
            </RouterLink>
          </AnimatedSection>
        </div>
      </div>
    </SectionWrapper>

    <!-- Featured Development Work -->
    <SectionWrapper size="lg" class="w-full">
      <div class="max-w-7xl mx-auto ">
        <AnimatedSection animation="fade-up">
          <div
            class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
          >
            <div>
              <h2
                class="font-display text-3xl md:text-4xl font-bold text-foreground mb-2"
              >
                Development Work
              </h2>
              <p class="text-muted-foreground">
                Frontend projects showcasing Vue.js expertise
              </p>
            </div>
            <RouterLink
              to="/development"
              class="text-primary font-medium hover:underline underline-offset-4 inline-flex items-center gap-2 group"
            >
              View all
              <svg
                class="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </RouterLink>
          </div>
        </AnimatedSection>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <AnimatedSection
            v-for="(project, index) in featuredDev"
            :key="project.title"
            animation="fade-up"
            :delay="index * 100"
          >
            <RouterLink :to="project.link">
              <ProjectCard v-bind="project" />
            </RouterLink>
          </AnimatedSection>
        </div>
      </div>
    </SectionWrapper>

    <!-- CTA Section -->
    <SectionWrapper size="lg" class="bg-muted/30 w-full">
      <div class="max-w-7xl mx-auto">
        <AnimatedSection animation="scale-in">
          <div
            class="relative overflow-hidden rounded-3xl from-primary/10 via-card to-blue-400/10 border border-border p-8 md:p-12 lg:p-16 text-center"
          >
            <!-- Decorative elements -->
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
            />
            <div
              class="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"
            />

            <div class="relative">
              <h2
                class="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance"
              >
                Let's build something great together
              </h2>
              <p class="text-muted-foreground max-w-xl mx-auto mb-8">
                Whether you need a designer who understands code or a developer
                who thinks about users, I'd love to hear about your project.
              </p>
              <RouterLink to="/contact">
                <AnimatedButton variant="primary" size="lg">
                  Get in Touch
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </AnimatedButton>
              </RouterLink>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  </main>
</template>
