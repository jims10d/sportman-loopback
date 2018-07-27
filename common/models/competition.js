module.exports = function(Competition) {

	Competition.addRegister = function(TeamName, CompetitionId, cb){
		Competition.findOne({where:{id: CompetitionId}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					data = instance['registeredTeam'];
					if(data === null || data === ''){
						theRegistersNow = TeamName;
						Competition.updateAll({id: CompetitionId}, {registeredTeam: theRegistersNow}, //update
						function(err,info){
							Competition.findOne({where:{id: CompetitionId}},
								function(err,instance){
									if(instance===null){
										cb(null,null);
									}else{
										cb(null,instance);
									}
								});
						});
					}else{
						theRegistersNow = data.toString();
					
						if(theRegistersNow.includes(TeamName)){
							cb(null,instance);
						}else{
			
							theRegistersNow = theRegistersNow + ',' + TeamName;
							Competition.updateAll({id: CompetitionId}, {registeredTeam: theRegistersNow}, //update
							function(err,info){
								Competition.findOne({where:{id: CompetitionId}},
									function(err,instance){
										if(instance===null){
											cb(null,null);
										}else{
											cb(null,instance);
										}
									});
							});
						}
					}
				}				
			});
	};

	Competition.getCompetitionName = function(competitionId, cb){
		Competition.findOne({where:{id:competitionId}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					data = instance['comp_name'];
					cb(null,data);
				}
			});
	};
	
	Competition.getCompetitionId = function(competitionName, cb){
		Competition.findOne({where:{comp_name:competitionName}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					data = instance['id'];
					cb(null,data);
				}
			});
    };

	Competition.remoteMethod(
		'addRegister',
		{
			accepts: [
					{arg: 'TeamName', type: 'string'},
					{arg: 'CompetitionId', type: 'string'}
					],
			returns: {arg: 'registeredTeam', type: 'string', root: true},
			http: {path: '/addRegister', verb: 'put'}
		}
	);

	Competition.remoteMethod(
		'getCompetitionName',
		{
			accepts: {arg: 'competitionId', type: 'string'},
			returns: {arg: 'competitionName', type: 'string', root: true},
			http: {path: '/getCompetitionName', verb: 'get', source: 'query'},
			description: "Get competition name by competition id"
		}
	);

	Competition.remoteMethod(
		'getCompetitionId',
		{
			accepts: {arg: 'competitionName', type: 'string'},
			returns: {arg: 'competitionId', type: 'string', root: true},
			http: {path: '/getCompetitionId', verb: 'get', source: 'query'},
			description: "Get competition id by competition name"
		}
	);
};






