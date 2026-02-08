<script setup>
import { onMounted } from "vue"

onMounted(() => {
  const script = document.createElement("script")
  script.type = "text/javascript"
  script.innerHTML = `
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    Cal("init", "product-design-conversation-15-mins", {
      origin: "https://app.cal.com"
    });

    Cal.ns["product-design-conversation-15-mins"]("inline", {
      elementOrSelector: "#cal-product-design",
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: true
      },
      calLink: "blessing-alozie-ewbde1/product-design-conversation-15-mins"
    });

    Cal.ns["product-design-conversation-15-mins"]("ui", {
      cssVarsPerTheme: {
        light: { "cal-brand": "#292929" },
        dark: { "cal-brand": "#2563EB" }
      },
      hideEventTypeDetails: false,
      layout: "month_view"
    });
  `

  document.body.appendChild(script)
})
</script>

<template>
  <div
    id="cal-product-design"
    class="w-full min-h-[650px] overflow-auto"
  />
</template>
