var app = require('../server');

var teams = [ // kecils
  {
    team_abrName: 'SFC',
    team_name: 'Spirit FC',
    team_logo: '',
    team_coach: 'Spirit Walker',
    team_position: '1',
    team_play: '10',
    team_point: '30',
    team_win: '10',
    team_draw: '0',
    team_lose: '0',
    team_goalFor: '30',
    team_goalAgainst: '0',
    coach_id: 'C011',
    invited_member: 'shanks',
    team_squad: 'ace',
    user_request: 'luffy'
  }
];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.autoupdate('team', function(err) { // kecil
  if (err) throw err;
 
  // this loads the Account model from ~/common/models/Account.json
  var Team = app.models.Team; // besar
  var count = teams.length; // kecils
  teams.forEach(function(team) { // kecils kecil
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