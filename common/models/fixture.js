module.exports = function(Fixture) {
	Fixture.getMatches = function(fixtureNumber, cb){
		var FixtureMatches = Fixture.app.models.Match;
		var matchesResult = [];
		FixtureMatches.find({where: {fixture_number: fixtureNumber}},
			function (err,instance){
				if (instance===null){
					cb(null,null);
				}else {
					matchesResult = instance;
					cb(null,matchesResult);
				}
			});

	};

	Fixture.getFixture = function(competitionId, fixtureNumber, cb){
		Fixture.findOne({where:{competitionId:competitionId,fixture_number:fixtureNumber}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
	};

	Fixture.delFixture = function(competitionId, cb){
		Fixture.destroyAll({where:{competitionId:competitionId}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
	};

	Fixture.remoteMethod(
		'getMatches',
		{
			accepts: {arg: 'fixtureNumber', type: 'string'},
			returns: {arg: 'matches', type: 'string', root: true},
			http: {path: '/getMatches', verb: 'get', source: 'query'},
			description: "Get matches instance by fixture number"
		}
	);

	Fixture.remoteMethod(
		'getFixture',
		{
			accepts: [
					 {arg: 'competitionId', type: 'string'},
					 {arg: 'fixtureNumber', type: 'string'}
					 ],
			returns: {arg: 'fixture', type: 'string', root: true},
			http: {path: '/getFixture', verb: 'get', source: 'query'},
			description: "Get Fixture instance by competition id and fixture number"
		}
	);

	Fixture.remoteMethod(
		'delFixture',
		{
			accepts: {arg: 'competitionId', type: 'string'},
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/delFixture', verb: 'delete', source: 'query'},
			description: "Delete fixture instance by competition id"
		}
	);

};


