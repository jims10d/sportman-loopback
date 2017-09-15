var app = require('../server');

var teams = [ // kecils
  {
    team_abrName: 'T129173dfdfsdfdfd',
    team_name: 'Mangeloqwsddf',
    team_logo: 'Mangelo ajwqwqwsdfdf',
    team_manager: 'Angelyqwqwsdfdf',
    team_coach: 'Angeloqwqsdfwdfq@gmail.com',
    team_position: 'player',
    team_play: '',
    team_point: '',
    team_win: '',
    team_draw: '',
    team_lose: '',
    team_goalFor: '',
    team_goalAgainst: '',
    coach_id: '',
    invited_member: '',
    team_squad: '',
    player_request: '',
    coach_request: ''
  }
];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.autoupdate('team', function(err) { // kecil
  if (err) throw err;
 
  // this loads the Account model from ~/common/models/Account.json
  var Team = app.models.Team; // besar
  var count = teams.length; // kecils
  teams.forEach(function(team) { // kecils kecil
     // insert new records into the Account table
     Team.create(team, function(err, record) { // besar kecil
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
//     match_name: 'Mqqsddfsdfsdwe',
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
//     referee_status: '',
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