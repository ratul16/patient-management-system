<template>
  <div class="card charts shadow-sm">
    <div class="card-body">
      <h6>Consumption per day</h6>
      <div class="pt-3 chart">
        <canvas id="sales-chart" class="chart-canvas" height="170"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "BarChart",
  mounted() {
    // Chart Consumption by day
    var ctx = document.getElementById("sales-chart").getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Watts",
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: "#3A416F",
            data: [123, 987, 555, 777, 888, 444, 666],
            maxBarThickness: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              beginAtZero: true,
              font: {
                size: 12,
                family: "Open Sans",
                style: "normal",
              },
              color: "#9ca2b7",
            },
          },
          // eslint-disable-next-line no-dupe-keys
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#9ca2b7",
            },
          },
          // eslint-disable-next-line no-dupe-keys
          x: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#9ca2b7",
            },
          },
        },
      },
    });
  },
};
</script>
