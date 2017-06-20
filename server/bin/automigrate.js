var app = require('../server');
 
var users = [
  {
    username: 'jims10d',
    firstname: 'jimmy',
    lastname: 'chen',
    email: 'jims10d@gmail.com',
    createdAt: new Date()
  },
  {
    username: 'vins10d',
    firstname: 'vinsmoke',
    lastname: 'sanji',
    email: 'vins10d@gmail.com',
    createdAt: new Date()
  }
];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.automigrate('user', function(err) {
  if (err) throw err;
 
  // this loads the Account model from ~/common/models/Account.json
  var User = app.models.User;
  var count = users.length;
  users.forEach(function(user) {
     // insert new records into the Account table
     User.create(user, function(err, record) {
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