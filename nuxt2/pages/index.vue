<template>
  <Counter />
</template>

<script lang="ts">
import Vue from "vue";
import { Counter } from "lib";

export default Vue.extend({
  components: {
    Counter,
  },
});
</script>
