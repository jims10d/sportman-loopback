var app = require('../server');

var matches = [ // kecils
  {
    match_name: 'howay',
    match_venue: 'sdfs fg',
    match_time: '11:30',
    match_date: '07/31/2017',
    match_referee: 'luffy',
    match_homeTeam: 'home',
    match_awayTeam: 'away',
    match_fixture: '10',
    match_started: false,
    match_homeScore: '0',
    match_awayScore: '0',
    timer: '0',
    halfTime: false,
    fullTime: false,
    goalHome: {
      scorer: 'jims',
      time: '7'
    }
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