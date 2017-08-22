var app = require('../server');

var users = [ // kecils
  {
    id: 'U1210hdkfhdds',
    username: 'vinsmoke',
    fullname: 'vinsmoke',
    password: 'vinsmoke',
    email: 'vinsmoke@sportman.com',
    role: 'Player',
    teamInvitation: '',
    team: '',
    teamRequested: '',
    age: '20',
    address: 'lebak bulus',
    position: 'Striker,Defender',
    hp: '089420312340',
    bio: 'I am using sportman',
    profileCompleted: 'false',

  }
];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.autoupdate('user', function(err) { // kecil
  if (err) throw err;
 
  // this loads the Account model from ~/common/models/Account.json
  var User = app.models.User; // besar
  var count = competitions.length; // kecils
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