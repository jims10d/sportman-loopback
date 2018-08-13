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
//     id: 'U0qweaoidfasdfssdfsdfsdwe',
//     username: 'organizersdf92479112857',
//     fullname: 'organizesdfr92479112857',
//     password:'Organizersdf92479181257',
//     email: 'organizer9sdf2479112857@gmail.com',
//     role: 'Organizer',
//     photo: '',
//     createdCompetition: '',
//     referee_rating: '',
//     teamInvitation:'',
//     team: '',
//     teamRequested: '',
//     ktp: '12391247192476942',
//     age: '',
//     dateOfBirth: '',
//     address:'',
//     position: '',
//     shirtNumber: '',
//     hp: '',
//     profileCompleted:'',
//     play: '',
//     goal: '',
//     assist: '',
//     yellowCard: '',
//     redCard:'',
//     redCardGiven: '',
//     yellowCardGiven: '',
//     matchManaged: '',
//     availableDayAndTime: '',
//     bookedDate: ''
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

// var app = require('../server');

// var matches = [ // kecils
//   {
//     id: 'Matasdasda924',
//     match_name: 'QWE12dsd2',
//     match_venue: 'Planet Futsal',
//     match_field: '1',
//     match_time: '15:00',
//     match_countDown:'60',
//     match_length: '50',
//     match_break: '10',
//     match_date: '29/06/2018',
//     match_referee:'Mark Johnson',
//     match_refereeObj: '',
//     match_analyst:'Andrew Lint',
//     match_homeTeam: 'Portugal',
//     match_awayTeam: 'Argentina',
//     match_eventNumber: '0',
//     match_homeTeamObj: '',
//     match_awayTeamObj: '',
//     match_fixture:'3',
//     match_number: '1',
//     match_started: 'true',
//     fixture_break: '1',
//     timer_status: 'false',
//     match_winner:'',
//     match_loser: '',
//     match_pair: '',
//     match_group: '',
//     match_status: '',
//     live_status: 'false',
//     timer:'',
//     countDownTimer: '',
//     countDownStarted: '',
//     ballPossession: '',
//     match_stats: '',
//     halfTime: '',
//     fullTime: '',
//     referee_status: '',
//     match_events: '',
//     goalHome: '',
//     goalAway:'',
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

// var app = require('../server');

// var classements = [ // kecils
//   {
//     id: 'CL2939ajsdadh123',
//     position: '1',
//     team: 'Argentina',
//     group:'D',
//     play: '3',
//     win: '3',
//     draw: '0',
//     lose:'0',
//     goalDifference: '+10',
//     points: '9',
//     status: 'Winner'
//   }
// ];
 
// // this loads the accountDb configuration in ~/server/datasources.json
// var dataSource = app.dataSources.SportmanDb;
 
// // this automigrates the Account model 
// dataSource.autoupdate('classement', function(err) { // kecil
//   if (err) throw err;
 
//   // this loads the Account model from ~/common/models/Account.json
//   var Classement = app.models.Classement; // besar
//   var count = classements.length; // kecils
//   classements.forEach(function(classement) { // kecils kecil
//      // insert new records into the Account table
//      Classement.create(classement, function(err, record) { // besar kecil
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

var competitions = [ // kecils
  {
    id: 'CO2939fsdffdfdfsdvdadh123asdadasd',
    organizer: 'John Stone',
    comp_name: 'Unknown League',
    comp_fee:'Free',
    comp_regulation: '',
    comp_type: 'GroupStage',
    comp_location: 'Etihad Stadium',
    comp_address: '',
    comp_finish:'',
    comp_start: '',
    comp_notes: '',
    comp_numOfTeam: '12',
    comp_award: '',
    schedule_status: '',
    classement_status: '',
    register_status: '',
    comp_status: '',
    fixture_break: '1'
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
   
// var fixtures = [ // kecils
//   {
//     fixture_number: '1',
//     fixture_matches: '',
//     fixture_status: 'on progress',
//     allMatchFilled: 'false'
//   }
// ];
 
// // this loads the accountDb configuration in ~/server/datasources.json
// var dataSource = app.dataSources.SportmanDb;
 
// // this automigrates the Account model 
// dataSource.autoupdate('fixture', function(err) { // kecil
//   if (err) throw err;
 
//   // this loads the Account model from ~/common/models/Account.json
//   var Fixture = app.models.Fixture; // besar
//   var count = fixtures.length; // kecils
//   fixtures.forEach(function(fixture) { // kecils kecil
//      // insert new records into the Account table
//      Fixture.create(fixture, function(err, record) { // besar kecil
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
   
// var teams = [ // kecils
//   {
//     team_abrName: 'abc',
//     team_name: 'ABC FC',
//     team_logo: '',
//     team_manager: 'manager10101010101',
//     team_coach: 'coach10101010101',
//     team_position: '10',
//     team_play: '10',
//     team_point: '10',
//     team_win: '3',
//     team_draw: '1',
//     team_lose: '6',
//     team_goalFor: '10',
//     team_goalAgainst: '10',
//     coach_id: 'Co10281970317',
//     invited_members: '',
//     invited_member: '',
//     team_squad: '',
//     player_request: '',
//     coach_request: '',
//     availableJerseyNumber: ''
//   }
// ];
 
// // this loads the accountDb configuration in ~/server/datasources.json
// var dataSource = app.dataSources.SportmanDb;
 
// // this automigrates the Account model 
// dataSource.autoupdate('team', function(err) { // kecil
//   if (err) throw err;
 
//   // this loads the Account model from ~/common/models/Account.json
//   var Team = app.models.Team; // besar
//   var count = teams.length; // kecils
//   teams.forEach(function(team) { // kecils kecil
//      // insert new records into the Account table
//      Team.create(team, function(err, record) { // besar kecil
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