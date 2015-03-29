# React_Exercise
Building a widget in React. Play it!


Speed!

	React rends in 60 fps 
	Render < 16ms

Declarative

	Easier to reason about
	Easier to prevent bugs

Composable


Our Hello world.



var Hello = React.createClass({
	render: function(){
		return <div>Hello {this.props.name}</div>
	}
});	

React.renderComponent(<Hello name="world" />, 
	document.body);


