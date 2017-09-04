var app = require('../server');

var classements = [ // kecils
  {
    id: 'CLqqwe',
    position: '12',
    team: 'asdads',
    play: '1',
    win: '40',
    draw: '20',
    lose: '12',
    goalDifference: '12',
    points: '12'
  }
];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.autoupdate('classement', function(err) { // kecil
  if (err) throw err;
 
  // this loads the Account model from ~/common/models/Account.json
  var Classement = app.models.Classement; // besar
  var count = classements.length; // kecils
  classements.forEach(function(classement) { // kecils kecil
     // insert new records into the Account table
     Classement.create(classement, function(err, record) { // besar kecil
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