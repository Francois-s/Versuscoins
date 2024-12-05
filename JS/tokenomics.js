document.addEventListener("DOMContentLoaded", function() {
    const tokenomicsContainer = document.querySelector('.tokenomics-container');
    tokenomicsContainer.classList.remove('hidden');

    const ctx = document.querySelector('.pie-chart').getContext('2d');
    const data = {
        labels: ['Bleu clair', 'Turquoise', 'Jaune', 'Orange'],
        datasets: [{
            data: [20, 30, 25, 25],
            backgroundColor: ['#8ECAE6', '#219EBC', '#FFB703', '#FB8500'],
            hoverBackgroundColor: ['#8ECAE6', '#219EBC', '#FFB703', '#FB8500']
        }]
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: true,
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true
            }
        }
    };

    const pieChart = new Chart(ctx, config);

    document.querySelectorAll('.legend-item').forEach(item => {
        item.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            const newData = pieChart.data.datasets[0].backgroundColor.map(bgColor => bgColor === color ? '#023047' : bgColor);
            pieChart.data.datasets[0].backgroundColor = newData;
            pieChart.update();
        });
    });
});
