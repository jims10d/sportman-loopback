var app = require('../server');

var users = [ // kecils
  {
    id: 'U018',
    username: 'brook',
    fullname: 'brook',
    password: 'brook',
    email: 'brook@gmail.com',
    role: 'player',
    teamInvitation: 'onepiece',
    team: 'blacker'
  }
];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.autoupdate('user', function(err) { // kecil
  if (err) throw err;
 
  // this loads the Account model from ~/common/models/Account.json
  var User = app.models.User; // besar
  var count = users.length; // kecils
  users.forEach(function(user) { // kecils kecil
     // insert new records into the Account table
     User.create(user, function(err, record) { // besar kecil
      if (err) return console.log(err);
 
      console.log('Record created:', record);
 
      count--;
 
      if (count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
    });
  });
});