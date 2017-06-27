var app = require('../server');
 
var ACLs = [];
 
// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.SportmanDb;
 
// this automigrates the Account model 
dataSource.automigrate('ACL', function(err) {
  if (err) throw err;
 
  // this loads the Account model from ~/common/models/Account.json
  var ACL = app.models.ACL;
  var count = ACLs.length;
  ACLs.forEach(function(ACL) {
     // insert new records into the Account table
     ACL.create(ACL, function(err, record) {
      if (err) return console.log(err);
 
      console.log('Record created:', record);
 
      count--;
 
      if (count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
    });
  });
});