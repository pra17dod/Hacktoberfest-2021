<template>
  <p-panel :toggleable="true" :collapsed="true">
    <template #header>
      {{ version }}
    </template>
    <pre>
      {{ info }}
    </pre>
  </p-panel>
</template>
<script lang="ts">
import axios from "../plugins/axios";
import { defineComponent } from "vue";
import { ref, onMounted } from "vue";

export default defineComponent({
  name: "DockerInfo",
  setup() {
    const info = ref();
    const version = ref();

    const fetchContainers = async () => {
      try {
        const response = await axios.get("/api/info");
        info.value = response.data;
        version.value = "Docker " + info.value.ServerVersion;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(fetchContainers);

    return {
      info,
      version
    };
  }
});
</script>
