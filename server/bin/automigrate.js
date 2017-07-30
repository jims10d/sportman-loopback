var app = require('../server');

var messages = [ // kecils
  {
    date: '29 Juli 2017',
    sender: 'jimmy',
    receiver: 'luffy',
    sender_name: 'jimmy',
    receiver_name: 'luffy',
    id: 'm007',
    content: 'hello luffy',
    read: '',
    readStatus: 'false',
    photo: ''
  }
];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.autoupdate('message', function(err) { // kecil
  if (err) throw err;
 
  // this loads the Account model from ~/common/models/Account.json
  var Message = app.models.Message; // besar
  var count = messages.length; // kecils
  messages.forEach(function(message) { // kecils kecil
     // insert new records into the Account table
     Message.create(message, function(err, record) { // besar kecil
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