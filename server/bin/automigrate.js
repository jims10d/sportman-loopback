var app = require('../server');

var matches = [ // kecils
  {
    match_name: 'qwe',
    match_venue: 'qwe',
    match_time: 'vinsmoke',
    match_countDown: 'vinsmoke',
    match_length: 'vinsmoke@sportman.com',
    match_break: 'Player',
    match_date: 'qwe',
    match_referee: 'qwe',
    match_homeTeam: 'qwe',
    match_awayTeam: '20',
    match_fixture: 'lebak bulus',
    match_started: 'Striker,Defender',
    timer_status: '089420312340',
    match_homeScore: 'I am using sportman',
    match_awayScore: 'false',
    schedule_status: 'U1210hdkfhdds',
    timer: 'vinsmoke',
    countDownTimer: 'vinsmoke',
    countDownStarted: 'vinsmoke',
    halftime: 'vinsmoke@sportman.com',
    fulltime: 'Player',
    goalHome: 'qwe',
    goalAway: 'qwe',
    assistHome: 'qwe',
    assistAway: '20',
    yellowCardHome: 'lebak bulus',
    yellowCardAway: 'Striker,Defender',
    redCardHome: '089420312340',
    redCardAway: 'I am using sportman',
    substituteHome: 'false',
    substituteAway: 'U1210hdkfhdds'
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