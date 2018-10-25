module.exports = function(User) {

	User.loginUser = function(username, password, cb){

		var UserModel = User.app.models.User;
		var loginInfo = {};
		loginInfo.id = "";
	 	loginInfo.ttl = "";
	 	loginInfo.userId= "";

		 UserModel.login({username: username, password: password}, function (err, token) {
			if(err){
				cb(err);
			}else if(token === null){
				cb(null,null);	
			}else{
				loginInfo.id = token.id;
				loginInfo.ttl = token.ttl;
				loginInfo.userId= token.userId;

				cb(null, loginInfo);
			}
		 });
	};

	User.getUser = function(username, cb){
		User.findOne({where:{username:username}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
	};

	User.getAllReferees = function(cb){
		User.find({where:{role:'Referee'}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
	};

	User.getAllAnalysts = function(cb){
		User.find({where:{role:'Analyst'}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
	};

	User.getUserById = function(userId, cb){
		User.findOne({where:{id:userId}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
	};

	User.getGoalKeeperByTeam = function(teamName, cb){
		User.find({where:{team:teamName,position:'GK'}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
	};

	User.getDefenderByTeam = function(teamName, cb){
		User.find({where:{team:teamName,position:'Def'}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
	};

	User.getMidfielderByTeam = function(teamName, cb){
		User.find({where:{team:teamName,position:'Mid'}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
	};

	User.getAttackerByTeam = function(teamName, cb){
		User.find({where:{team:teamName,position:'Att'}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
	};

	User.getTopPlayer = function(cb){
		User.find({where:{role:'Player'}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					var topPlayerData = [];
					var highestPoint = 0;
					var index = 0;

					while(instance.length != 0){
						for(var i = 0; i < instance.length; i++){
							if(parseInt(instance[i].goals) + parseInt(instance[i].assist) > highestPoint){
								highestPoint = parseInt(instance[i].goals) + parseInt(instance[i].assist);
								index = i;
							}
						}
						topPlayerData.push(instance[index]);
						instance.splice(index,1);
						highestPoint = 0;
					}
					cb(null,topPlayerData);
				}
			});
	};

	User.getTeamSquad = function(teamName, cb){
		User.find({where:{team:{like:teamName}}, order: 'username asc' },
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
	};

	User.updatePassword = function (ctx, email, oldPassword, newPassword, cb) {
	  var newErrMsg, newErr;
	  try {
	    this.findOne({where: {id: ctx.req.accessToken.userId, email: email}}, function (err, user) {
	      if (err) {
	        cb(err);
	      } else if (!user) { // if 
	        newErrMsg = "No match between provided current logged user and email";
	        newErr = new Error(newErrMsg);
	        newErr.statusCode = 401;
	        newErr.code = 'LOGIN_FAILED_EMAIL';
	        cb(newErr);
	      } else {
	        user.hasPassword(oldPassword, function (err, isMatch) {
	          if (isMatch) {

	            // TODO ...further verifications should be done here (e.g. non-empty new password, complex enough password etc.)...

	            user.updateAttributes({'password': newPassword}, function (err, instance) { // if inputted email current password is match with database
	              if (err) {
	                cb(err);
	              } else {
	                cb(null, true);
	              }
	            });
	          } else {
	            newErrMsg = 'User specified wrong current password !';
	            newErr = new Error(newErrMsg);
	            newErr.statusCode = 401;
	            newErr.code = 'LOGIN_FAILED_PWD';
	            return cb(newErr);
	          }
	        });
	      }
	    });
	  } catch (err) {
	    logger.error(err);
	    cb(err);
	  }

	};

	User.search = function(input,cb){
		User.find({where: {username: {like: input}}}, 
			function (err,instance){
				if (instance===null){
					cb(null,null);
				} else {
					var userResult = instance;
					cb(null,userResult);
				}
			}
		);
	};

	User.addTeamInvitation = function(TeamName, UserId, cb){
		User.findOne({where:{id: UserId}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					data = instance['teamInvitation'];
					if(data === null || data === ''){
						console.log("tes");
						theTeamsNow = TeamName;
						User.updateAll({id: UserId}, {teamInvitation: theTeamsNow}, // update user data
						function(err,info){
							User.findOne({where:{id: UserId}},
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
						
						if(theTeamsNow.includes(TeamName)){
							cb(null,instance);
						}else{
							
							theTeamsNow = theTeamsNow + ',' + TeamName;
							User.updateAll({id: UserId}, {teamInvitation: theTeamsNow}, // update user data
							function(err,info){
								User.findOne({where:{id: UserId}},
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

	User.addRequestedTeam = function(TeamName, UserId, cb){
		User.findOne({where:{id: UserId}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					data = instance['teamRequested']; 
					if(data === null || data === ''){
						console.log("tes");
						theTeamsNow = TeamName;
						User.updateAll({id: UserId}, {teamRequested: theTeamsNow}, // update user data
						function(err,info){
							User.findOne({where:{id: UserId}},
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
					
						if(theTeamsNow.includes(TeamName)){
							cb(null,instance);
						}else{
							
							theTeamsNow = theTeamsNow + ',' + TeamName;
							User.updateAll({id: UserId}, {teamRequested: theTeamsNow}, // update user data
							function(err,info){
								User.findOne({where:{id: UserId}},
									function(err,instance){
										if(instance===null){
											cb(null,null);
										}else{
											cb(null,instance);
										}
									});``
							});
						}
					}
					
				}				
			});
	};

	User.delTeamInvitation = function(UserName , teamInvite, cb){
		User.findOne({where:{username: UserName}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					TeamInvitation = instance['teamInvitation']; 
					TeamInvitationNow = TeamInvitation.toString(); 
					
					if(TeamInvitationNow.includes(teamInvite + ',')){
						TeamInvitationNow = TeamInvitationNow.replace(teamInvite + ',','');
					}
					
					else if(TeamInvitationNow.includes(',' + teamInvite)){
						TeamInvitationNow = TeamInvitationNow.replace(',' + teamInvite,'');
					}
					
					else {						
						TeamInvitationNow = TeamInvitationNow.replace(teamInvite,'');
					}
					User.updateAll({username: UserName}, {teamInvitation: TeamInvitationNow}, // update user data
					function(err,info){
						User.findOne({where:{username: UserName}},
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

	User.addTeam = function(TeamName, UserId, cb){
		User.findOne({where:{id: UserId}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					data = instance['team']; 
					if(data === null || data === ''){
						theTeamsNow = TeamName;
						User.updateAll({id: UserId}, {team: theTeamsNow}, // update user data
						function(err,info){
							User.findOne({where:{id: UserId}},
								function(err,instance){
									if(instance===null){
										cb(null,null);
									}else{
										cb(null,instance);
									}
								});
						});
					} else {
						theTeamsNow = TeamName;
						User.updateAll({id: UserId}, {team: theTeamsNow}, // update user data
						function(err,info){
							User.findOne({where:{id: UserId}},
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

	User.addTeamByName = function(Team, Username, cb){
		User.findOne({where:{username: Username}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					data = instance['team'];
					if(data === null){
			
						console.log("tes");
						theTeamsNow = Team;
						User.updateAll({username: Username}, {team: theTeamsNow}, // update user data
						function(err,info){
							User.findOne({where:{username: Username}},
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
		
						if(theTeamsNow.includes(Team)){
							cb(null,instance);
						}else{

							theTeamsNow = theTeamsNow + ',' + Team;
							User.updateAll({username: Username}, {team: theTeamsNow}, // update user data
							function(err,info){
								User.findOne({where:{username: Username}},
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

	User.delRequestedTeam = function(Username , teamRequested, cb){
		User.findOne({where:{username: Username}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					RequestedTeam = instance['teamRequested']; 
					RequestedTeamNow = RequestedTeam.toString(); 

					if(RequestedTeamNow.includes(teamRequested + ',')){
						RequestedTeamNow = RequestedTeamNow.replace(teamRequested + ',','');
					}
					
					else if(RequestedTeamNow.includes(',' + teamRequested)){
						RequestedTeamNow = RequestedTeamNow.replace(',' + teamRequested,'');
					}
					
					else {						
						RequestedTeamNow = RequestedTeamNow.replace(teamRequested,'');
					}
					User.updateAll({username: Username}, {teamRequested: RequestedTeamNow}, // update user data
					function(err,info){
						User.findOne({where:{username: Username}},
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

	User.addRefereeRating = function(UserId, RefereeRating, cb){
		User.findOne({where:{id: UserId}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					User.updateAll({id: UserId}, {referee_rating: RefereeRating}, // update user data
					function(err,info){
						User.findOne({where:{id: UserId}},
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

	User.addBookedDate = function(BookedDate, Username, cb){
		User.findOne({where:{username: Username}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					data = instance['bookedDate'];
					if(data === null || data === ''){
						User.updateAll({username: Username}, {bookedDate: BookedDate}, // update user data
						function(err,info){
							User.findOne({where:{username: Username}},
								function(err,instance){
									if(instance===null){
										cb(null,null);
									}else{
										cb(null,instance);
									}
								});
						});
					} else {
						var booked_date = data.toString();
		
						if(booked_date.includes(BookedDate)){
							cb(null,instance);
						}else{
							booked_date = booked_date + ',' + BookedDate;
							User.updateAll({username: Username}, {bookedDate: booked_date}, // update user data
							function(err,info){
								User.findOne({where:{username: Username}},
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

	// User.saveOneSignalId = function(UserId, oneSignalId, cb){
	// 	User.updateAll({id:UserId}, {oneSignalId: oneSignalId},
	// 		function(err,info){
	// 			User.findOne({where:{id: UserId}}, 
	// 				function(err,instance){
	// 					if(instance===null){
	// 						cb(null,null);
	// 					} else {
	// 						cb(null, instance);
	// 					}
	// 			})
	// 	});
	// }
	
	User.remoteMethod(
		'getUser',
		{
			accepts: {arg: 'username', type: 'string'},
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/getUser', verb: 'get', source: 'query'},
			description: "Get User instance by username"
		}
	);

	User.remoteMethod(
		'getAllReferees',
		{
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/getAllReferees', verb: 'get', source: 'query'},
			description: "Get All Referees"
		}
	);

	User.remoteMethod(
		'getAllAnalysts',
		{
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/getAllAnalysts', verb: 'get', source: 'query'},
			description: "Get All Analysts"
		}
	);

	User.remoteMethod(
		'getUserById',
		{
			accepts: {arg: 'userId', type: 'string'},
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/getUserById', verb: 'get', source: 'query'},
			description: "Get User instance by user id"
		}
	);

	User.remoteMethod(
		'getGoalKeeperByTeam',
		{
			accepts: {arg: 'teamName', type: 'string'},
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/getGoalKeeperByTeam', verb: 'get', source: 'query'},
			description: "Get goalkeeper instance by team name"
		}
	);

	User.remoteMethod(
		'getDefenderByTeam',
		{
			accepts: {arg: 'teamName', type: 'string'},
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/getDefenderByTeam', verb: 'get', source: 'query'},
			description: "Get defender instance by team name"
		}
	);

	User.remoteMethod(
		'getMidfielderByTeam',
		{
			accepts: {arg: 'teamName', type: 'string'},
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/getMidfielderByTeam', verb: 'get', source: 'query'},
			description: "Get midfielder instance by team name"
		}
	);

	User.remoteMethod(
		'getAttackerByTeam',
		{
			accepts: {arg: 'teamName', type: 'string'},
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/getAttackerByTeam', verb: 'get', source: 'query'},
			description: "Get attacker instance by team name"
		}
	);

	User.remoteMethod(
		'getTopPlayer',
		{
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/getTopPlayer', verb: 'get', source: 'query'},
			description: "Get top player instance by team name"
		}
	);


	User.remoteMethod(
		'getTeamSquad',
		{
			accepts: {arg: 'team', type: 'string'},
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/getTeamSquad', verb: 'get', source: 'query'},
			// description: "G"
		}
	);

	User.remoteMethod(
		'updatePassword',
		  {
		    description: "Allows a logged user to change his password.",
		    http: {verb: 'put'},
		    accepts: [
		      {arg: 'ctx', type: 'object', http: {source: 'context'}},
		      {arg: 'email', type: 'string', required: true, description: "The user email, just for verification"},
		      {arg: 'oldPassword', type: 'string', required: true, description: "The user old password"},
		      {arg: 'newPassword', type: 'string', required: true, description: "The user new password"}
		    ],
		    returns: {arg: 'passwordChange', type: 'boolean'}
		  }
	);

	User.remoteMethod(
		'search',
		{
			http: {path: '/search', verb: 'get', source: 'query'},
			accepts: {arg: 'input', type: 'string'},
			returns: [
					{arg: 'people', type: 'string'}
					 ]
					
		}
	);

	User.remoteMethod(
		'addTeamInvitation',
		{
			accepts: [
					{arg: 'TeamName', type: 'string'},
					{arg: 'UserId', type: 'string'}
					],
			returns: {arg: 'teamInvitation', type: 'string', root: true},
			http: {path: '/addTeamInvitation', verb: 'put'}
		}
	);

	User.remoteMethod(
		'addRequestedTeam',
		{
			accepts: [
					{arg: 'TeamName', type: 'string'},
					{arg: 'UserId', type: 'string'}
					],
			returns: {arg: 'teamRequested', type: 'string', root: true},
			http: {path: '/addRequestedTeam', verb: 'put'}
		}
	);

	User.remoteMethod(
		'delTeamInvitation',
		{
			accepts: [
					{arg: 'UserName', type: 'string'},
					{arg: 'teamInvite', type: 'string'}
					],
			returns: {arg: 'teamInvitation', type: 'string', root: true},
			http: {path: '/delTeamInvitation', verb: 'put'}
		}
	);

	User.remoteMethod(
		'addTeam',
		{
			accepts: [
					{arg: 'TeamName', type: 'string'},
					{arg: 'UserId', type: 'string'}
					],
			returns: {arg: 'team', type: 'string', root: true},
			http: {path: '/addTeam', verb: 'put'}
		}
	);

	User.remoteMethod(
		'addTeamByName',
		{
			accepts: [
					{arg: 'Team', type: 'string'},
					{arg: 'Username', type: 'string'}
					],
			returns: {arg: 'team', type: 'string', root: true},
			http: {path: '/addTeamByName', verb: 'put'}
		}
	);

	User.remoteMethod(
		'delRequestedTeam',
		{
			accepts: [
					{arg: 'Username', type: 'string'},
					{arg: 'teamRequested', type: 'string'}
					],
			returns: {arg: 'teamRequested', type: 'string', root: true},
			http: {path: '/delRequestedTeam', verb: 'put'}
		}
	);

	User.remoteMethod(
		'loginUser',
		{
			accepts: [
					{arg: 'username', type: 'string'},
					{arg: 'password', type: 'string'}
					],
			returns: {arg: 'loginInfo', type: 'object', root: true},
			http: {path: '/loginUser', verb: 'post'}
		}
	);

	User.remoteMethod(
		'addRefereeRating',
		{
			accepts: [
					{arg: 'UserId', type: 'string'},
					{arg: 'RefereeRating', type: 'string'}
					],
			returns: {arg: 'refereeRating', type: 'string', root: true},
			http: {path: '/addRefereeRating', verb: 'put'}
		}
	);

	User.remoteMethod(
		'addBookedDate',
		{
			accepts: [
					{arg: 'BookedDate', type: 'string'},
					{arg: 'Username', type: 'string'}
					],
			returns: {arg: 'bookedDate', type: 'string', root: true},
			http: {path: '/addBookedDate', verb: 'put'}
		}
	);

	// User.remoteMethod(
	// 	'saveOneSignalId',
	// 	{
	// 		accepts: [
	// 				{arg: 'userId', type: 'string'},
	// 				{arg: 'oneSignalId', type: 'string'}
	// 				],
	// 		returns: {type: 'string', root: true},
	// 		http: {path: '/saveOneSignalId', verb: 'put'}
	// 	}
	// );
};
