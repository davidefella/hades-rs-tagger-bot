var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var playerListSchema = new mongoose.Schema({
    starLevel: String,
    userName: String, 
    tagCounter: Number
});

playerListSchema.index({ starLevel: 1, userName: 1 }, { unique: true });


mongoose.model('Player', playerListSchema);
