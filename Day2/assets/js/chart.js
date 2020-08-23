// $.getJSON('https://covid19.bandarlampungkota.go.id/api/',function(data){
    // const json = data;
    



var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Maret','Agustus'],
        datasets: [{
        label: 'Positif',
        backgroundColor: 'rgb(225, 99, 132)',
        borderColor: 'rgb(225, 99, 132)',
        data: [0,142],
        fill: false,
        borderWidth :3
},{
        label: 'Meninggal',
        backgroundColor: 'rgb(255, 225,0 )',
        borderColor: 'rgb(255, 225, 0)',
        data: [0,8],
        fill: false,
        borderWidth :3 
},{
        label: 'Sembuh',
        backgroundColor: 'rgb(0, 225,0 )',
        borderColor: 'rgb(0, 225, 0)',
        data: [0,47],
        fill: false,
        borderWidth :3 
}]

},

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: 'Grafik COVID19 Bandar Lampung'
        },
    }
});
// });