define([ 'underscore', 'backbone' ], function( _, Backbone ) {
	'use strict';

	var Task = Backbone.Model.extend({
		defaults: {},
		validate: function( attrs, options ) {
			if ( !trim( attrs.title ) ) {
				return 'Enter a title';
			}
		}
	});
	return Task;
});

