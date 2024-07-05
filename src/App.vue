<template>
  <div>
    <div>
      <RouterLink :to="{name: 'Notes'}">Notes</RouterLink> | 
      <RouterLink :to="{name: 'States'}">States</RouterLink>
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
