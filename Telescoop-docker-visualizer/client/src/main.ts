import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import PrimeVue from "primevue/config";

import Button from "primevue/button";
import Card from "primevue/card";
import Chart from "primevue/chart";
import ToggleButton from 'primevue/togglebutton';
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import DataTable from "primevue/datatable";
import Panel from "primevue/panel";
import ProgressSpinner from 'primevue/progressspinner';
import TabMenu from "primevue/tabmenu";

import "primevue/resources/themes/arya-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(PrimeVue);

app.component("p-button", Button);
app.component("p-card", Card);
app.component("p-chart", Chart);
app.component("p-toggle-button", ToggleButton);
app.component("p-column", Column);
app.component("p-column-group", ColumnGroup);
app.component("p-data-table", DataTable);
app.component("p-panel", Panel);
app.component("p-progress-spinner",ProgressSpinner);
app.component("p-tab-menu", TabMenu);

app.mount("#app");
