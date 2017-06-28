var app = require('../server');

var teams = [ // kecils
  {
    team_abrName: 'BBFC',
    team_name: 'Black Bull FC',
    team_logo: 'string',
    team_coach: 'Blacker',
    team_position: 2,
    team_play: 1,
    team_point: 3,
    team_win: 1,
    team_draw: 0,
    team_lose: 0,
    team_goalFor: 4,
    team_goalAgainst: 0,
    team_coach_id: 'T010',
    invited_member: 'ozil11',
    team_squad: []
  }
];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.automigrate('team', function(err) { // kecil
  if (err) throw err;
 
  // this loads the Account model from ~/common/models/Account.json
  var Team = app.models.Team; // besar
  var count = teams.length; // kecils
  teams.forEach(function(team) { // kecils
     // insert new records into the Account table
     Team.create(team, function(err, record) { // besar kecil
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