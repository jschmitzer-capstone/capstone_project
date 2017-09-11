Meteor.publish('trips', function(){
    return Trips.find({author: this.userId});
});