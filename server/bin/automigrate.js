var app = require('../server');

var competitions = [ // kecils
  {
    id: 'COqqjjjsdsdwe',
    organizer: 'asdasdasd',
    comp_name: 'qwe',
    comp_fee: '1212',
    comp_regulation: 'sadad',
    comp_type: 'sdasd',
    comp_location: 'dsfsdf',
    comp_finish: '',
    comp_start: '',
    registeredTeam: '',
    comp_notes: '',
    comp_numOfTeam: '',
    comp_award: '',
    schedule_status: '',
    register_status: '',
    comp_status: ''
  }
];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.autoupdate('competition', function(err) { // kecil
  if (err) throw err;
 
  // this loads the Account model from ~/common/models/Account.json
  var Competition = app.models.Competition; // besar
  var count = competitions.length; // kecils
  competitions.forEach(function(competition) { // kecils kecil
     // insert new records into the Account table
     Competition.create(competition, function(err, record) { // besar kecil
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

// var app = require('../server');

// var matches = [ // kecils
//   {
//     match_name: 'Tqqsdsdwe',
//     match_venue: 'asdasdasd',
//     match_time: '',
//     match_countDown: '',
//     match_length: '',
//     match_break: '',
//     match_date: '',
//     match_referee: '',
//     match_homeTeam: '',
//     match_awayTeam: '',
//     match_fixture: '',
//     match_number: '',
//     match_started: '',
//     timer_status: '',
//     match_homeScore: '',
//     match_awayScore: '',
//     winner: '',
//     loser: '',
//     match_status: '',
//     timer: '',
//     countDownTimer: '',
//     countDownStarted: '',
//     halfTime: '',
//     fullTime: '',
//     goalHome: '',
//     goalAway: '',
//     assistHome: '',
//     assistAway: '',
//     yellowCardHome: '',
//     yellowCardAway: '',
//     redCardHome: '',
//     redCardAway: '',
//     substituteHome: '',
//     substituteAway: ''
//   }
// ];
 
// // this loads the accountDb configuration in ~/server/datasources.json
// var dataSource = app.dataSources.SportmanDb;
 
// // this automigrates the Account model 
// dataSource.autoupdate('match', function(err) { // kecil
//   if (err) throw err;
 
//   // this loads the Account model from ~/common/models/Account.json
//   var Match = app.models.Match; // besar
//   var count = matches.length; // kecils
//   matches.forEach(function(match) { // kecils kecil
//      // insert new records into the Account table
//      Match.create(match, function(err, record) { // besar kecil
//       if (err) return console.log(err);
 
//       console.log('Record created:', record);
 
//       count--;
 
//       if (count === 0) {
//         console.log('done');
//         dataSource.disconnect();
//       }
//     });
//   });
// });