<template>
  <p-tab-menu :model="items" />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopBar",
  setup() {
    const items = [
      { label: "Dashboard", icon: "pi pi-desktop", to: "/" },
      { label: "Containers", icon: "pi pi-calendar", to: "/containers" }
    ];

    return {
      items
    };
  }
});
</script>
