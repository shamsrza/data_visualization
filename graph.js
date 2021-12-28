//data (point) labels
const lineDataLabels = {
  id: "lineDataLabels",
  afterDatasetsDraw(chart, args, options) {
    const { ctx } = chart;
    ctx.save();
    ctx.font = "18px Arial bold";

    for (let x = 0; x < chart.data.datasets.length; x++) {
      for (let i = 0; i < chart.data.datasets[x].data.length; i++) {
        //text lenth/width
        const textWidth = ctx.measureText(
          chart.data.datasets[x].data[i].status
        ).width;
        ctx.fillText(
          chart.data.datasets[x].data[i].status,
          chart.getDatasetMeta(x).data[i].x - textWidth / 2,
          chart.getDatasetMeta(x).data[i].y - 14
        );
      }
    }
    ctx.restore();
  },
};

//legend margin plugin
const legendMargin = {
  id: "legendMargin",
  beforeInit(chart, legend, options) {
    console.log(chart.legend.fit);
    const fitValue = chart.legend.fit;
    chart.legend.fit = function fit() {
      fitValue.bind(chart.legend)();
      return (this.height += 30);
    };
  },
};
var ctx = document.getElementById("myChart").getContext("2d");

var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["Today", "2022", "2024", "2026", "2028", "2030"],
    datasets: [
      {
        label: "First dataset",
        backgroundColor: "transparent",
        borderColor: "#17357a",
        data: [
          { x: "Today", y: 70, status: "A" },
          { x: "2022", y: 65, status: "B" },
          { x: "2024", y: 60, status: "C" },
          { x: "2026", y: 50, status: "D" },
          { x: "2028", y: 35, status: "E" },
          { x: "2030", y: 15, status: "F" },
        ],
        pointRadius: 5,
        pointBackgroundColor: "white",
        pointBorderColor: "black",
        tension: 0.4,
      },
      {
        label: "Second dataset",
        backgroundColor: "#dcdee0",
        borderColor: "#dcdee0",
        fill: true,
        data: [
          { x: "Today", y: 60, status: "G" },
          { x: "2022", y: 50, status: "H" },
          { x: "2024", y: 40, status: "I" },
          { x: "2026", y: 30, status: "J" },
          { x: "2028", y: 20, status: "K" },
          { x: "2030", y: 10, status: "     L" },
        ],
        pointRadius: 5,
        pointBackgroundColor: "white",
        pointBorderColor: "black",
        tension: 0.4,
      },
    ],
  },

  // Configuration options go here
  options: {
    responsive: true,
    layout: {
      padding: {
        right: 30,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  },
  plugins: [lineDataLabels, legendMargin],
});

function updateChartOne() {
  chart.data.datasets[0].data = [
    { x: "Today", y: 70, status: "A" },
    { x: "2022", y: 65, status: "B" },
    { x: "2024", y: 60, status: "C" },
    { x: "2026", y: 50, status: "D" },
    { x: "2028", y: 35, status: "E" },
    { x: "2030", y: 15, status: "F" },
  ];
  chart.data.datasets[1].data = [
    { x: "Today", y: 60, status: "G" },
    { x: "2022", y: 50, status: "H" },
    { x: "2024", y: 40, status: "I" },
    { x: "2026", y: 30, status: "J" },
    { x: "2028", y: 20, status: "K" },
    { x: "2030", y: 10, status: "     L" },
  ];
  chart.update();
}
function updateChartTwo() {
  chart.data.datasets[0].data = [
    { x: "Today", y: 60, status: "A" },
    { x: "2022", y: 55, status: "B" },
    { x: "2024", y: 50, status: "C" },
    { x: "2026", y: 40, status: "D" },
    { x: "2028", y: 25, status: "E" },
    { x: "2030", y: 5, status: "F" },
  ];
  chart.data.datasets[1].data = [
    { x: "Today", y: 50, status: "G" },
    { x: "2022", y: 40, status: "H" },
    { x: "2024", y: 30, status: "I" },
    { x: "2026", y: 20, status: "J" },
    { x: "2028", y: 10, status: "K" },
    { x: "2030", y: 0, status: "     L" },
  ];
  chart.update();
}
function updateChartThree() {
  chart.data.datasets[0].data = [
    { x: "Today", y: 60, status: "A" },
    { x: "2022", y: 45, status: "B" },
    { x: "2024", y: 10, status: "C" },
    { x: "2026", y: 20, status: "D" },
    { x: "2028", y: 40, status: "E" },
    { x: "2030", y: 50, status: "F" },
  ];
  chart.data.datasets[1].data = [
    { x: "Today", y: 10, status: "G" },
    { x: "2022", y: 30, status: "H" },
    { x: "2024", y: 45, status: "I" },
    { x: "2026", y: 55, status: "J" },
    { x: "2028", y: 15, status: "K" },
    { x: "2030", y: 25, status: "L" },
  ];
  chart.update();
}

//Data title onclick event
// function showTable() {
//   var tablewrap = document.getElementById("table");
//   var x = window.innerWidth;
//   tablewrap.classList.toggle("hidden");
// }
