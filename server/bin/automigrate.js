var app = require('../server');

var competitions = [ // kecils
  {
    id: 'qweasda',
    organizer: 'qwe',
    comp_name: 'ada',
    comp_fee: '900',
    comp_regulation: '',
    comp_type: 'group stage',
    comp_location: 'pontianak',
    comp_finish: '27/08/2017',
    comp_start: '25/08/2017',
    registeredTeam: '',
    comp_numOfTeam: '20',
    comp_award: '1jt',
    schedule_status: 'false'
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