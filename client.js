const dgram = require('dgram');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const env = require('./env');

const client = dgram.createSocket('udp4');

client.on('message', (sms, remoteInfo) => {
    console.log(`--- sms from ${remoteInfo.address + remoteInfo.port}:\n${sms}`);
});

client.bind(env.client.port);

console.log('You may write someting to server.');

rl.on('line', (sms) => {
    client.send(sms, env.server.port, env.host);
});