var app = app || {};

/**
 * @{param} `id`, html id attr
 * return template
 */
var template = function( id ) {
	return _.template( $( '#' + id ).html() )
}

	
/**
 * Task View
 */
app.TaskView = Backbone.View.extend({
	tagName: 'tr',

	template: template( 'taskTemplate' ),

	events: {
		'click .edit': 'editTask',
		'click .delete': 'removeTask',
		'click .update': 'updateTask',
		'click .cancel': 'cancel'
	},

	initialize: function() {
		this.model.on( 'change:title', this.render, this );
		this.model.on( 'destroy', this.remove, this );
	},

	render: function() {
		var template = this.template( this.model.toJSON() );
		this.$el.html( template );
		return this;
	},

	editTask: function() {
		this.$( '.edit' ).hide();
		this.$( '.delete' ).hide();
		this.$( '.update' ).removeClass( 'hide' );
		this.$( '.cancel' ).removeClass( 'hide' );

		var $title = $( '.title' ).html();
		this.$( '.title' ).html( '<input type="text" class="form-control title-update" value="' + this.model.get( 'title' ) + '">' );
	},

	updateTask: function() {
		$updatedTitle = $( '.title-update' ).val();
		if ( !$updatedTitle.trim() ) {
			alert('enter a title');
		} else {
			this.model.set( 'title', $( '.title-update' ).val() );
		}
	},

	cancel: function() {
		this.render();
	},

	removeTask: function() {
		this.model.destroy();
	},

	remove: function() {
		this.$el.remove();
	}
});
