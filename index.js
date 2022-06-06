const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const chalk = require('chalk');
const mysql = require('mysql');

const sql = mysql.createConnection(config.sql.authdata);

sql.connect(err => {
    if (err) {
        console.error(chalk.red(`Error connecting to database: ${err.stack}`));
        return;
    }
    console.log(chalk.green(`Connected to database: ${config.sql.authdata.database}`));
});

const log = console.log;

const config = require('./config.json');

app.listen(config.port, () => {
    log(chalk.green(`Server started on port ${config.port}`));
});

app.get('/', (req, res) => {

});