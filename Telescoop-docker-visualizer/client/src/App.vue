<template>
  <div style="height: 100%;" class="p-component">
    <TopBar />
    <router-view class="p-m-2" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "./components/TopBar.vue";

export default defineComponent({
  name: "App",
  components: {
    TopBar
  }
});
</script>
<style>
html,
body {
  height: 100%;
  width: 100%;
}

body {
  padding: 0px;
  margin: 0px;
  background-color: var(--surface-b);
}

</style>
