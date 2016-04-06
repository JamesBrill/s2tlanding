var SignUps = new Mongo.Collection("sign-ups");

if (Meteor.isClient) {
  Template.emailcollector.events({
    'submit form': function(event) {
      event.preventDefault();
      let name = event.target.username.value;
      let email = event.target.email.value;
      SignUps.insert({
        name: name,
        email: email
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
