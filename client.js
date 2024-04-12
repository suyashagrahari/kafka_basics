const {Kafka} = require("kafkajs");

exports.kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['172.22.31.225:9092'],
  })


//   below document is kafka setting things 
//   https://gist.github.com/piyushgarg-dev/32cadf6420c452b66a9a6d977ade0b01 