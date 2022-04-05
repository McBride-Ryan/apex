var options = {
    series: [{
    name: 'Your Lead Growth',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Industry Average Lead Growth',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Compare Yourself to Similar Industry Growth Trends'
  },
  xaxis: {
    categories: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    labels: {
      formatter: function (val) {
        return val
      }
    }
  },
  yaxis: {
    title: {
        text: 'Leads per Month'
      },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K"
      }
    }
  },
  };

  var chart = new ApexCharts(document.querySelector("#area"), options);
  chart.render();