var chart = require('chart.js');

const data = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
      label: 'Tea Stats',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "#B9FFB9",   //content
      borderColor: 'rgb(50, 255, 50)',  //lines
      pointBackgroundColor: 'rgb(50, 255, 50)',
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
      }
    },
  };

  // render chart
  const myChart = new Chart(
    document.getElementById('graph'),
    config
  );