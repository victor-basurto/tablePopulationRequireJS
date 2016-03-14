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

require([
	'jquery',
	'backbone', 
	'collections/tasksCollections' ,
	'views/tasksViews', 
	'views/addTask'
], function( $, Backbone, TasksCollections, TasksViews, AddTaskView ) {
	'use strict';
	
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

	// collection instance with new values
	var addTask = new AddTaskView({ collection: tasksCollection });

	// collection instance
	var taskView = new TasksViews({ collection: tasksCollection });

	$( '.tasks' ).append( taskView.render().el );
});







	


