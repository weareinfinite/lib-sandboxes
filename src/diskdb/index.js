const path = require('path');
let db = require('diskdb');

db = db.connect(path.join(__dirname, 'data'), ['names']);


// SAVE DATA
const me = {
    title: 'Sarath',
    first_name: 'Sarath',
    last_name: 'TK'
}

db.names.save(me);

// READ FROM COLLECTION

const names = db.names.find();

console.log(names)