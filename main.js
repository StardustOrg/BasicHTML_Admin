/**
 * Esta função é utilizada para ocultar e visualizar
 * o sidebar quando o tamanho da tela estiver pequeno
 */
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

/**
 * Gráficos
 */
document.addEventListener("DOMContentLoaded", function () {
  var ctxMonthlyReport = document
    .getElementById("monthlyReport")
    .getContext("2d");
  var ctxWeekSales = document.getElementById("weekSales").getContext("2d");

  // Gráfico de linha (Monthly Report)
  new Chart(ctxMonthlyReport, {
    type: "line",
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
      datasets: [
        {
          label: "Faturamento Mensal",
          data: [1500, 1800, 1200, 2000, 1400, 1600, 1700],
          borderColor: "#6622CC",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  // Gráfico de barras (Week Sales)
  var weekSalesChart = new Chart(ctxWeekSales, {
    type: "bar",
    data: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      datasets: [
        {
          label: "Vendas na Semana",
          data: [12, 19, 3, 5, 2, 3, 10],
          backgroundColor: "#8EDCE6",
          borderColor: "#8EDCE6",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      onHover: function (event, elements) {
        if (elements.length > 0) {
          var index = elements[0].index;
          weekSalesChart.data.datasets[0].backgroundColor[index] = "#E1B4F4";
          weekSalesChart.data.datasets[0].borderColor[index] = "#E1B4F4";
          weekSalesChart.update();
        } else {
          weekSalesChart.data.datasets[0].backgroundColor =
            Array(7).fill("#8EDCE6");
          weekSalesChart.data.datasets[0].borderColor =
            Array(7).fill("#8EDCE6");
          weekSalesChart.update();
        }
      },
    },
  });
});
