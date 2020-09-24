var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Nano Influnecers', 'Micro Influnecers', 'Macro Influnecers', 'Mega Celebrities', 'Giga Celebrities', 'Tera Celebrities'],
        datasets: [{
            label: '# of Influnecers',
            data: [12, 19, 3, 5, 8, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
        legend: {
            display: false,
        },

    }

});


new Chart(document.getElementById("myChartaaa"), {
    "type": "doughnut",
    "data": {
        "labels": ["Male", "Female"],
        "datasets": [{
            "label": "Gender of Influncer",
            "data": [300, 50],
            "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)"]
        }]
    },
    "options": {
        "legend": {
            "display": true,
            "position": 'bottom'
        }
    }
});

