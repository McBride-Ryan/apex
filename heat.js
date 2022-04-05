var options = {
    series: [{
      name: '',
      data: generateData(30, {
        min: 0,
        max: 100
      })
    },
    {
      name: 'Feb',
      data: generateData(30, {
        min: 0,
        max: 100
      })
    },
    {
      name: '',
      data: generateData(30, {
        min: 0,
        max: 100
      })
    },
    {
      name: 'Apr',
      data: generateData(30, {
        min: 0,
        max: 100
      })
    },
    {
      name: '',
      data: generateData(30, {
        min: 0,
        max: 100
      })
    },
    {
      name: 'Jun',
      data: generateData(30, {
        min: 0,
        max: 100
      })
    },
    {
      name: '',
      data: generateData(30, {
        min: 0,
        max: 100
      })
    },
    {
      name: 'Aug',
      data: generateData(30, {
        min: 0,
        max: 100
      })
    },
    {
      name: '',
      data: generateData(30, {
        min: 0,
        max: 100
      })
    },
    {
        name: 'Oct',
        data: generateData(30, {
          min: 0,
          max: 100
        })
    },
    {
        name: '',
        data: generateData(30, {
          min: 0,
          max: 100
        })
    },
    {
        name: 'Dec',
        data: generateData(30, {
          min: 0,
          max: 100
        })
    }

  ],
    chart: {
    height: 350,
    type: 'heatmap',
  },
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.9,
      radius: 0.3,
      useFillColorAsStroke: false,
      colorScale: {
        ranges: [{
            from: 0,
            to: 24,
            name: 'low',
            color: '#CBFDB4'
          },
          {
            from: 25,
            to: 49,
            name: 'medium',
            color: '#A8DB91'
          },
          {
            from: 26,
            to: 74,
            name: 'Requirement',
            color: '#6EA15B'
          },
          {
            from: 75,
            to: 100,
            name: 'Exceeded Requirement',
            color: '#27591A'
          }
        ]
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1
  },
  title: {
    text: '2020 - 2021'
  },
  };

  function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  var chart = new ApexCharts(document.querySelector("#heat"), options);
  chart.render();