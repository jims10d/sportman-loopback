var app = require('../server');

var matches = [ // kecils
  {
    match_name: 'SFC',
    match_venue: 'Spirit FC',
    match_time: '08:00',
    match_date: '29 Juli 2017',
    match_referee: 'sdfsfs',
    match_homeTeam: 'qwerty',
    match_awayTeam: 'asdfg',
    match_fixture: '10',
    match_started: 'false',
  }
];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.autoupdate('match', function(err) { // kecil
  if (err) throw err;
 
  // this loads the Account model from ~/common/models/Account.json
  var Match = app.models.Match; // besar
  var count = matches.length; // kecils
  matches.forEach(function(match) { // kecils kecil
     // insert new records into the Account table
     Match.create(match, function(err, record) { // besar kecil
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