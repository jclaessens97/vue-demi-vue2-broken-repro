<template>
  <div>
    <h1>Counter</h1>
    <div>Button clicked: {{ counter }}</div>
    <button @click="counter++">Count</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue-demi';

const counter = ref(0);
</script>
