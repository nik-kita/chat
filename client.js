const dgram = require('dgram');
const readLine = require('readline');
const settings = require('./env');

const client = dgram.createSocket('udp4');

client.on('message', (sms, remoteInfo) => {
    console.log(`--- sms from ${remoteInfo.address + remoteInfo.port}:\n${sms}`);
    server.send(readLine(), env.server.port, env.host, (err) => {
        console.log(err.message);
    });
});

client.bind(env.client.port);