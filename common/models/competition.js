module.exports = function(Competition) {

	Competition.addRegister = function(TeamName, CompetitionId, cb){
		Competition.findOne({where:{id: CompetitionId}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					data = instance['registeredTeam']; //get everyone who has like this Competition
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
						//if UserId has like this Competition
						if(theRegistersNow.includes(TeamName)){
							cb(null,instance);
						}else{
							//it's only the last Competition he's seen
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
};






