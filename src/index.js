var chart = require('chart.js');

let sliders = [];
let outputs = [];

for (let i = 1; i < 6; i++) {
  sliders.push(document.getElementById('range'+i)); 
}

for (let i = 1; i < 6; i++) {
  outputs.push(document.getElementById('out'+i));  
}

for (let i = 0; i < outputs.length; i++) {
  outputs[i].innerText = sliders[i].value;
}

for (let i = 0; i < sliders.length; i++) {
  sliders[i].oninput = function () {
    outputs[i].innerHTML = this.value;
  }
}


const backgroundColor = 'rgb(54, 100, 48)'

  // render chart
  let graphEN = constructGraph([0,0,0,0,0], 'EN', 'graphEN');
  let graphDE = constructGraph([0,0,0,0,0], 'DE', 'graphDE');



  window.saveToGraph = function() {
    let values = [];
    for (let i = 0; i < outputs.length; i++) {
      const out = outputs[i];
      values.push(out.innerText);
    }


    graphEN.destroy();
    graphDE.destroy();
    graphEN = constructGraph(values, 'EN', 'graphEN');
    graphDE = constructGraph(values, 'DE', 'graphDE');
  }


function constructGraph(values, language, canvasID) {
      
  const dataEN = [
    'Sweetness',
    'Astringent',
    'Bitterness',
    'Umami',
    'Consistency'
  ];

  const dataDE = [
    'Süße',
    'Astringenz',
    'Bitterkeit',
    'Umami',
    'Konsistenz'
  ];

  const data = {
      labels: language == 'DE' ? dataDE : dataEN,
      datasets: [{
        data: values,
        backgroundColor: 'rgba(200, 255, 200, 0.3)', //content
        borderColor: 'rgba(50, 200, 50)',  //lines
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
        plugins: {
          legend: {
            display: false,
          }
        },
        responsive: false,
        maintainAspectRatio: true,
        devicePixelRatio: 5,
        
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
            pointLabels: {
              color: 'white',
              font: {
                family: "'Lora', serif",
                //size: 20,
                //style: 'italic'
              }
            },
            angleLines: {
              display: false,
              color: backgroundColor,
            },
            grid: {
              color: backgroundColor,
              lineWidth: 0.7,
            },
            min: 0,
            max: 5,
            ticks: {
              display: false,
              beginAtZero: false,
              stepSize: 1,
              borderWidth: 10,
            },
          }
        }
      }
    };
    let myChart = new chart(
      document.getElementById(canvasID),
      config
    );
    return myChart;
}