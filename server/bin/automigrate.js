var app = require('../server');

var matches = [ // kecils
  {
    match_name: 'qqwe',
    match_venue: 'qwe',
    match_time: '12:00',
    match_countDown: '',
    match_length: '40',
    match_break: '20',
    match_date: '',
    match_referee: '',
    match_homeTeam: 'q',
    match_awayTeam: 'w',
    match_started: '',
    match_fixture: '',
    timer_status: '',
    match_homeScore: '',
    match_awayScore: '',
    winner: '',
    loser: '',
    match_status: 'firstRound',
    timer: '',
    countDownTimer: '',
    countDownStarted: '',
    halfTime: '',
    fullTime: '',
    goalHome: '',
    goalAway: '',
    assistHome: '',
    assistAway: '',
    yellowCardHome: '',
    yellowCardAway: '',
    redCardHome: '',
    redCardAway: '',
    substituteHome: '',
    substituteAway: '',
  }
];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.autoupdate('fixture', function(err) { // kecil
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