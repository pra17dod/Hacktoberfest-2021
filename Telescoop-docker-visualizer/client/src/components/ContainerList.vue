<template>
  <p-card>
    <template #title> Containers </template>
    <template #content>
      <p-data-table :value="data" :autoLayout="true" columnResizeMode="fit" class="p-datatable-sm">
        <template #header>
          <div class="table-header">
            <span
              style="font-size: 12px; font-weight: normal; font-style: italic"
              >Last updated {{ updated }}
            </span>
            <div>
              <p-progress-spinner v-show="spinning" animationDuration=".5s" class="refresh-spinner p-mr-2" />
              <p-toggle-button
                class="p-button-sm p-mr-2"
                v-model="autorefresh"
                onLabel="Autorefresh"
                offLabel="Autorefresh"
                onIcon="pi pi-check"
                offIcon="pi pi-times"
                iconPos="right"
                @change="switchAutorefresh"
              />
              <p-button
                @click="fetchContainers"
                class="p-button-sm"
                icon="pi pi-refresh"
                iconPos="right"
              />
            </div>
          </div>
        </template>
        <p-column
          field="name"
          header="Name"
          bodyClass="p-text-nowrap p-text-truncate"
        ></p-column>
        <p-column
          field="image"
          header="Image"
          bodyClass="p-text-nowrap p-text-truncate"
        ></p-column>
        <p-column
          field="status"
          header="Status"
          bodyClass="p-text-nowrap p-text-truncate"
        ></p-column>
        <p-column
          field="state"
          header="State"
          bodyClass="p-text-nowrap p-text-truncate"
        ></p-column>
        <p-column
          field="created"
          header="Created"
          bodyClass="p-text-nowrap p-text-truncate"
        ></p-column>
        <p-column
          field="ports"
          header="Ports"
          bodyClass="p-text-nowrap p-text-truncate"
        ></p-column>
        <p-column
          field="mounts"
          header="Mounts"
          bodyClass="p-text-nowrap p-text-truncate"
        ></p-column>
      </p-data-table>
    </template>
    <pre></pre>
  </p-card>
</template>
<script lang="ts">
import axios from "../plugins/axios";
import { defineComponent, ref, onMounted, onUnmounted, computed } from "vue";

export default defineComponent({
  name: "ContainerList",
  setup() {
    const data = ref();
    const updated = ref();
    const autorefresh = ref(false);
    const timer = ref();
    const spinning = ref(false);

    const fetchContainers = async () => {
      try {
        spinning.value = true;
        const response = await axios.get("/api/containers");
        data.value = response.data.map((item: any) => {
          return {
            name: item.Names.join(", "),
            image: item.Image,
            status: item.Status,
            state: item.State,
            created: new Date(item.Created * 1000).toLocaleString(),
            ports: item.Ports.map(
              (port: any) => `${port.PublicPort ? port.PublicPort : " "}:${port.PrivatePort}`
            ).join(", "),
            mounts: item.Mounts.map(
              (mount: any) => `${mount.Source ? mount.Source : " "}:${mount.Destination}`
            ).join(", ")
          };
        });
        updated.value = new Date().toLocaleTimeString();
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          spinning.value = false;
        }, 600);
      }
    };

    const cancelAutorefresh = () => {
      clearInterval(timer.value);
    };

    const switchAutorefresh = () => {
      if (autorefresh.value) {
        timer.value = setInterval(fetchContainers, 3000);
      } else {
        cancelAutorefresh();
      }
    };

    onMounted(fetchContainers);
    onUnmounted(cancelAutorefresh);

    return {
      data,
      updated,
      autorefresh,
      fetchContainers,
      switchAutorefresh,
      spinning
    };
  }
});
</script>
<style scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.refresh-spinner {
  width: 30px;
  height: 26px;
}
p-data-table {
  max-width: 100%;
}
</style>

