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






