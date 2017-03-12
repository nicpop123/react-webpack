var React = require('react');
var DataTable = require('react-data-components').DataTable;
var AccountForm = require('./AccountForm.jsx');

var AccountView = React.createClass({

	getInitialState: function() {
		return {
			data: {},
			users: [],
			dialog: null,
		};
	},

	componentDidMount: function() {
		this.loadUsers();
	},
	
	loadUsers: function() {
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

	closeDialog: function(e) {
		e.preventDefault();
		$(function() {
			$dialog.dialog('close');
		});
	},

	formPopup: function(e) {
		e.preventDefault();
		$(function() {
			var $dialog = $('<div>').dialog({
				title: 'Add Account',
				width: 400,
				height: 400,
				close: function(e) {
					$(this).remove();
				}
			});
			ReactDOM.render(<AccountForm callback={this.loadUsers} />, $dialog[0]);
		}.bind(this));
	},

	handleDelete: function(e) {
		e.preventDefault();
		$.ajax({
			url: "/react-webpack/js/source/controllers/delete_accounts.php",
			type: "PUT",
			success: function(response) {
				console.log(response, "successfully deleted");
			}
		});
		this.loadUsers();
	},

	render: function() {
		var columns = [
			{title: 'First name', prop: 'firstname', width: 15},
			{title: 'Last name', prop: 'lastname', width: 15 },
			{title: 'Password', prop: 'password', width: 15},
			{title: 'Email address', prop: 'emailaddress', width: 15},
		];
		
		return (
			<div className="container hide-scroller">
				{this.state.dialog}
				<form method="post">	
					<dl id="form" className="row">
						<div className="col-md-12" style={{overflowX: "hidden"}}>
							<DataTable
								keys="id"
								columns={columns}
								initialData={this.state.users}
								initialPageLength={5}
							/>
							<button type="button" onClick={this.formPopup}>Add Account</button>
							<button type="button" onClick={this.handleDelete} style={{marginLeft: 5}}>Clear Table</button>
						</div>
					</dl>
				</form>
			</div>
		);
	}

});

module.exports = AccountView;
