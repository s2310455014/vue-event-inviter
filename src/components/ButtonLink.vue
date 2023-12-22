<script setup lang="ts">
defineProps<{
  url?: string
  label: string
}>()
</script>

<template>
  <router-link v-if="url" class="button" :to="url">{{ label }}</router-link>
  <button v-else class="button">{{ label }}</button>
</template>

<style scoped>
.button {
  cursor: pointer;
  color: white;
  display: inline-block;
  text-decoration: none;
  font-size: 1.5rem;
  padding-left: 1rem;
}

.button:hover {
  scale: 1.1;
  transition: ease-in 0.2s;
}
</style>
