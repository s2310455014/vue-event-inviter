<script setup lang="ts">
import ButtonLink from '@/components/ButtonLink.vue'
</script>

<template>
  <div class="main">
    <div class="header">
      <ButtonLink url="/" label="Events" />
      <ButtonLink url="/contacts" label="Contacts" />
    </div>

    <router-view></router-view>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}
.header {
  background-color: rgb(45, 129, 139);
  width: 100%;
  padding: 1rem;
  display: flex;
  gap: 2rem;
  justify-content: left;
}
</style>
