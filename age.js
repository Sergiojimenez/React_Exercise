/** @jsx React.Dom */
(function () {
	'use strict';

	var ShowState = React.createClass({
		getInitialState: function () {
			var answer = {answer: 32};
			return answer; 
		},
		render: function () {
			return (
				<div> my state is {this.state.answer}</div>
				)
		}
	})

	React.render(
		<ShowState />, document.getElementById('age'));
})();