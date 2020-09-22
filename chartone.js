var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Followers',
            data: [120050, 120050, 120500, 130000, 130050, 140000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 99, 132, 0.8)',
            ],
            borderColor: [
                'rgba(150, 150, 0, 0)',
            ],
            borderWidth: 1
        }]
    },
    
    options: {
        

        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
					display: true,
					drawBorder: true,
					drawOnChartArea: false,}
            }],
            yAxes: [{
                gridLines: {
					display: true,
					drawBorder: true,
					drawOnChartArea: false,}
            }],
        }
    }
});




var ctxt = document.getElementById('myChartt').getContext('2d');
var myChartt = new Chart(ctxt, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Post',
            data: [2, 4, 5, 5, 9, 10],
            backgroundColor: [
                'rgba(255, 0, 50, 0.5)',
                'rgba(255, 0, 0, 0.0)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0)'
            ],
            borderWidth: 2
        }]
    },

    options: {
        gridLines: {
            display: true,
            drawBorder: true,
            drawOnChartArea: false
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
					display: true,
					drawBorder: true,
					drawOnChartArea: false,}
            }],
            yAxes: [{
                gridLines: {
					display: true,
					drawBorder: true,
					drawOnChartArea: false,}
            }],
        }
    }
});