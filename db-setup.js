var sqlite  = require('sqlite');

sqlite.open('./db.sqlite').then(function() {
  sqlite.migrate({force: 'last'});
}).catch(function(err) {
  console.error(err.stack)
});
