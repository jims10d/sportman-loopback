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

	Match.remoteMethod(
		'delMatch',
		{
			accepts: {arg: 'fixNumber', type: 'string'},
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/delMatch', verb: 'delete', source: 'query'},
			description: "Get Team instance by team name"
		}
	);
};


