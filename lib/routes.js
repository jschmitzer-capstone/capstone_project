FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/trips-list', {
    name: 'trips-list',
    action: function() {
        BlazeLayout.render('MainLayout', {main: 'Trips'});
    }
});