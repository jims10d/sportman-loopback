'use strict';

var app = require('../server');
   
var messages = [ // kecils
  {
    date: '4/11/2018',
    sender: 'asdfg',
    receiver: 'qwerty',
    sender_name: 'asdfg',
    receiver_name: 'qwerty',
    id: 'm1231231',
    room_id: 'R123131',
    content: 'sdfsdfsdfs5',
    read: '',
    readStatus: 'false',
    sender_photo: '',
    receiver_photo: '',
    newMsgCount: '5'
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

// var app = require('../server');

// var matches = [ // kecils
//   {
//     match_name: 'Mqqfdfeergdfgsddfsdfsdwe',
//     match_venue: 'asdaerersdasd',
//     match_time: '',
//     match_countDown: '',
//     match_length: '',
//     match_break: '',
//     match_date: '',
//     match_referee: '',
//     match_homeTeam: '',
//     match_awayTeam: '',
//     match_homeTeamObj: '',
//     match_awayTeamObj: '',
//     match_fixture: '',
//     match_number: '',
//     match_started: '',
//     timer_status: '',
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