<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <Transition
    name="page"
    mode="out-in"
    appear
  >
    <div :key="route.path">
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
