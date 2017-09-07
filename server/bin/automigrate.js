var app = require('../server');

var trainings = [ // kecils
  {
    id: 'Tqqsdsdwe',
    coach: '12',
    training_name: 'asdads',
    training_location: 'gf',
    training_date: '24 aug 2017',
    training_time: '20:00',
    acceptedPlayer: '',
    deniedPlayer: ''
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