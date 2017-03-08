var AccountView = React.createClass({

	getDefaultProps: function() {
		return {
			data: {},
		};
	},

	getInitialState: function() {
		var data = this.props.data;
		return {
			data: data,
		};
	},

	handleChange: function(e) {
		var data = this.state.data;
		data[e.target.name] = e.target.value;
		this.setState({
			data: data,
		});
	},

	handleSave: function(e) {
		e.preventDefault();

	},

	render: function() {
		return (
			<div className="container">
				<form method="post">	
					<dl id="form" className="row">
						<dt>Firstname</dt>
						<dd>
							<input name="firstname" type="text" onChange={this.handleChange} />
						</dd>
						<dt>Lastname</dt>
						<dd>
							<input name="lastname" type="text" onChange={this.handleChange} />
						</dd>
						<dt>Password</dt>
						<dd>
							<input name="password" type="text" onChange={this.handleChange} />
						</dd>
						<dt>Email Address</dt>
						<dd>
							<input name="emailaddress" type="text" onChange={this.handleChange} />
						</dd>
						<dt>Submit</dt>
						<dd>
							<input type="submit" value="Submit" onClick={this.handleSave} />
						</dd>
					</dl>
				</form>
			</div>
		);
	}

});

module.exports = AccountView;
