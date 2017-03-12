var AccountForm = React.createClass({

	getDefaultProps: function() {
		return {
		};
	},
	
	getInitialState: function() {
		return {
			data: {},
		};
	},

	handleChange: function(e) {
		var data = this.state.data;
 	 	data[e.target.name] = e.target.value;
  		this.setState({
  	 		data: data,
 		 });
 	},

	handleSave: function() {
		$.ajax({
			url: "/react-webpack/js/source/controllers/post_accounts.php",
			type: "post",
			data: this.state.data,
			success: function(data) {
			},
			error: function(data) {
			},
			complete: function(a, data) {
				var clear = {
					firstname: '',
					lastname: '',
					password: '',
					emailaddress: '',
				};
				this.setState({
					data: clear
				});
			}.bind(this)
		});
		this.props.callback();
	},

	render: function() {
		return (
			<div style={{width: 200, height: 200}}>
				<form method="post">
					<dl id="form" className="row" >
						<div className="col-sx-12">
							<dt>Firstname</dt>
							<dd>
								<input name="firstname" type="text" value={this.state.data.firstname || ''} onChange={this.handleChange} />
							</dd>
							<dt>Lastname</dt>
							<dd>
								<input name="lastname" type="text" value={this.state.data.lastname || ''} onChange={this.handleChange} />
							</dd>
							<dt>Password</dt>
							<dd>
								<input name="password" type="text" value={this.state.data.password || ''} onChange={this.handleChange} />
							</dd>
							<dt>Email Address</dt>
							<dd>
								<input name="emailaddress" type="text" value={this.state.data.emailaddress || ''} onChange={this.handleChange} />
							</dd>
							<dd>
								<button type="button" className="btn btn-default btn-lg" onClick={this.handleSave}>Submit</button>
							</dd>
						</div>
					</dl>
				</form>
			</div>
		);
	},
});
module.exports = AccountForm;	
