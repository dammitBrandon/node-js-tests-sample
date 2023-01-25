// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
const express = require('express')
const app = express()

const { generateRandomNumber, getDate } = require('./helpers/index');

class Game {
    constructor() {
        this.id = generateRandomNumber();
        this.date = getDate();
    }
    start() {
        this.players = {
            you: 'Player 1',
            opponent: 'Player 2'
        };
    }
    getId() {
        return this.id;
    }
    stop() {
        this.players = {};
    }
}


app.get('/', (req, res) => {
    console.log('request to \'/\' received');
    res.send('Hello World!')
})

app.get('/status', (req, res) => {
    console.log('request to \'/status\' received');
    res.status(200).json({ status: 'ok' });
})

module.exports = {
    Game,
    app
}
