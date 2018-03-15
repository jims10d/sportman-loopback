'use strict';

var app = require('../server');

var trainings = [ // kecils
  {
    id: 'T1sdfs20jsfhsdfsajf',
    coach: 'C103jsdfijdsfssdkf',
    training_name: 'M12093iqodnadkfnsd',
    training_location: 'Uaskjfs12312312sdfs',
    training_date: '',
    training_time: '',
    team_name: 'sdfsdfsdf',
    team_id: 'sdfsdfsdfs5',
    coming: '5',
    not_coming: '5',
    unconfirmed: '5'
  }
];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.autoupdate('training', function(err) { // kecil
  if (err) throw err;
 
  // this loads the Account model from ~/common/models/Account.json
  var Training = app.models.Training; // besar
  var count = trainings.length; // kecils
  trainings.forEach(function(training) { // kecils kecil
     // insert new records into the Account table
     Training.create(training, function(err, record) { // besar kecil
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