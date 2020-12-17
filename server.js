const dgram = require('dgram');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const env = require('./env');

const server = dgram.createSocket('udp4')

server.on('message', (sms, remoteInfo) => {
    console.log(`--- sms from ${remoteInfo.address + remoteInfo.port}:\n${sms}`);
});

server.bind(env.server.port);


rl.on('line', (sms) => {
    server.send(sms, env.client.port, env.host);
})

