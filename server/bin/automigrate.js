var app = require('../server');
 
var teams = [
  {
    team_abrName: 'mu',
    team_name: 'manchester united',
    team_logo: '',
    team_coach: '',
    team_position: '',
    team_play: '',
    team_point: '',
    team_win: '',
    team_draw: '',
    team_lose: '',
    team_goalFor: '',
    team_goalAgainst: '',
    team_squad: [],
    coach_id: ''
  }
];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.automigrate('team', function(err) {
  if (err) throw err;
 
  // this loads the Account model from ~/common/models/Account.json
  var Team = app.models.Team;
  var count = teams.length;
  teams.forEach(function(team) {
     // insert new records into the Account table
     Team.create(team, function(err, record) {
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