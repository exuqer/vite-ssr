<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div :class="$style.wrapper">
      sasasasa11111

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
sssss
  <RouterView />
</template>

<style lang="postcss" module>
@import '../styles';

.wrapper {
  background: var(--color-primary);
}
</style>
