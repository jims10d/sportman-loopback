'use strict';

// var app = require('../server');
   
// var messages = [ // kecils
//   {
//     date: '4/11/2018',
//     sender: 'asdfg',
//     receiver: 'qwerty',
//     sender_name: 'asdfg',
//     receiver_name: 'qwerty',
//     id: 'm1231231',
//     room_id: 'R123131',
//     content: 'sdfsdfsdfs5',
//     read: '',
//     readStatus: 'false',
//     sender_photo: '',
//     receiver_photo: '',
//     newMsgCount: '5'
//   }
// ];
 
// // this loads the accountDb configuration in ~/server/datasources.json
// var dataSource = app.dataSources.SportmanDb;
 
// // this automigrates the Account model 
// dataSource.autoupdate('message', function(err) { // kecil
//   if (err) throw err;
 
//   // this loads the Account model from ~/common/models/Account.json
//   var Message = app.models.Message; // besar
//   var count = messages.length; // kecils
//   messages.forEach(function(message) { // kecils kecil
//      // insert new records into the Account table
//      Message.create(message, function(err, record) { // besar kecil
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

// var app = require('../server');

// var ratings = [ // kecils
//   {
//     id: 'Mqqfdfeergdfffdfgsddfsdsdffsdffsdwe',
//     id_competition: 'asdaerersddfgdfgasd',
//     id_match: '',
//     home_teamObj: {
//       referee_rating: {
//         referee_name: 'refs111',
//         fairness: 5,
//         discipline: 4,
//         decision: 2
//       },
//       player_rating: {
//         player_name: 'player121,player234',
//         player_rating: '10,8'
//       }
//     },
//     away_teamObj: ''
//   }
// ];
 
// // this loads the accountDb configuration in ~/server/datasources.json
// var dataSource = app.dataSources.SportmanDb;
 
// // this automigrates the Account model 
// dataSource.autoupdate('rating', function(err) { // kecil
//   if (err) throw err;
 
//   // this loads the Account model from ~/common/models/Account.json
//   var Rating = app.models.Rating; // besar
//   var count = ratings.length; // kecils
//   ratings.forEach(function(rating) { // kecils kecil
//      // insert new records into the Account table
//      Rating.create(rating, function(err, record) { // besar kecil
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

// var app = require('../server');

// var users = [ // kecils
//   {
//     id: 'Mqqfdfeergdfffdfgsddfsdsdffsdffsdwe',
//     username: 'tester20',
//     fullname: 'tester20',
//     password:'Tester20',
//     email: 'tester20@gmail.com',
//     role: 'Player',
//     photo: '',
//     teamInvitation:'',
//     team: '',
//     teamRequested: '',
//     ktp: '12391247192476942',
//     age: '',
//     address:'',
//     position: '',
//     hp: '',
//     bio: '',
//     profileCompleted:'',
//     play: '',
//     goal: '',
//     assist: '',
//     yellowCard: '',
//     redCard:'',
//     redCardGiven: '',
//     yellowCardGiven: '',
//     matchManaged: ''

//   }
// ];
 
// // this loads the accountDb configuration in ~/server/datasources.json
// var dataSource = app.dataSources.SportmanDb;
 
// // this automigrates the Account model 
// dataSource.autoupdate('user', function(err) { // kecil
//   if (err) throw err;
 
//   // this loads the Account model from ~/common/models/Account.json
//   var User = app.models.User; // besar
//   var count = users.length; // kecils
//   users.forEach(function(user) { // kecils kecil
//      // insert new records into the Account table
//      User.create(user, function(err, record) { // besar kecil
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

var app = require('../server');

var matches = [ // kecils
  {
    match_name: 'QWE',
    match_venue: 'Planet Futsal',
    match_time: '15:00',
    match_countDown:'60',
    match_length: '50',
    match_break: '10',
    match_date: '29/06/2018',
    match_referee:'Mark Johnson',
    match_homeTeam: 'Portugal',
    match_awayTeam: 'Argentina',
    match_homeTeamObj: '',
    match_awayTeamObj: '',
    match_fixture:'3',
    match_number: '1',
    match_started: 'true',
    timer_status: 'false',
    winner:'',
    loser: '',
    match_pair: '',
    match_group: '',
    match_status: '',
    timer:'',
    countDownTimer: '',
    countDownStarted: '',
    halfTime: '',
    fullTime: '',
    referee_status: '',
    goalHome: '',
    goalAway:'',
    assistHome: '',
    assistAway: '',
    yellowCardHome: '',
    yellowCardAway: '',
    redCardHome: '',
    redCardAway: '',
    substituteHome: '',
    substituteAway: ''
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