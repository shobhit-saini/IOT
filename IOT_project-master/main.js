// const Plotly = require('plotly')


let url="http://localhost:8000/temp";


function rand() {
        return Math.random();
}
let time = new Date();
let data = [{
        x:[time],
        y:[0],
        mode: 'lines',
        line: {color: '#80CAF6'}
}]

Plotly.plot('graph', data);
let cnt = 0;

setInterval(function(){
    fetch(url).then(response => response.json())
    .then( (result) => {
        let time = new Date();

        let update = {
                x:  [[time]],
                y: [[Number(result)]]
        }
        Plotly.extendTraces('graph', update, [0]) 
    })
    .catch(error => console.log('error:', error));
},3000)



