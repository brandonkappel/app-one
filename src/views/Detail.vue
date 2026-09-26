<script setup lang="ts">
defineProps<{ id: string }>();
</script>

<template>
  <div>
    <h2>App One - Widget Detail</h2>
    <p>
      Showing widget: <strong>{{ id }}</strong>
    </p>
    <p>
      Try refreshing this page, or copy the URL into a new tab - both
      should land you right back here, inside the shell, with the
      shell's nav still present.
    </p>
    <RouterLink to="/">Back to App One home</RouterLink>
  </div>
</template>
