var DashboardView = React.createClass({
	render: function() {
		var arr = [1, 4, 123, 422, 78];
		var arr2 = [true, false, false, true, true];
  console.log(arr2);
		var bool = arr2[0];
		console.log(bool);

		return (
			<div>
				
				<div style={{textAlign: "center"}}>  
					<img
							src="https://image.freepik.com/free-vector/unicorn-background-design_1324-79.jpg"
							width={400} 
							height={400} 
					 	style={{border: "1px solid #ccc"}}
					/>
				</div>
				<div style={{textAlign: "center"}}>	
					<h1 style={{marginLeft: 15}}>unicorn</h1>
				</div>
				<div style={{textAlign: "center", margin: "0 auto", width: 400, border: "1px solid #ccc"}}> 
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		);
	}
});

module.exports = DashboardView;
