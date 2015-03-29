/** @jsx React.DOM */
(function(){
	'use strict';
	// Model 
	var post = {
		title: 'React v0.5',
		content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
		comments: ['Lorem','ipsum','dolor','atsolo']
	};

var Post = React.createClass({
	render: function() {
		return (
			<div>
				<h1>{this.props.data.title}</h1>
				<p>{this.props.data.content}</p>
				<h2>comments</h2>

				{this.props.data.comments.map(function(comments) {
					return <Comment content={comments} />;
				})}

			< /div>);
	}
});

var Comment = React.createClass({
	render: function() {
		return <div>{this.props.content}</div>
	}
});


React.render(
		<Post data={post} />, document.getElementById('example_post')
	);
})();
