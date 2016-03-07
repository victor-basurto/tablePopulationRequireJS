var app = app || {};
/**
* AddTask View
*/
app.AddTaskView = Backbone.View.extend({
	el: '#addTask',

	events: {
		'submit': 'submit'
	},

	initialize: function() {

	},

	submit: function( e ) {
		e.preventDefault();
		
		var newTaskTitle = $( e.currentTarget ).find( 'input[type="text"]' ).val();

		var task = new app.Task({ title: newTaskTitle });
		console.log(task);
		this.collection.add( task );
	}
});
