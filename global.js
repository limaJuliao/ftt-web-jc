var mortesLabel = [], estadosLabel = []



async function chartData() {
    await getData()



    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: estadosLabel,
            datasets: [{
                label: 'Mortes',
                data: mortesLabel,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1
            }]
        },
        ooptions: {
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
            scales: {
                y: { // defining min and max so hiding the dataset does not change scale range
                    min: 0,
                    max: 100
                }
            }
        }
    });
}
chartData()

async function getData() {
    const apiUrl = "https://covid19-brazil-api.vercel.app/api/report/v1"


    const response = await fetch(apiUrl)
    const barChartData = await response.json()



    const estados = barChartData.data.map((x) => x.state)
    const mortes = barChartData.data.map((x) => x.deaths)



    mortesLabel = mortes
    estadosLabel = estados
}



getData()