// make dataset globally available
var dz;

const arrayColumn = (arr, n) => arr.map(x => x[n]);

function barplot(csv) {
    var data = d3.csvParse(csv)
    create_barplot(data);
}

function create_barplot(data) {
    
    console.dir(data);
    console.log(arrayColumn(data, "year"));

    var trace1 = {
    x: arrayColumn(data, "Name / Description"),
    y: arrayColumn(data, "Amount (EUR)"),
    type: 'bar'
    };

    var plotData = [trace1];

    Plotly.newPlot('myDiv', plotData);
}

// const arrayColumn = (arr, n) => arr.map(x => x[n]);

// d3.csv("example_data.csv", function (error, data) {
//     if (error) {
//         throw error;
//     }

//     console.dir(data);
//     // console.log(arrayColumn(data, "year"));

//     var trace1 = {
//     x: arrayColumn(data, "Name / Description"),
//     y: arrayColumn(data, "Amount (EUR)"),
//     type: 'bar'
//     };

//     var plotData = [trace1];

//     Plotly.newPlot('myDiv', plotData);
// });