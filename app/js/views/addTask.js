define([ 
	'jquery', 
	'underscore', 
	'backbone', 
	'models/taskModel',
	'collections/tasksCollections'
], function( $, _, Backbone, Task, TasksCollections ) {
	'use strict';

	var AddTaskView = Backbone.View.extend({
		el: '#addTask',

		events: {
			'submit': 'submit'
		},

		initialize: function() {},

		submit: function( e ) {
			e.preventDefault();
			
			var newTaskTitle = $( e.currentTarget ).find( 'input[type="text"]' ).val();

			var task = new Task({ title: newTaskTitle });
			console.log( task );
			this.collection.add( task );
		}
	});
	return AddTaskView;
});
