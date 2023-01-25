// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
const express = require('express')
const app = express()
const port = 3000

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
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = {
    Game,
    app
}
