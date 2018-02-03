var React = require('react');
var UserView = React.createClass({

	getInitialState: function() {
		return {
			users: [],
		};
	},

	render: function() {
		var columns = [
			{title: 'First name', prop: 'firstname'},
			{title: 'Last name', prop: 'lastname'},
			{title: 'Description', prop: 'description'},
			{title: 'Address', prop: 'address'},
			{title: 'Phone Number', prop: 'phonenumber'},
			{title: 'Email', prop: 'emailaddress'},
			{title: 'teacher', prop: '_teacher_name'},
		];
		var rows = this.state.users;
		return (
			<div className="container">
				<dl className="row">
					<div className="col-md-12">
						<button type="button" onClick={this.formPopup}>Add User</button>
					</div>
				</dl>
			</div>
		);
	}
});

module.exports = UserView;
