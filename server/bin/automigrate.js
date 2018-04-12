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

var app = require('../server');

var ratings = [ // kecils
  {
    id: 'Mqqfdfeergdfffdfgsddfsdfsdwe',
    id_competition: 'asdaerersddfgdfgasd',
    id_match: '',
    home_teamObj: {
      referee_rating: {
        referee_name: 'refs111',
        fairness: 5,
        discipline: 4,
        decision: 2
      },
      player_rating: {
        players: {
          player_name: 'player121',
          player_rating: 8
        },
        players: {
          player_name: 'player1dfd21',
          player_rating: 9
        }
      }
    },
    away_teamObj: ''
  }
];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.autoupdate('rating', function(err) { // kecil
  if (err) throw err;
 
  // this loads the Account model from ~/common/models/Account.json
  var Rating = app.models.Rating; // besar
  var count = ratings.length; // kecils
  ratings.forEach(function(rating) { // kecils kecil
     // insert new records into the Account table
     Rating.create(rating, function(err, record) { // besar kecil
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