var app = app || {};
/**
 * Tasks Collection
 */
app.TasksCollections = Backbone.Collection.extend({
	model: app.Task
});

// collection values
var tasksCollection = new app.TasksCollections([{
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