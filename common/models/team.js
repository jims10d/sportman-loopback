'use strict';

module.exports = function(Team) {
	Team.addTeam = function(data, cb){
		Team.create(data,
			function(err, instance){
				if(instance===null){
					cb(null, null);
				} else 	{
						  var teamContent = instance;
						  var https = require('https');
						  var req = https.request(function(res) {  
						    res.on('data', function(data) {
						      console.log("Response:");
						      console.log(JSON.parse(data));
						      // console.log(JSON.parse(data));
						    });
						  });
						  
						  req.on('error', function(e) {
						    console.log("ERROR:");
						    console.log(e);
						  });
						  
						  req.write(JSON.stringify(data));
						  req.end();
						  // console.log(instance);
						  cb(null, teamContent);
						}	
				
				});
	};

	// Team.search = function(input,cb){
	// 	Team.find({where: {team_name: {like: input}}}, 
	// 		function (err,instance){
	// 			if (instance===null){
	// 				cb(null,null);
	// 			} else {
	// 				var teamResult = instance;
	// 				cb(null,teamResult);
	// 			}
	// 		}
	// 	);
	// };

	Team.search = function(input,cb){
		var TeamMember = Team.app.models.user;
		Team.find({where: {team_name: {like: input}}}, 
			function (err,instance){
				if (instance===null){
					cb(null,null);
				} else {
					var teamResult = [];
					teamResult = instance;
					var memberResult = [];
					TeamMember.find({where: {username: {like: input}}},
						function (err,instance){
							if (instance===null){
								cb(null,null);
							} else {
								memberResult = instance;
								cb(null,teamResult,memberResult);
							}
						}
					);
				}
			}
		);
	};

	Team.remoteMethod(
		'addTeam',
		{
			accepts: {arg: 'data', type: 'object', http: {source: 'body'}},
			returns: [
					{arg: 'dataTeam', type: 'string'}
					],
			http: {path: '/addTeam', verb: 'post', source: 'query'},
			description: "Adding a team"
		}
	);

	Team.remoteMethod(
		'search',
		{
			http: {path: '/search', verb: 'get', source: 'query'},
			accepts: {arg: 'input', type: 'string'},
			returns: [
					{arg: 'team', type: 'string'},
					{arg: 'member', type: 'string'}
					 ]
					
		}
	);

};
