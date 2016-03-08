define([ 'underscore', 'backbone', 'models/taskModel' ], function( _, Backbone, Task ) {
	'use strict';

	var TasksCollections = Backbone.Collection.extend({
		model: Task
	});
	return new TasksCollections();
});