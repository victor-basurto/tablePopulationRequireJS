(function() {
	
	// collection instance with new values
	var addTask = new app.AddTaskView({ collection: tasksCollection });


	// collection instance
	var taskView = new app.TasksViews({ collection: tasksCollection });
	$( '.tasks' ).append( taskView.render().el );
	
})();