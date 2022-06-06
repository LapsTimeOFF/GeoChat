const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const chalk = require('chalk');

const log = console.log;

const config = require('./config.json');

app.listen(config.port, () => {
    log(chalk.green(`Server started on port ${config.port}`));
});
