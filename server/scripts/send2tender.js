let SignUps = new Mongo.Collection("signups");

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}
