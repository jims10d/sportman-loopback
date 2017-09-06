var app = require('../server');

var competitions = [ // kecils
  {
    id: 'COqqsdsdwe',
    organizer: '12',
    comp_name: 'asdads',
    comp_fee: '1',
    comp_regulation: '40',
    comp_type: '20',
    comp_location: '12',
    comp_finish: '12',
    comp_start: '12',
    registeredTeam: '',
    comp_notes: '12',
    comp_numOfTeam: '',
    comp_award: '12',
    schedule_status: '',
    register_status: ''
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