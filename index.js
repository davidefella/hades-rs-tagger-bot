/*var express = require("express");
var port = 3000;
const PORT = process.env.PORT || 5000*/


//var app = express().listen(PORT, () => console.log(`Listening on ${PORT}`));


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://admin:password1@ds125352.mlab.com:25352/hadesrsbot");

require('./server/model/player.server.model.js');

var Player = require('mongoose').model("Player");

//var commonFunctions = require('./server/controllers/common-functions.js');
var playersHandler = require('./server/controllers/playersHandler.js');
var appUtility = require('./server/controllers/appUtility.js');
var helpCommand = /help/;
var botInfoCommand = /info/;
var playersInfoCommand = /aboutme/;

var telegramKey = "629354550:AAEkcUAsRM2yx-HN3qdAQEf1AVrK7ULAgSo";

var TelegramBot = require('node-telegram-bot-api'),
    rst_bot = new TelegramBot(telegramKey, { polling: true });


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

for (var i = 1; i <= numberStarLevel; i++) {
    rst_bot.onText(new RegExp("list".concat(i)), function (msg) {
        var redStarLevel = msg.text.substr(msg.text.length);

        playersHandler.sendPlayersList(msg, redStarLevel, rst_bot);
    });

    rst_bot.onText(new RegExp("remove".concat(i)), function (msg) {
        var redStarLevel = msg.text.substr(msg.text.length);

        playersHandler.removePlayerFromList(msg, redStarLevel, rst_bot);
    });

    rst_bot.onText(new RegExp("add".concat(i)), function (msg) {
        var redStarLevel = msg.text.substr(msg.text.length);

        playersHandler.addPlayerToRsList(msg, redStarLevel, rst_bot);
    });

    rst_bot.onText(new RegExp("rs".concat(i)), function (msg) {
        var redStarLevel = msg.text.substr(msg.text.length);

        playersHandler.tagPlayersList(msg, redStarLevel, rst_bot);
    });

}