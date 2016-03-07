var app = app || {};
/**
 * Tasks View
 */
app.TasksViews = Backbone.View.extend({
	tagName: 'tbody',

	initialize: function() {
		this.collection.on( 'add', this.addOne, this );
	},
	render: function() {
		this.collection.each( this.addOne, this );
		return this;
	},

	addOne: function( task ) {
		var taskView = new app.TaskView({ model: task });

		this.$el.append( taskView.render().el );
	}
});

