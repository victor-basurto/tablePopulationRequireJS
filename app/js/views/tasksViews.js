define([ 
	'jquery', 
	'underscore', 
	'backbone', 
	'collections/tasksCollections', 
	'views/singleTask'
], function( $, _, Backbone, TasksCollections, TaskView ) {
	'use strict';

	var TasksViews = Backbone.View.extend({
		tagName: 'tbody',

		initialize: function() {
			this.collection.on( 'add', this.addOne, this );
		},
		render: function() {
			this.collection.each( this.addOne, this );
			return this;
		},

		addOne: function( task ) {
			var taskView = new TaskView({ model: task });

			this.$el.append( taskView.render().el );
		}
	});
	return TasksViews;
});

