var DashboardView = React.createClass({
	render: function() {
		return (
			<div>
				<div style={{textAlign: "center"}}>	
					<h1 style={{marginLeft: 15}}>Cat Woof</h1>
				</div>
				<div style={{textAlign: "center"}}>  
					<img
							src="http://moziru.com/images/drawn-narwhal-rainbow-12.jpg"
							width={400} 
							height={400} 
					 />
				</div>
				<div style={{textAlign: "center", margin: "0 auto", width: 400}}> 
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		);
	}
});

module.exports = DashboardView;
