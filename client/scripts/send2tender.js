if (Meteor.isClient) {
  Template.emailcollector.events({
    'submit form': function(event) {
      event.preventDefault();
      let name = event.target.username.value;
      let email = event.target.email.value;
    }
  });
}
