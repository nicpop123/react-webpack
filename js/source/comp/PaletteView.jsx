var React = require('react');

var PaletteView = React.createClass({
		
	getInitialState: function() {
		return {
			data: {
				background: 'white'
			}
		};
	},

	handleChange: function(e) {
		var data = this.state.data; 
		data.background = e.target.value;
		this.setState({
			data: data
		});
	},
	
	render: function() {
		return (
			<div style={_.assign({display: 'flex', justifyContent: 'center', alignItems: 'center', height: 500, width: '100%'},this.state.data)} >
				<input type="text" onChange={this.handleChange}/>
			</div>
		);
	}
});

module.exports = PaletteView;
