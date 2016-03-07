var app = app || {};
/**
 * Task Model
 */
app.Task = Backbone.Model.extend({
	defaults: {},
	validate: function( attrs, options ) {
		if ( !trim( attrs.title ) ) {
			return 'Enter a title';
		}
	}
});
