<template>
  <div>
    <ContainerList></ContainerList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContainerList from "@/components/ContainerList.vue";

export default defineComponent({
  name: "Containers",
  components: {
    ContainerList
  }
});
</script>
