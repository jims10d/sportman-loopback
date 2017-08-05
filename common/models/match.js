module.exports = function(Match) {
	Match.delMatch = function(fixNumber, cb){
		Match.destroyAll({where:{fixture_number:fixNumber}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
	};

	Match.getMatch = function(id, cb){
		Match.find({where:{id: id}}, // get all data except id from database
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					matchData = instance;
					goalHome = instance['goalHome'];
					goalAway = instance['goalAway'];
					goalData = [];
					goalData.push(goalHome);
					goalData.push(goalAway);

					goalData.sort(function(a,b){
						return a.time>b.time;
					});
				
					cb(null,goalData);
							
				}
			});
	};

	Match.remoteMethod(
		'delMatch',
		{
			accepts: {arg: 'fixNumber', type: 'string'},
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/delMatch', verb: 'delete', source: 'query'},
			description: "Get Team instance by team name"
		}
	);

	Match.remoteMethod(
		'getMatch',
		{
			accepts : {arg : 'id', type: 'string'},
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/getMatch', verb: 'get', source: 'query'}
		}
	);

};


