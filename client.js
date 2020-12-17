const dgram = require('dgram');
const readLine = require('readline');

const client = dgram.createSocket('udp4');

client.on('message', (sms, remoteInfo) => {
    console.log(`Server got sms from ${remoteInfo.address + remoteInfo.port}:\n${sms}`);
    server.send(readLine(), 9898, '127.0.0.1', (err) => {
        console.log(err.message);
    });
});