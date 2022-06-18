var chart = require('chart.js');

const backgroundColor = 'rgba(0,255,0,0.5)'

const data = {
    labels: [
      'Sweetness',
      'Astrigent',
      'Bitterness',
      'Umami',
      'Consistency'
    ],
    datasets: [{
      label: 'Tea Stats',
      data: [1, 3.5, 4, 3, 1],
      backgroundColor: "rgba(00, 255, 00, 0.1)",   //content
      borderColor: 'rgba(50, 255, 50)',  //lines
      pointBackgroundColor: 'rgb(00, 255, 00)',
      pointBorderColor: 'rgb(0, 255, 0)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  };

  const config = {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 1
        },
        point: {
          radius: 0
        }
      },
      scales: {
        r: {
          angleLines: {
            color: backgroundColor
          },
          grid: {
            color: backgroundColor
          },
          min: 0,
          max: 5,
          ticks: {
            beginAtZero: false,
            stepSize: 1
          }
        }
      }
    },
  };

  // render chart
  const myChart = new Chart(
    document.getElementById('graph'),
    config
  );