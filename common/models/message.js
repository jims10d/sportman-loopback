module.exports = function(Message) {

	Message.getMessage = function(sender, receiver, cb){

		Message.find({where:{sender: receiver, receiver: sender}}, // get all data except id from database
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					var allMessages = [];
					var senderMessage = JSON.stringify(instance); // converts a JavaScript value to a JSON string
					var parsed = JSON.parse(senderMessage);// parsing string

					for(var x in parsed){
					  allMessages.push(parsed[x]); // push senderMessage to allMessages
					}


					Message.find({where:{sender: sender, receiver: receiver}},
						function(err,instance){
							if(instance===null){
								cb(null,null);
							}else{
								var receiverMessage = JSON.stringify(instance); // converts a JavaScript value to a JSON string
								var parsed2 = JSON.parse(receiverMessage);

								for (var y in parsed2){
									allMessages.push(parsed2[y]); // push receiverMessage to allMessages
								}

								allMessages.sort(function(a, b){ // sorting array by date (ascending)
								    return a.date.getDate() - b.date.getDate();
								});
								// console.log(allMessages);
								cb(null,allMessages);

							}
						});
				}
			});
	};

	Message.getUnreadMessage = function(read, receiver, cb){
		Message.find({where: {read: read, receiver: receiver}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else {
					unreadMessage = JSON.stringify(instance); // converts a JavaScript value to a JSON string
					var parsed = JSON.parse(unreadMessage);// parsing string

					var allUnreadMessages = []; // array of string, this variabel combines senderMessage & receiverMessage

					for(var x in parsed){
						allUnreadMessages.push(parsed[x]); // push senderMessage to allMessages
					}
					cb(null,allUnreadMessages);
				}
			});
	};

	Message.addMessage = function(data, cb){
		var User = Message.app.models.user;
		Message.create(data,
			function(err, instance){
				if(instance===null){
					cb(null, null);
				}else {
					var messageMessage = instance;
					var receiver = instance['receiver'];
					// var receiver_name = instance['receiver_name'];
					var messageId = instance['id'];
					var messageContent = instance['content'];
					User.findOne({where: {username: receiver}},
						function(err, info){
							if(info===null){
								cb(null, null);
							}else{
								var oneSignalId = info['oneSignalId'];
								var sendNotification = function(data) {
								  var headers = {
								    "Content-Type": "application/json",
								    "Authorization": "Basic YzIxZTYwOWEtNmU3Zi00ZTZiLTlhZWEtYjFjYTRhMjA3NzMy"
								  };
								  
								  var options = {
								    host: "onesignal.com",
								    port: 443,
								    path: "/api/v1/notifications",
								    method: "POST",
								    headers: headers
								  };
								  
								  var https = require('https');
								  var req = https.request(options, function(res) {  
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
								};

								var message = { 
								  app_id: "1a71f983-cfe6-445c-a194-826c599b310f",
								  contents: {"en": receiver + " : " + messageContent},
								  include_player_ids: [oneSignalId],
								  isAndroid: true,
								  // postId: instance['id']
								  data: {messageId : messageId, type: "message"}
								};

								sendNotification(message);
								// console.log(instance);
								cb(null, messageMessage, message);
							}
						});

					
					
				}
			});
	};

	Message.addReader = function(id, receiver, cb){
		Message.findOne({where:{id:id}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					Message.updateAll({receiver: receiver}, {read:receiver},
					function(err,info){
						Message.findOne({where:{id: id}},
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

	Message.recentChats = function(id, cb){
		Message.find({where: {or :[{receiver: id}, {sender:id}]}, order: "date DESC"},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				} else {
					var length = 0;
					temp = JSON.stringify(instance); // converts a JavaScript value to a JSON string
					var parsed = JSON.parse(temp); // parsing string
					var person= [];
					
					var allMessages = []; // array of string, this variabel combines senderMessage & receiverMessage


					for (var x=0; x<parsed.length; x++){
						if(x===0){
							// console.log(id);
							// console.log(parsed[x]['sender']);
							if(parsed[x]['sender']!=id){
								allMessages.push(parsed[x]);
								person.push(parsed[x]['sender']);
							} else {
								allMessages.push(parsed[x]);
								person.push(parsed[x]['receiver']);
							}
						} else {
							if(parsed[x]['sender']!=id){
								var find = 0;

								for(var y in person){
									if(parsed[x]['sender']===person[y]){
										find = 1;
									}
								}
								
								console.log(find);
								if(find!=1){
									allMessages.push(parsed[x]);
									person.push(parsed[x]['sender']);
								}
							} else {
								var find = 0;
								
								for(var y in person){
									if(parsed[x]['receiver']===person[y]){
										find = 1;
									}
								}
								
								console.log(find);

								if(find!=1){
									allMessages.push(parsed[x]);
									person.push(parsed[x]['receiver']);
								}
							}
						}
					}

					cb(null,allMessages);
				}
			}
		);
	};

	Message.newMessageCounter = function(receiver, sender, cb){
		Message.find({where: {read: false, receiver: receiver, sender: sender}},
			function(err,instance){
				if(instance===null){
					cb(null,null,null);
				}else {
					var senderName = sender;
					cb(null,instance.length,senderName);
				}
		});
	};

	Message.readMessage = function(receiver, sender, cb){
		Message.find({where: {read: false, receiver: receiver, sender: sender}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					Message.updateAll({read: true}, //update
					function(err,info){
						Message.find({where: {read: false, receiver: receiver, sender: sender}},
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

	Message.delMessage = function(senderName, cb){
		Message.destroyAll({where:{sender:senderName}},
			function(err,instance){
				if(instance===null){
					cb(null,null);
				}else{
					cb(null,instance);
				}
			});
	};

	Message.remoteMethod(
		'delMessage',
		{
			accepts: {arg: 'senderName', type: 'string'},
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/delMessage', verb: 'delete', source: 'query'},
			description: "Get Team instance by team name"
		}
	);

	Message.remoteMethod(
		'recentChats',
		{
			accepts: {arg: 'id', type:'string'},
			returns: {arg: 'data', type: 'string', root: 'true'},
			http: {path: '/recentChats', verb: 'get', source: 'query'}
		}
	);

	Message.remoteMethod(
		'getMessage',
		{
			accepts : [
						{arg : 'sender', type: 'string'},
						{arg : 'receiver', type: 'string'}
					],
			returns: {arg: 'id', type: 'string', root: true},
			http: {path: '/getMessage', verb: 'get', source: 'query'}
		}
	);

	Message.remoteMethod(
		'addMessage',
		{
			accepts: {arg: 'data', type: 'object', http: {source: 'body'}},
			returns: [
					{arg: 'dataMessage', type: 'string'},
					{arg: 'messagePush', type: 'string'}
					],
			http: {path: '/addMessage', verb: 'post', source: 'query'},
			description: "Adding a message"
		}
	);

	Message.remoteMethod(
		'addReader',
		{
			accepts: [
						{arg : 'id', type: 'string'},
						{arg : 'receiver', type: 'string'}
					],
			returns: {arg: 'status', type: 'string', root: true},
			http: {path: '/addReader', verb: 'get', source: 'query'}
		}
	);

	Message.remoteMethod(
		'getUnreadMessage',
		{
			accepts: [
						{arg : 'read', type: 'string'},
						{arg : 'receiver', type: 'string'}
					],
			returns: {arg: 'count', type: 'string', root: true},
			http: {path: '/getUnreadMessage', verb: 'get', source: 'query'},
			description: "Get how many unread message"
		}
	);

	Message.remoteMethod(
		'newMessageCounter',
		{
			accepts : [
				{arg : 'receiver', type: 'string'},
				{arg : 'sender', type: 'string'}
			],
			returns: [
				{arg: 'count', type: 'number'},
				{arg: 'sender', type: 'string'}
			],	
			http: {path: '/newMessageCounter', verb: 'get', source: 'query'},
			description: "Get how many new message"
		}
	);

	Message.remoteMethod(
		'readMessage',
		{
			accepts: [
					{arg: 'receiver', type: 'string'},
					{arg: 'sender', type: 'string'}
					],
			returns: {arg: 'message', type: 'string', root: true},
			http: {path: '/readMessage', verb: 'put'}
		}
	);
};
