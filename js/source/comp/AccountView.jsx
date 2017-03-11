var AccountView = React.createClass({

	getDefaultProps: function() {
		return {
			data: {},
			users: [],
		};
	},

	getInitialState: function() {
		return {
			data: {},
			users: [],
		};
	},

	componentDidMount: function() {
		$.ajax({
			url: "/react-webpack/js/source/controllers/get_accounts.php",
			async: "false",
			dataType: "json",
			sucess: function(json) {
				console.log("success!");
				console.log(json);		
	
			},
			error:function(x, e) {
				alert(e);
			},
			complete: function(a, data) {
				var users = JSON.parse(a.responseText);
				this.setState({
					users: users,
				});
			}.bind(this)
		});
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
		var users = this.state.users;
		users.push(this.state.data);
		$.ajax({
			url: "/react-webpack/js/source/controllers/post_accounts.php",
			type: "post",
			data: this.state.data,
			success: function(data, a) {
			},
			error: function(e) {
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
	},

	render: function() {
		return (
			<div className="container">
				<form method="post">	
					<dl id="form" className="row">
						<div className="col-md-4">
							<dt>Firstname</dt>
							<dd>
								<input name="firstname" type="text" value={this.state.data.firstname} onChange={this.handleChange} />
							</dd>
							<dt>Lastname</dt>
							<dd>
								<input name="lastname" type="text" value={this.state.data.lastname} onChange={this.handleChange} />
							</dd>
							<dt>Password</dt>
							<dd>
								<input name="password" type="text" value={this.state.data.password} onChange={this.handleChange} />
							</dd>
							<dt>Email Address</dt>
							<dd>
								<input name="emailaddress" type="text" value={this.state.data.emailaddress} onChange={this.handleChange} />
							</dd>
							<dt>Submit</dt>
							<dd>
								<input type="submit" value="Submit" onClick={this.handleSave} />
							</dd>
						</div>
						<div className="col-md-8">
							<table>
								<thead>
									<tr>
										<th>Firstname</th>
										<th>Lastname</th>
										<th>Password</th>
										<th>Email address</th>
									</tr>
								</thead>
								<tbody>
								{_.map(this.state.users, function(user) {
								return (
										<tr>
											<td>{user.firstname}</td>
											<td>{user.lastname}</td>
											<td>{user.password}</td>
											<td>{user.emailaddress}</td>
										</tr>
										);	
								})}
								</tbody>
							</table>
						</div>
					</dl>
				</form>
			</div>
		);
	}

});

module.exports = AccountView;
