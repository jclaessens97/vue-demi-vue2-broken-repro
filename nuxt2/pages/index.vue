<template>
  <Counter />
</template>

<script lang="ts">
import Vue from "vue";
import { Counter } from "lib/dist/lib.es";

export default Vue.extend({
  components: {
    Counter,
  },
});
</script>
