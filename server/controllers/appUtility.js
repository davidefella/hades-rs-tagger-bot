var info = "Author: Davide aka The Dvidi (thedvidi@gmail.com)\r\nBot version: 1.1";

var helpMessage = 
    "** Comandi disponibili (tranne che per /rs che tagga i giocatori, puoi darmi i comandi anche in chat privata) ** \r\n  \r\n" +
    "NOTA: Per usare alcune funzioni del BOT devi avere username telegram impostato!  \r\n \r\n"+
    "/add4, /add5, /add6, /add7, /add8, /add9  --> Aggiunge alla lista  \r\n" +
    "/remove4, /remove5, /remove6, /remove7, /remove8, /remove9  --> Rimuove dalla lista  \r\n" +
    "/rs4, /rs5, /rs6, /rs7, /rs8. /rs9  -->  Tag per tutti i giocatori della lista \r\n" +
    "/list4, /list5, /list6, /list7, /list8, /list9 --> Tutti i giocatori ma senza taggare \r\n" +
    "/info --> Informazioni sul Bot \r\n" + 
    "/aboutme --> Le tue informationi memorizzate"; 

exports.help = function (rst_bot, msg) {

    rst_bot.sendMessage(msg.chat.id.toString(), helpMessage);

};

exports.version = function (rst_bot, msg) {

    rst_bot.sendMessage(msg.chat.id.toString(), info);

}; 