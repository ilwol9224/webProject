var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
  title: {type: String, required: true, trim: true},
  content: {type: String, required: true, trim: true},
  // quest: {type: String, required: true, trim: true},
  // category: {type: String, trim: true},
  // user: {type: Schema.Types.ObjectId, index: true, required: true}
}, {
  toJSON: {
    virtuals: true },
    toObject: {virtuals: true}
});

var Survey = mongoose.model('Survey', schema);

module.exports = Survey;
