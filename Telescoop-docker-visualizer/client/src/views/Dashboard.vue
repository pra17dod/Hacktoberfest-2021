<template>
  <div class="p-grid" style="height: 100%">
    <div class="p-col-4">
      <p-card>
        <template #title> Pie </template>
        <template #content>
          <p-chart type="pie" :data="pieData" />
        </template>
      </p-card>
    </div>
    <div class="p-col-4">
      <p-card>
        <template #title> Basic </template>
        <template #content>
          <p-chart type="line" :data="basicData" />
        </template>
      </p-card>
    </div>
    <div class="p-col-4">
      <p-card>
        <template #title> Doughnut </template>
        <template #content>
          <p-chart type="doughnut" :data="pieData" />
        </template>
      </p-card>
    </div>
    <div class="p-col-4">
      <p-card>
        <template #title> Multiaxis </template>
        <template #content>
          <p-chart
            type="bar"
            :data="multiAxisData"
            :options="multiAxisOptions"
          />
        </template>
      </p-card>
    </div>
    <div class="p-col-4">
      <p-card>
        <template #title> Polar Area </template>
        <template #content>
          <p-chart type="polarArea" :data="polarData" />
        </template>
      </p-card>
    </div>
    <div class="p-col-4">
      <p-card>
        <template #title> Radar </template>
        <template #content>
          <p-chart type="radar" :data="radarData" />
        </template>
      </p-card>
    </div>
    <div class="p-col-12 p-p-card-content">
      <DockerInfo></DockerInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DockerInfo from "@/components/DockerInfo.vue";

export default defineComponent({
  name: "Home",
  components: {
    DockerInfo
  },
  setup() {
    const basicData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "#42A5F5"
        },
        {
          label: "Second Dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: "#FFA726"
        }
      ]
    };
    const pieData = {
      labels: ["A", "B", "C"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
          hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"]
        }
      ]
    };
    const multiAxisData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Dataset 1",
          backgroundColor: [
            "#EC407A",
            "#AB47BC",
            "#42A5F5",
            "#7E57C2",
            "#66BB6A",
            "#FFCA28",
            "#26A69A"
          ],
          yAxisID: "y-axis-1",
          data: [65, 59, 80, 81, 56, 55, 10]
        },
        {
          label: "Dataset 2",
          backgroundColor: "#78909C",
          yAxisID: "y-axis-2",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
    const multiAxisOptions = {
      responsive: true,
      tooltips: {
        mode: "index",
        intersect: true
      },
      scales: {
        yAxes: [
          {
            type: "linear",
            display: true,
            position: "left",
            id: "y-axis-1",
            ticks: {
              min: 0,
              max: 100
            }
          },
          {
            type: "linear",
            display: true,
            position: "right",
            id: "y-axis-2",
            gridLines: {
              drawOnChartArea: false
            },
            ticks: {
              min: 0,
              max: 100
            }
          }
        ]
      }
    };
    const polarData = {
				datasets: [{
					data: [
						11,
						16,
						7,
						3,
						14
					],
					backgroundColor: [
						"#42A5F5",
                        "#66BB6A",
                        "#FFA726",
                        "#26C6DA",
                        "#7E57C2"
					],
					label: 'My dataset'
				}],
				labels: [
					"Red",
					"Green",
					"Yellow",
					"Grey",
					"Blue"
				]
      };
      const radarData = {
				labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: 'rgba(179,181,198,0.2)',
						borderColor: 'rgba(179,181,198,1)',
						pointBackgroundColor: 'rgba(179,181,198,1)',
						pointBorderColor: '#fff',
						pointHoverBackgroundColor: '#fff',
						pointHoverBorderColor: 'rgba(179,181,198,1)',
						data: [65, 59, 90, 81, 56, 55, 40]
					},
					{
						label: 'My Second dataset',
						backgroundColor: 'rgba(255,99,132,0.2)',
						borderColor: 'rgba(255,99,132,1)',
						pointBackgroundColor: 'rgba(255,99,132,1)',
						pointBorderColor: '#fff',
						pointHoverBackgroundColor: '#fff',
						pointHoverBorderColor: 'rgba(255,99,132,1)',
						data: [28, 48, 40, 19, 96, 27, 100]
					}
				]
			};
    return {
      basicData,
      pieData,
      multiAxisData,
      multiAxisOptions,
      polarData,
      radarData
    };
  }
});
</script>
