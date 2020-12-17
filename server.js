const dgram = require('dgram');
const readLine = require('readline');
const env = require('./env');

const server = dgram.createSocket('udp4')

server.on('message', (sms, remoteInfo) => {
    console.log(`--- sms from ${remoteInfo.address + remoteInfo.port}:\n${sms}`);
    server.send(readLine(), env.client.port, env.host, (err) => {
        console.log(err.message);
    });
});

server.bind(env.server.port);


