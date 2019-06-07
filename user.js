let ctxl = document.getElementById("lineChart").getContext("2d");
let myLineChart = new Chart(ctxl, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My first dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: ["rgba(105, 0, 132, .2)"],
        borderColor: ["rgba(200, 99, 132, .7)"],
        borderWidth: 2
      },
      {
        label: "My second dataset",
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        borderColor: ["rgba(0, 10, 130, .7)"],
        borderWidth: 2
      }
    ]
  },
  options: {
    responsive: true
  }
});
