#!/usr/bin/env python3

const mqtt = require('mqtt')

let seed = 1;

function rand(){
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

let client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function(){
    
    setInterval(function(){
        let random = (rand()*100).toString()
        client.publish('Topic07',random)
    },3000); 
    console.log("hi");
});
