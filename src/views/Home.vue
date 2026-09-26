<script setup lang="ts">
const widgets = ["alpha", "bravo", "charlie"];
</script>

<template>
  <div>
    <h2>App Onee</h2>
    <p>This is App One's home route.</p>
    <p>Click a widget to test deep linking / refresh / back-button:</p>
    <ul>
      <li v-for="w in widgets" :key="w">
        <RouterLink :to="`/widget/${w}`">{{ w }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
