<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://app.cal.com/embed/embed.js'
  script.async = true
  document.head.appendChild(script)

  script.onload = () => {
    window.Cal("init", "product-design-conversation-15-mins", {
      origin: "https://app.cal.com"
    })

    window.Cal.ns["product-design-conversation-15-mins"]("inline", {
      elementOrSelector: "#cal-booking",
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: true
      },
      calLink: "blessing-alozie-ewbde1/product-design-conversation-15-mins"
    })

    window.Cal.ns["product-design-conversation-15-mins"]("ui", {
      cssVarsPerTheme: {
        dark: {
          "cal-brand": "#2563EB"
        }
      }
    })
  }
})
</script>

<template>
  <div id="cal-booking" class="w-full min-h-[750px]"></div>
</template>
