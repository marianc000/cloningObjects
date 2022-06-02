import Chart from './lib/auto.esm.js';

const COLORS = {
  red: 'rgba(255, 99, 132, 1)',
  orange: 'rgba(255, 159, 64, 1)',
  yellow: 'rgba(255, 205, 86, 1)',
  green: 'rgba(75, 192, 192, 1)',
  blue: 'rgba(54, 162, 235, 1)',
  purple: 'rgba(153, 102, 255, 1)',
  grey: 'rgba(201, 203, 207, 1)'
};

function transparent(color) {
  return color.replace(/, *1 *\)/, ', 0.8)');
}

let currentChart;

export function plot(source) {
  const { red, orange } = COLORS;
  const times = 1;
  const borderColor = source.map((v, i) => i % 2 === 0 ? red : orange);
  const backgroundColor = borderColor.map(c => transparent(c));

  const data = {
    labels: source.map(e => e.title),
    datasets: [
      {
        label: '',
        data: source.map(e => e.time),
        backgroundColor,
        borderColor,
        borderWidth: 1,
      }
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      animation: false,
      indexAxis: 'x',
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      elements: {
        bar: {
          borderWidth: 2,
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          display: false
        },
        title: {
          display: false,
          text: 'Chart.js Horizontal Bar Chart',
          font: {
            size: 24
          }
        },
        tooltip: {
          enabled: false
        }
      },
      scales: {
        x: {
          title: {
            text: 'Method and depth',
            display: true,
            font: {
              size: 24
            }
          },
          ticks: {

            font: {
              size: 20
            }
          }
        },
        y: {
          title: {
            text: 'Execution time, ms',
            display: true,
            font: {
              size: 24
            }
          },
          ticks: {

            font: {
              size: 24
            }
          }
        }
      }


    },
  };
  if (currentChart) currentChart.destroy();
  currentChart = new Chart(memoryChartDiv, config);
}