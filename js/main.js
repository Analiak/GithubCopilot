window.onload = function() {
    document.getElementById('download').addEventListener('click', function() {
    var canvas = document.getElementById('myChart');
    var image = canvas.toDataURL('image/png');
    var link = document.createElement('a');
    link.href = image;
    link.download = 'myChart.png';
    link.click();
});
    var ctx = document.getElementById('myChart').getContext('2d');
    
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'income',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                
                borderWidth: 1
            },
            {
                label: 'expenses',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                
                borderWidth: 1
                
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
document.getElementById('chart-tab').addEventListener('click', function() {
// January
let januaryIncome = document.getElementById('january-income').value;
let januaryExpenses = document.getElementById('january-expenses').value;
//february
let februaryIncome = document.getElementById('february-income').value;
let februaryExpenses = document.getElementById('february-expenses').value;
// March
let marchIncome = document.getElementById('march-income').value;
let marchExpenses = document.getElementById('march-expenses').value;
// April
let aprilIncome = document.getElementById('april-income').value;
let aprilExpenses = document.getElementById('april-expenses').value;
// May
let mayIncome = document.getElementById('may-income').value;
let mayExpenses = document.getElementById('may-expenses').value;
// June
let juneIncome = document.getElementById('june-income').value;
let juneExpenses = document.getElementById('june-expenses').value;
// July
let julyIncome = document.getElementById('july-income').value;
let julyExpenses = document.getElementById('july-expenses').value;
// August
let augustIncome = document.getElementById('august-income').value;
let augustExpenses = document.getElementById('august-expenses').value;
// September
let septemberIncome = document.getElementById('september-income').value;
let septemberExpenses = document.getElementById('september-expenses').value;
// October
let octoberIncome = document.getElementById('october-income').value;
let octoberExpenses = document.getElementById('october-expenses').value;
// November
let novemberIncome = document.getElementById('november-income').value;
let novemberExpenses = document.getElementById('november-expenses').value;
// December
let decemberIncome = document.getElementById('december-income').value;
let decemberExpenses = document.getElementById('december-expenses').value;

let incomeData = [januaryIncome, februaryIncome, marchIncome, aprilIncome, mayIncome, juneIncome, julyIncome, augustIncome, septemberIncome, octoberIncome, novemberIncome, decemberIncome] .map(Number);
let expensesData = [januaryExpenses, februaryExpenses, marchExpenses, aprilExpenses, mayExpenses, juneExpenses, julyExpenses, augustExpenses, septemberExpenses, octoberExpenses, novemberExpenses, decemberExpenses] .map(Number);
myChart.data.datasets[0].data = incomeData;
myChart.data.datasets[1].data = expensesData;

myChart.update();
});
};