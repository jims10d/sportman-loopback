var app = require('../server');

var competitions = [ // kecils
  {
    id: 'C1210hdkfhdds',
    organizer: 'Organizer',
    comp_name: 'Sporto Cup',
    comp_fee: '500.000',
    comp_regulation: 'afsjdfhk h',
    comp_type: 'fsfd',
    comp_location: 'Tangkas Sport',
    comp_finish: '08/20/2017',
    comp_start: '08/25/2017',
    registeredTeam: 'redcat',
    comp_notes: 'asdad',
    comp_numOfTeam: '16',
    comp_award: '1 juta',
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