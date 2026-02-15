const ctx = document.getElementById('caseChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Closed', 'Verified', 'Flagged'],
        datasets: [{
            data: [12, 34, 5],
            backgroundColor: [
                '#4CAF50',
                '#2196F3',
                '#F44336'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});
