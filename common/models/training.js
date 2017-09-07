module.exports = function(Training) {
	Training.addAcceptedPlayer = function(PlayerName, TrainingId, cb){
		Training.findOne({where:{id: TrainingId}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					data = instance['acceptedPlayer']; //get everyone who has like this Competition
					theAcceptedPlayersNow = data.toString();
					//if UserId has like this Competition
					if(theAcceptedPlayersNow.includes(PlayerName)){
						cb(null,instance);
					}
					//if this is the first Competition he see
					else if(theAcceptedPlayersNow === ''){
						theAcceptedPlayersNow = PlayerName;
						Training.updateAll({id: TrainingId}, {acceptedPlayer: theAcceptedPlayersNow}, //update
						function(err,info){
							Training.findOne({where:{id: TrainingId}},
								function(err,instance){
									if(instance===null){
										cb(null,null);
									}else{
										cb(null,instance);
									}
								});
						});
					}
					//it's only the last Competition he's seen
					else{
						theAcceptedPlayersNow = theAcceptedPlayersNow + ',' + PlayerName;
						Training.updateAll({id: TrainingId}, {acceptedPlayer: theAcceptedPlayersNow}, //update
						function(err,info){
							Training.findOne({where:{id: TrainingId}},
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
			});
	};

	Training.addDeniedPlayer = function(PlayerName, TrainingId, cb){
		Training.findOne({where:{id: TrainingId}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					data = instance['deniedPlayer']; //get everyone who has like this Competition
					theDeniedlayersNow = data.toString();
					//if UserId has like this Competition
					if(theDeniedlayersNow.includes(PlayerName)){
						cb(null,instance);
					}
					//if this is the first Competition he see
					else if(theDeniedlayersNow === ''){
						theDeniedlayersNow = PlayerName;
						Training.updateAll({id: TrainingId}, {deniedPlayer: theDeniedlayersNow}, //update
						function(err,info){
							Training.findOne({where:{id: TrainingId}},
								function(err,instance){
									if(instance===null){
										cb(null,null);
									}else{
										cb(null,instance);
									}
								});
						});
					}
					//it's only the last Competition he's seen
					else{
						theDeniedlayersNow = theDeniedlayersNow + ',' + PlayerName;
						Training.updateAll({id: TrainingId}, {deniedPlayer: theDeniedlayersNow}, //update
						function(err,info){
							Training.findOne({where:{id: TrainingId}},
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
			});
	};


	Training.remoteMethod(
		'addDeniedPlayer',
		{
			accepts: [
					{arg: 'PlayerName', type: 'string'},
					{arg: 'TrainingId', type: 'string'}
					],
			returns: {arg: 'deniedPlayer', type: 'string', root: true},
			http: {path: '/addDeniedPlayer', verb: 'put'}
		}
	);
};






