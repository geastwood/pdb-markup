var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pdb_term');

var termSchema = {
    termId: Number,
    term: String,
    frequency: Number,
    semanticRelated: Array,
    lexicalRelated: Array,
    createdAt: {type: Date, default: Date.now}
};

var Term = mongoose.model('Term', termSchema);

exports.Term = Term;
