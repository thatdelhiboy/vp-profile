$(window).scroll(function () {
  //more then or equals to 
  if ($(window).scrollTop() >= 100 && $(window).width() > 767) {
    $(".topallprofilestats").css("display", "block");

    //less then 100px from top 
  }
  if ($(window).scrollTop() <= 100) {
    $(".topallprofilestats").css("display", "none");

    //less then 100px from top 
  }
});


// heat   map chat con fig script


var options = {
  series: [{
    name: 'Jan',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Feb',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Mar',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Apr',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'May',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Jun',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Jul',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Aug',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Sep',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  }
],
  chart: {
  height: 350,
  type: 'heatmap',
},
plotOptions: {
  heatmap: {
    shadeIntensity: 0.5,
    radius: 0,
    useFillColorAsStroke: true,
    colorScale: {
      ranges: [{
          from: -30,
          to: 5,
          name: 'low',
          color: '#00A100'
        },
        {
          from: 6,
          to: 20,
          name: 'medium',
          color: '#128FD9'
        },
        {
          from: 21,
          to: 45,
          name: 'high',
          color: '#FFB200'
        },
        {
          from: 46,
          to: 55,
          name: 'extreme',
          color: '#FF0000'
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
  text: 'HeatMap Chart with Color Range'
},
};

var chart = new ApexCharts(document.querySelector("#myChartindia"), options);
chart.render();





// combine chart 


// influncer chart js 

new Chart(document.getElementById("combineinflunce"), {
  "type": "doughnut",
  "data": {
    "labels": ["Youtube", "Instagram", "Twitter"],
    "datasets": [{
      "label": "My First Dataset",
      "data": [40, 16, 14],
      "backgroundColor": ["rgb(255, 99, 132)", "rgb(75, 192, 192)", "rgb(54, 162, 235)"]
    }]
  },
  "options": {
    legend: {
      display: false
    }
  }
});


// followers char js
new Chart(document.getElementById("combinefollowers"), {
  "type": "doughnut",
  "data": {
    "labels": ["Youtube", "Instagram", "Twitter"],
    "datasets": [{
      "label": "My First Dataset",
      "data": [11, 16, 14],
      "backgroundColor": ["rgb(255, 99, 132)", "rgb(251 30 142)", "rgb(54, 162, 235)"]
    }]
  },
  "options": {
    legend: {
      display: true
    }
  }
});


// engagment rat ing chart js
new Chart(document.getElementById("combineEngr"), {
  "type": "doughnut",
  "data": {
    "labels": ["Youtube", "Instagram", "Twitter"],
    "datasets": [{
      "label": "My First Dataset",
      "data": [11, 16, 14],
      "backgroundColor": ["rgb(255, 99, 132)", "rgb(251 30 142)", "rgb(54, 162, 235)"]
    }]
  },
  "options": {
    legend: {
      display: false
    }
  }
});


// viral pitch rating chat js 
new Chart(document.getElementById("combinevpr"), {
  "type": "doughnut",
  "data": {
    "labels": ["Youtube", "Instagram", "Twitter"],
    "datasets": [{
      "label": "My First Dataset",
      "data": [11, 16, 14],
      "backgroundColor": ["rgb(255, 99, 132)", "rgb(251 30 142)", "rgb(54, 162, 235)"]
    }]
  },
  "options": {
    legend: {
      display: false
    }
  }
});