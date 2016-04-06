let SignUps = new Mongo.Collection("signups");

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
      alert(SignUps.find({}).fetch()[0].name);
    }
  });
}
