const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const  articleSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    year: {type: Number, reuired: true, minimumlength: 4},
    practice: {type: String, required: true},
    claim: {type: String, required: true},
    strength: {type: String, required: true},
}, {
    timestamps: true,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;