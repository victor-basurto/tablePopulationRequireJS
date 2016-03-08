require.config({
	paths: {
		'jquery': './libs/jquery/dist/jquery.min',
		'underscore': './libs/underscore-amd/underscore-min',
		'backbone': './libs/backbone-amd/backbone-min',
		'bootstrap': './libs/bootstrap/dist/js/bootstrap.min'
	},

	shim: {
		'bootstrap': {
			deps: [ 'jquery' ]
		},
		'backbone': {
			deps: [
				'jquery',
				'underscore'
			],
			exports: 'Backbone'
		}
	}
});

require([ 'backbone', 'views/tasksViews', 'views/addTask' ], function( Backbone, TasksViews, AddTaskView ) {
	'use strict';
	
	// collection instance with new values
	var addTask = new AddTaskView({ collection: tasksCollection });

	// collection instance
	var taskView = new TasksViews({ collection: tasksCollection });

	// initialize app with some values
	var tasksCollection = new TasksCollections([{
		title: 'go to downtown',
		priority: 4
	}, {
		title: 'go to store',
		priority: 3
	}, {
		title: 'go to circus',
		priority: 1
	}, {
		title: 'go ninja go ninja go',
		priority: 2
	}]);

	$( '.tasks' ).append( taskView.render().el );
});







	


