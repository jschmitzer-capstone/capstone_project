if(Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('trip-book');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}
FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/trip-book', {
	name: 'trip-book',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('trip-book');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Trips'});
	}
});

FlowRouter.route('/trip/:id', {
	name: 'trip',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'TripSingle'});
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action() {
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	}
});

FlowRouter.route('/about', {
	name: 'about',
	action() {
		BlazeLayout.render('MainLayout', {main: 'About'});
	}
});
