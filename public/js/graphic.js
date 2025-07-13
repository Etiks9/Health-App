document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("myChart");
  const ctx = canvas.getContext("2d");
  const xValues = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    // "Jun",
    // "Jul",
    // "Aug",
    // "Sep",
    // "Oct",
    // "Nov",
    // "Dec",
  ];
  const yValues = [41, 38, 42, 40, 42];

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#266431");
  gradient.addColorStop(0.1, "#266431");
  gradient.addColorStop(0.6, "#CCEFE0");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          data: yValues,
          backgroundColor: gradient, // Gradient background fill
          pointBackgroundColor: "#224945", // Dots color
          pointRadius: 3,
          fill: true,
          tension: 0.5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Weight in (kg)",
          align: "start",
          font: {
            size: 18,
            family: "Lato",
            weight: "normal",
          },
          color: "#224945",
          padding: {
            top: 5,
            bottom: 5,
          },
        },
      },
      datalabels: {
        color: "#224945",
        anchor: "end",
        align: "top",
        font: {
          weight: "bold",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            display: false,
          },
          grid: {
            display: false,
            drawTicks: false,
          },
        },
        x: {
          ticks: {
            display: true,
          },
          grid: {
            display: false,
          },
        },
      },
    },
  });
});
