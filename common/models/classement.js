module.exports = function(Classement) {

    Classement.getClassementByCompetitionId = function(competitionId, cb){
		Classement.find({where:{competition_id:competitionId}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
    };
    
    Classement.remoteMethod(
		'getClassementByCompetitionId',
		{
			accepts: {arg: 'competitionId', type: 'string'},
			returns: {arg: 'classements', type: 'string', root: true},
			http: {path: '/getClassementByCompetitionId', verb: 'get', source: 'query'},
			description: "Get Classements instance by competition id"
		}
	);
};


