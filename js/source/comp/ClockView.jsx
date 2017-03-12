var React = require('react');

var ClockView = React.createClass({

	getInitialState: function() {
		var date = this.getTimeString();
		return {
			time: date,
		};
	},

	getTimeString: function() {
		const date = new Date(Date.now()).toLocaleTimeString();
		return date;
	},
	
	componentDidMount: function() {
		const _this = this;
		this.timer = setInterval(function() {
			var date = _this.getTimeString();
			_this.setState({
				time: date
			})
		}, 1000);
	},

	componentWillUnmount: function() {
		clearInterval(this.timer);
	},

	render: function() {
		return (
			<p style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Helvetica Neue', color: '#333'}}>{this.state.time}</p>
		);
	},

});

module.exports = ClockView;
