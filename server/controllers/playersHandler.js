var commonFunctions = require('./common-functions.js');

exports.sendPlayersList = function (msg, starLevel, rst_bot) {

    commonFunctions.getPlayersList(starLevel, function (res, err) {

        if (err) {
            console.log("Err: " + err);

            rst_bot.sendMessage(msg.chat.id.toString(), "Error: " + err);

        } else {

            res.forEach(function (element) {

                rst_bot.sendMessage(msg.chat.id.toString(), element.userName + " ");

            });
        }
    });
};


exports.addPlayerToRsList = function (msg, starLevel, rst_bot) {

    commonFunctions.addPlayerToRsList(msg, starLevel, rst_bot);

};

exports.tagPlayersList = function (msg, starLevel, rst_bot) {
    commonFunctions.getPlayersList(starLevel, function (res, err) {

        if (err) {
            console.log("Err: " + err);

            rst_bot.sendMessage(msg.chat.id.toString(), "Error: " + err);

        } else {

            rst_bot.sendMessage(msg.chat.id.toString(), "RS " + starLevel + " a breve?");

            res.forEach(function (element) {

                if (element.userName != msg.from.username) {
                    rst_bot.sendMessage(msg.chat.id.toString(), "@" + element.userName);

                } else {

                    commonFunctions.incrementTagCounter(element.userName, starLevel);
                }
            });
        }
    });
}; 

exports.aboutPlayer = function (msg, rst_bot) {

    commonFunctions.aboutPlayer(msg.from.username, function (player, err) {

        if (err) {
            console.log("Err: " + err);

            rst_bot.sendMessage(msg.chat.id.toString(), "Error: " + err);

        } else {
            rst_bot.sendMessage(msg.chat.id.toString(), msg.from.username + " ecco le tue info:");

            rst_bot.sendMessage(msg.chat.id.toString(), player.toString());
        }
    });
}


exports.removePlayerFromList = function (msg, starLevel, rst_bot) {

    //userName, starLevel, result
    commonFunctions.removePlayerFromList(msg.from.username, starLevel, function (result, err) {

        if (err) {
            console.log("Err: " + err);

            rst_bot.sendMessage(msg.chat.id.toString(), "Error: " + err);

        } else {

            rst_bot.sendMessage(msg.chat.id.toString(), msg.from.username + " sei stato rimosso dalla lista per RS"+starLevel);

        }
    });
}



