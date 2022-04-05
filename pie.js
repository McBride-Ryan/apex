var options = {
    series: [144, 55],
    labels: ["Leads Delivered", "Leads Remaining"],
    chart: {
    type: 'donut',
  },
  title: {
    text: 'Monthly Goal'
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  let charts = new ApexCharts(document.querySelector("#pie"), options);
  charts.render();

  function appendData() {
    var arr = charts.w.globals.series.slice()
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
    return arr;
  }

  function removeData() {
    var arr = charts.w.globals.series.slice()
    arr.pop()
    return arr;
  }

  document.querySelector("#add").addEventListener("click", function() {
    charts.updateSeries(appendData())
  })

  document.querySelector("#remove").addEventListener("click", function() {
    charts.updateSeries(removeData())
  })

//   I wonder if there is a way to update or add a monthly goal to make it more personalized for the advertiser 

// Listen for an onClick -> legend field updates the Label 