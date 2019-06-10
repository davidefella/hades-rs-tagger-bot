var express = require("express");
var port = 3000;
const PORT = process.env.PORT || 5000


var app = express().listen(PORT, () => console.log(`Listening on ${ PORT }`));


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://admin:password1@ds125352.mlab.com:25352/hadesrsbot");

require('./server/model/player.server.model.js');

var Player = require('mongoose').model("Player");

var commonFunctions = require('./server/controllers/common-functions.js');
var playersHandler = require('./server/controllers/playersHandler.js');
var appUtility = require('./server/controllers/appUtility.js');

var rsLevelStar4 = /4/; 
var rsLevelStar5 = /5/; 
var rsLevelStar6 = /6/; 
var rsLevelStar7 = /7/;
var rsLevelStar8 = /8/; 
var rsLevelStar9 = /9/; 

var rs = /rs/; 
var addPlayer2List= /add/; 
var removePlayerFromList= /remove/; 
var getPlayersRsList = /list/; 
var helpCommand = /help/; 
var botInfoCommand = /info/; 
var playersInfoCommand = /aboutme/; 


var rgxRs4 = new RegExp(rs.source+rsLevelStar4.source);
var rgxRs5 = new RegExp(rs.source+rsLevelStar5.source);
var rgxRs6 = new RegExp(rs.source+rsLevelStar6.source);
var rgxRs7 = new RegExp(rs.source+rsLevelStar7.source);
var rgxRs8 = new RegExp(rs.source+rsLevelStar8.source);
var rgxRs9 = new RegExp(rs.source+rsLevelStar9.source);

var rgxAddPlayer4 = new RegExp(addPlayer2List.source+rsLevelStar4.source);
var rgxAddPlayer5 = new RegExp(addPlayer2List.source+rsLevelStar5.source);
var rgxAddPlayer6 = new RegExp(addPlayer2List.source+rsLevelStar6.source);
var rgxAddPlayer7 = new RegExp(addPlayer2List.source+rsLevelStar7.source);
var rgxAddPlayer8 = new RegExp(addPlayer2List.source+rsLevelStar8.source);
var rgxAddPlayer9 = new RegExp(addPlayer2List.source+rsLevelStar9.source);

var rgxGetPlayeRs4 = new RegExp(getPlayersRsList.source+rsLevelStar4.source);
var rgxGetPlayeRs5 = new RegExp(getPlayersRsList.source+rsLevelStar5.source);
var rgxGetPlayeRs6 = new RegExp(getPlayersRsList.source+rsLevelStar6.source);
var rgxGetPlayeRs7 = new RegExp(getPlayersRsList.source+rsLevelStar7.source);
var rgxGetPlayeRs8 = new RegExp(getPlayersRsList.source+rsLevelStar8.source);
var rgxGetPlayeRs9 = new RegExp(getPlayersRsList.source+rsLevelStar9.source);

var rgxRemovePlayerRs4 = new RegExp(removePlayerFromList.source+rsLevelStar4.source);
var rgxRemovePlayerRs5 = new RegExp(removePlayerFromList.source+rsLevelStar5.source);
var rgxRemovePlayerRs6 = new RegExp(removePlayerFromList.source+rsLevelStar6.source);
var rgxRemovePlayerRs7 = new RegExp(removePlayerFromList.source+rsLevelStar7.source);
var rgxRemovePlayerRs8 = new RegExp(removePlayerFromList.source+rsLevelStar8.source);
var rgxRemovePlayerRs9 = new RegExp(removePlayerFromList.source+rsLevelStar9.source);

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
    playersHandler.aboutPlayer( msg, rst_bot); 
});


/* RS4 FUNCTIONS */
rst_bot.onText(rgxRs4, function (msg) {
    playersHandler.tagPlayersList(msg, 4, rst_bot); 
})

rst_bot.onText(rgxAddPlayer4, function (msg) {
    playersHandler.addPlayerToRsList(msg, 4, rst_bot);
});

/*rst_bot.onText(rgxGetPlayeRs4, function (msg) {
    playersHandler.sendPlayersList(msg, 4, rst_bot); 
});*/

rst_bot.onText(rgxRemovePlayerRs4, function (msg) {
    playersHandler.removePlayerFromList(msg, 4, rst_bot); 
});


/* RS5 FUNCTIONS */
rst_bot.onText(rgxRs5, function (msg) {
    playersHandler.tagPlayersList(msg, 5, rst_bot); 
})

rst_bot.onText(rgxAddPlayer5, function (msg) {
    playersHandler.addPlayerToRsList(msg, 5, rst_bot);
});

/*rst_bot.onText(rgxGetPlayeRs5, function (msg) {
    playersHandler.sendPlayersList(msg, 5, rst_bot); 
});*/

rst_bot.onText(rgxRemovePlayerRs5, function (msg) {
    playersHandler.removePlayerFromList(msg, 5, rst_bot); 
});



/* RS6 FUNCTIONS */
rst_bot.onText(rgxRs6, function (msg) {
    playersHandler.tagPlayersList(msg, 6, rst_bot); 
})

rst_bot.onText(rgxAddPlayer6, function (msg) {
    playersHandler.addPlayerToRsList(msg, 6, rst_bot);
});

/*rst_bot.onText(rgxGetPlayeRs6, function (msg) {
    playersHandler.sendPlayersList(msg, 6, rst_bot); 
});*/

rst_bot.onText(rgxRemovePlayerRs6, function (msg) {
    playersHandler.removePlayerFromList(msg, 6, rst_bot); 
});


/* RS7 FUNCTIONS */
rst_bot.onText(rgxRs7, function (msg) {
    playersHandler.tagPlayersList(msg, 7, rst_bot); 
})

rst_bot.onText(rgxAddPlayer7, function (msg) {
    playersHandler.addPlayerToRsList(msg, 7, rst_bot);
});

/*rst_bot.onText(rgxGetPlayeRs7, function (msg) {
    playersHandler.sendPlayersList(msg, 7, rst_bot); 
});*/

rst_bot.onText(rgxRemovePlayerRs7, function (msg) {
    playersHandler.removePlayerFromList(msg, 7, rst_bot); 
});


/* RS8 FUNCTIONS */
rst_bot.onText(rgxRs8, function (msg) {
    playersHandler.tagPlayersList(msg, 8, rst_bot); 
})

rst_bot.onText(rgxAddPlayer8, function (msg) {
    playersHandler.addPlayerToRsList(msg, 8, rst_bot);
});

/*rst_bot.onText(rgxGetPlayeRs8, function (msg) {
    playersHandler.sendPlayersList(msg, 8, rst_bot); 
});*/

rst_bot.onText(rgxRemovePlayerRs8, function (msg) {
    playersHandler.removePlayerFromList(msg, 8, rst_bot); 
});


/* RS9 FUNCTIONS */
rst_bot.onText(rgxRs9, function (msg) {
    playersHandler.tagPlayersList(msg, 9, rst_bot); 
})

rst_bot.onText(rgxAddPlayer9, function (msg) {
    playersHandler.addPlayerToRsList(msg, 9, rst_bot);
});

/*rst_bot.onText(rgxGetPlayeRs9, function (msg) {
    playersHandler.sendPlayersList(msg, 9, rst_bot); 
});*/

rst_bot.onText(rgxRemovePlayerRs9, function (msg) {
    playersHandler.removePlayerFromList(msg, 9, rst_bot); 
});

/**
 * 
 * Nota, onText fa match tra rgxGetPlayeRs8 (che è quello che voglio intercettare)
 * e il testo scritto sulla chat
 */

let numberStarLevel = 8; 

for(var i=1; i<=numberStarLevel; i++){
    var listRgx = new RegExp("list".concat(i)); 
    console.log(listRgx); 
 
    rst_bot.onText(listRgx, function (msg) {
        var redStarLevel = msg.text.substr(msg.text.length-1); 

        playersHandler.sendPlayersList(msg, redStarLevel, rst_bot); 

    });

}




