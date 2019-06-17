console.log("First test"); 
console.log(process.env.NODE_ENV); 


const express = require('express');
const app = express(); 

var keyStore = require("./secure/keyStore");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(keyStore.dbString);

require('./server/model/player.server.model.js');

var playersHandler = require('./server/controllers/playersHandler.js');
var appUtility = require('./server/controllers/appUtility.js');
var TelegramBot = require('node-telegram-bot-api'); 


var helpCommand = /help/;
var botInfoCommand = /info/;
var playersInfoCommand = /aboutme/;

var telegramKey = keyStore.telegramBotToken;

var rst_bot = new TelegramBot(telegramKey, { polling: true });


/* COMMON FUNCTION */
rst_bot.onText(helpCommand, function (msg) {
    appUtility.help(rst_bot, msg);
});

rst_bot.onText(botInfoCommand, function (msg) {
    appUtility.version(rst_bot, msg);
});

rst_bot.onText(playersInfoCommand, function (msg) {
    playersHandler.aboutPlayer(msg, rst_bot);
});

/**
 * 
 * Nota, onText fa match tra rgxGetPlayeRs8 (che è quello che voglio intercettare)
 * e il testo scritto sulla chat
 */

let numberStarLevel = 9;
var redStarLevel = 0; 

for (var i = 1; i <= numberStarLevel; i++) {
    rst_bot.onText(new RegExp("list".concat(i)), function (msg) {
        redStarLevel = msg.text.substr(msg.text.length-1);

        playersHandler.sendPlayersList(msg, redStarLevel, rst_bot);
    });

    rst_bot.onText(new RegExp("remove".concat(i)), function (msg) {
        redStarLevel = msg.text.substr(msg.text.length-1);

        playersHandler.removePlayerFromList(msg, redStarLevel, rst_bot);
    });

    rst_bot.onText(new RegExp("add".concat(i)), function (msg) {
        redStarLevel = msg.text.substr(msg.text.length-1);

        playersHandler.addPlayerToRsList(msg, redStarLevel, rst_bot);
    });

    rst_bot.onText(new RegExp("rs".concat(i)), function (msg) {
        redStarLevel = msg.text.substr(msg.text.length-1);

        playersHandler.tagPlayersList(msg, redStarLevel, rst_bot);
    });
}


app.get('/', (req, res) => {
    res.send({status: 'running'}); 
}); 

const PORT = process.env.PORT || 5000;
app.listen(PORT); 