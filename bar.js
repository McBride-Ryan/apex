var options = {
        series: [
            {
                name: 'Qualified',
                data: [44, 55, 41, 37, 22, 43, 21]
            }, 
            {
                name: 'Surplus',
                data: [53, 32, 33, 52, 13, 43, 32]
            }, 
            {
                name: 'Unqualified',
                data: [2, 7, 1, 9, 1, 7, 2]
            }, 
             
            
        ],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
  },
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  stroke: {
    width: 2,
    colors: ['#fff']
  },
  title: {
    text: 'Lead Types'
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
      text: undefined
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K"
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar"), options);
  chart.render();

 