module.exports = function(Team) {
	Team.getTeamByName = function(teamName, cb){
		Team.findOne({fields: {id: false}, where:{team_name:teamName}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
	};

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

	Team.addInvitedMember = function(Username, TeamId, cb){
		Team.findOne({where:{id: TeamId}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					data = instance['invited_member']; //get everyone who has like this Competition
					if(data === null){
						//if this is the first Competition he see
						console.log("tes");
						theMembersNow = Username;
						Team.updateAll({id: TeamId}, {invited_member: theMembersNow}, //update
						function(err,info){
							Team.findOne({where:{id: TeamId}},
								function(err,instance){
									if(instance===null){
										cb(null,null);
									}else{
										cb(null,instance);
									}
								});
						});
					} else {
						theMembersNow = data.toString();
						//if UserId has like this Competition
						if(theMembersNow.includes(Username)){
							cb(null,instance);
						}else{
							//it's only the last Competition he's seen
							theMembersNow = theMembersNow + ',' + Username;
							Team.updateAll({id: TeamId}, {invited_member: theMembersNow}, //update
							function(err,info){
								Team.findOne({where:{id: TeamId}},
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

	Team.addUserRequest = function(Username, TeamId, cb){
		Team.findOne({where:{id: TeamId}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					data = instance['user_request']; //get everyone who has like this Competition
					if(data === null || data === ''){
						//if this is the first Competition he see
						console.log("tes");
						theMembersNow = Username;
						Team.updateAll({id: TeamId}, {user_request: theMembersNow}, //update
						function(err,info){
							Team.findOne({where:{id: TeamId}},
								function(err,instance){
									if(instance===null){
										cb(null,null);
									}else{
										cb(null,instance);
									}
								});
						});
					} else {
						theMembersNow = data.toString();
						//if UserId has like this Competition
						if(theMembersNow.includes(Username)){
							cb(null,instance);
						}else{
							//it's only the last Competition he's seen
							theMembersNow = theMembersNow + ',' + Username;
							Team.updateAll({id: TeamId}, {user_request: theMembersNow}, //update
							function(err,info){
								Team.findOne({where:{id: TeamId}},
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

	Team.addMemberByName = function(Member, TeamName, cb){
		Team.findOne({where:{team_name: TeamName}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					data = instance['team_squad']; //get everyone who has like this Competition
					if(data === null){
						//if this is the first Competition he see
						console.log("tes");
						theMembersNow = Member;
						Team.updateAll({team_name: TeamName}, {team_squad: theMembersNow}, //update
						function(err,info){
							Team.findOne({where:{team_name: TeamName}},
								function(err,instance){
									if(instance===null){
										cb(null,null);
									}else{
										cb(null,instance);
									}
								});
						});
					} else {
						theMembersNow = data.toString();
						//if UserId has like this Competition
						if(theMembersNow.includes(Member)){
							cb(null,instance);
						}else{
							//it's only the last Competition he's seen
							theMembersNow = theMembersNow + ',' + Member;
							Team.updateAll({team_name: TeamName}, {team_squad: theMembersNow}, //update
							function(err,info){
								Team.findOne({where:{team_name: TeamName}},
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

	Team.delInvitedMember = function(TeamName , userInvited, cb){
		Team.findOne({where:{team_name: TeamName}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					InvitedMember = instance['invited_member']; //get every posts he has liked
					InvitedMemberNow = InvitedMember.toString(); //store all post he has liked now to string
					//if the postId is in mid
					if(InvitedMemberNow.includes(userInvited + ',')){
						InvitedMemberNow = InvitedMemberNow.replace(userInvited + ',','');
					}
					//if the postId at the last
					else if(InvitedMemberNow.includes(',' + userInvited)){
						InvitedMemberNow = InvitedMemberNow.replace(',' + userInvited,'');
					}
					//postId is at the first
					else {						
						InvitedMemberNow = InvitedMemberNow.replace(userInvited,'');
					}
					Team.updateAll({team_name: TeamName}, {invited_member: InvitedMemberNow}, //update
					function(err,info){
						Team.findOne({where:{team_name: TeamName}},
							function(err,instance){
								if(instance===null){
									cb(null,null);
								}else{
									cb(null,instance);
								}
							});
					});
				}				
			});
	};

	Team.addMember = function(Username, TeamId, cb){
		Team.findOne({where:{id: TeamId}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					data = instance['team_squad']; //get everyone who has like this Competition
					if(data === null){
						//if this is the first Competition he see
						console.log("tes");
						theTeamsNow = Username;
						Team.updateAll({id: TeamId}, {team_squad: theTeamsNow}, //update
						function(err,info){
							Team.findOne({where:{id: TeamId}},
								function(err,instance){
									if(instance===null){
										cb(null,null);
									}else{
										cb(null,instance);
									}
								});
						});
					} else {
						theTeamsNow = data.toString();
						//if UserId has like this Competition
						if(theTeamsNow.includes(Username)){
							cb(null,instance);
						}else{
							//it's only the last Competition he's seen
							theTeamsNow = theTeamsNow + ',' + Username;
							Team.updateAll({id: TeamId}, {team_squad: theTeamsNow}, //update
							function(err,info){
								Team.findOne({where:{id: TeamId}},
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

	Team.delUserRequest = function(TeamName , userRequest, cb){
		Team.findOne({where:{team_name: TeamName}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					UserRequest = instance['user_request']; //get every posts he has liked
					UserRequestNow = UserRequest.toString(); //store all post he has liked now to string
					//if the postId is in mid
					if(UserRequestNow.includes(userRequest + ',')){
						UserRequestNow = UserRequestNow.replace(userRequest + ',','');
					}
					//if the postId at the last
					else if(UserRequestNow.includes(',' + userRequest)){
						UserRequestNow = UserRequestNow.replace(',' + userRequest,'');
					}
					//postId is at the first
					else {						
						UserRequestNow = UserRequestNow.replace(userRequest,'');
					}
					Team.updateAll({team_name: TeamName}, {user_request: UserRequestNow}, //update
					function(err,info){
						Team.findOne({where:{team_name: TeamName}},
							function(err,instance){
								if(instance===null){
									cb(null,null);
								}else{
									cb(null,instance);
								}
							});
					});
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
		'getTeamByName',
		{
			accepts: {arg: 'teamName', type: 'string'},
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/getTeamByName', verb: 'get', source: 'query'},
			description: "Get Team instance by team name"
		}
	);

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

	Team.remoteMethod(
		'addInvitedMember',
		{
			accepts: [
					{arg: 'Username', type: 'string'},
					{arg: 'TeamId', type: 'string'}
					],
			returns: {arg: 'Invited_member', type: 'string', root: true},
			http: {path: '/addInvitedMember', verb: 'put'}
		}
	);

	Team.remoteMethod(
		'addUserRequest',
		{
			accepts: [
					{arg: 'Username', type: 'string'},
					{arg: 'TeamId', type: 'string'}
					],
			returns: {arg: 'User_request', type: 'string', root: true},
			http: {path: '/addUserRequest', verb: 'put'}
		}
	);

	Team.remoteMethod(
		'addMemberByName',
		{
			accepts: [
					{arg: 'Member', type: 'string'},
					{arg: 'TeamName', type: 'string'}
					],
			returns: {arg: 'Team_squad', type: 'string', root: true},
			http: {path: '/addMemberByName', verb: 'put'}
		}
	);

	Team.remoteMethod(
		'delInvitedMember',
		{
			accepts: [
					{arg: 'TeamName', type: 'string'},
					{arg: 'userInvited', type: 'string'}
					],
			returns: {arg: 'invited_member', type: 'string', root: true},
			http: {path: '/delInvitedMember', verb: 'put'}
		}
	);

	Team.remoteMethod(
		'addMember',
		{
			accepts: [
					{arg: 'Username', type: 'string'},
					{arg: 'TeamId', type: 'string'}
					],
			returns: {arg: 'team_squad', type: 'string', root: true},
			http: {path: '/addMember', verb: 'put'}
		}
	);

	Team.remoteMethod(
		'delUserRequest',
		{
			accepts: [
					{arg: 'TeamName', type: 'string'},
					{arg: 'userRequest', type: 'string'}
					],
			returns: {arg: 'user_request', type: 'string', root: true},
			http: {path: '/delUserRequest', verb: 'put'}
		}
	);

};
