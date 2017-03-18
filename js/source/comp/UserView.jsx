var React = require('react');
var DataTable = require('react-data-components').DataTable;
var UserForm = require('./UserForm.jsx');
var Table = require('fixed-data-table-2').Table;
var Column = require('fixed-data-table-2').Column;
var Cell = require('fixed-data-table-2').Cell;
var UserView = React.createClass({

	getInitialState: function() {
		return {
			users: [],
		};
	},

	componentDidMount: function() {
		this.loadUsers();
	},

	loadUsers: function() {
		$.ajax({
			url: '/react-webpack/js/source/controllers/get_users.php',
			async: 'false',
			dataType: 'json',
			success: function(e) {
			},
			error: function(e) { 
			},
			complete: function(a, data) {
				var users = JSON.parse(a.responseText);
				this.setState({
					users: users,
				});
			}.bind(this)	
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
				title: 'Add User',
				width: 950,
				height: 400,
				close: function(e) {
					$(this).remove();
				},
				position: {
					at:'center',
					my: 'center',
					of: window
				}
			});
			ReactDOM.render(<UserForm callback={this.loadUsers} />, $dialog[0]);
		}.bind(this));
	},

	rowGetter: function(rowIndex) {
		return this.state.users[rowIndex];
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
						<Table 
							rowHeight={50}
							rowsCount={rows.length}
							width={800}
							height={500}
							headerHeight={50}>
							<Column 
								header={<Cell>First Name</Cell>}
								cell={(_.map(rows, function(row) {
									return <Cell>{row.firstname}</Cell>;
								}))}		
								width={200}
							/>
						</Table>
						<button type="button" onClick={this.formPopup}>Add User</button>
					</div>
				</dl>
			</div>
		);
	}
});

module.exports = UserView;
