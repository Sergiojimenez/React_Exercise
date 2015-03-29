
<script>
/** @jsx React.Dom */

var Hello = React.createClass({
	render: function(){
		return <div>Hello {this.props.name}</div>
	}
});	

React.renderComponent(<Hello name="world" />, 
	document.body);

</script>

 
