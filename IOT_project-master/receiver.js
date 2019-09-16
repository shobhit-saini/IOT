const mqtt = require('mqtt')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
let temperature

let client  = mqtt.connect("mqtt://test.mosquitto.org");
console.log("connected flag  "+client.connected);
client.on("connect",function(){	
        client.subscribe('Topic07');
        console.log('client has subscribed successfully');
        client.on('message', function (topic, message){
            console.log(message.toString()); 
            temperature = message.toString();//if toString is not given, the message comes as buffer
          });
});

app.get('/temp', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.write(temperature)
  res.end()
})

app.listen(8000)