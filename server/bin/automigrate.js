var app = require('../server');

var fixtures = [ // kecils
  {
    fixture_number: '40',
    fixture_matches: 'qwe',
    fixture_status: '',
    allMatchFilled: 'false'
  }
];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.autoupdate('fixture', function(err) { // kecil
  if (err) throw err;
 
  // this loads the Account model from ~/common/models/Account.json
  var Fixture = app.models.Fixture; // besar
  var count = fixtures.length; // kecils
  fixtures.forEach(function(fixture) { // kecils kecil
     // insert new records into the Account table
     Fixture.create(fixture, function(err, record) { // besar kecil
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