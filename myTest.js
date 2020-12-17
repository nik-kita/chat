const { stdin, stdout } = require('process');

const rl = require('readline').createInterface(
    {
        input: stdin,
        output: stdout
    }
);

rl.on('line', (cmd) => {
    console.log(cmd);
});
