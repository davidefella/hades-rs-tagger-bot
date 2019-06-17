var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://admin:password1@ds125352.mlab.com:25352/hadesrsbot");

require('../model/player.server.model.js');

var Player = require('mongoose').model("Player");

exports.addPlayerToRsList = function (msg, starLevel, rst_bot) {
    var user = msg.from.username;

    var player2Add = new Player({ starLevel: starLevel, userName: user, tagCounter: 0 });

    if (user == undefined || user == null) {
        rst_bot.sendMessage(msg.chat.id.toString(), "Errore: username telegram non definito!");

    } else

        player2Add.save()
            .then(item => {
                rst_bot.sendMessage(msg.chat.id.toString(), "@" + user + " sei stato aggiunto alla lista dei player rs" + starLevel + "!");
            })
            .catch(err => {

                if (err.name === 'MongoError' && err.code === 11000) {
                    // Duplicate username
                    rst_bot.sendMessage(msg.chat.id.toString(), "User already exist for this Red Star!");

                }
                else

                    rst_bot.sendMessage(msg.chat.id.toString(), "Error: " + err);
            });
};

exports.getPlayersList = function (starLevel, result) {

    Player.find({ starLevel: starLevel }, { "userName": 1, "_id": 0 }, function (err, players) {
        if (err) {

            console.log("Error: " + err);

            result(null, err);

        } else {

            result(players, null);
        }
    })
};


exports.incrementTagCounter = function (userName, starLevel) {

    Player.findOne({ userName: userName, starLevel: starLevel }, function (err, result) {
        if (err) {

            console.log("Error: " + err);

            result(null, err);

        } else {
            result.tagCounter = result.tagCounter + 1;

            result.save(function (err) {
                if (err) {
                    return result(err);
                } else {
                    console.log("Tag counter incrementato a " + result.tagCounter + " per utente: " + userName);

                }
            });

        }
    });

};


exports.aboutPlayer = function (userName, result) {

    if (userName == undefined || userName == null)
        result(null, "username telegram non definito!");
    else
        Player.find({ userName: userName }, { "_id": 0, "__v": 0 }, function (err, player) {
            if (err) {

                console.log("Error: " + err);

                result(null, err);

            } else {

                result(player, null);
            }
        });

};


exports.removePlayerFromList = function (userName, starLevel, result) {

    if (userName == undefined || userName == null)
        result(null, "username telegram non definito!");
    else
        Player.deleteOne({ userName: userName, starLevel: starLevel }, function (err) {
            if (err) {

                console.log("Error: " + err);

                result(null, err);

            } else {

                result("Ok", null);
            }
        });

};


