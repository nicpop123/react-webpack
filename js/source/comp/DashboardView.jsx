var DashboardView = React.createClass({

	logBooleans: function() {
		
	},


/*

Cut a string
var welcome = "Hello";
var cut = welcome.substring(0, 3);
console.log(cut);  -> "Hell";

console.log(welcome.length) -> 5

*/

	logLoops: function() {
		var strBuilder = "";
		for(var i = 1; i < 12; i++) {
			strBuilder = strBuilder + "*";
			console.dir(strBuilder);
		}
	},



	logObjects: function() {
		var arr = [1, 4, 123, 422, 78];
		var output = _.map(arr, function(value, key) { 
			console.log(value, key);
			return value;
		});
		var arr2 = [true, false, false, true, true];
  console.log(arr2);
		var bool = arr2[0];
		console.log(bool);
		var arr4 = [{}, 1, "dog"];
		console.log(arr4[0]);
		var blah = {jibber: "elephant"};
		console.log(blah.jibber);
		var person = {eyeColor: "green", hairColor: "brown", firstName: "Nicole", age: 150, baby: {weight: 100, gender: "m", eyeColor: "blue"}};
		console.log(person.baby.gender); 
		var animals = {pets: ["dog", "cat", "fish"], color: "orange", size: "m", amount: 13};		
		console.log(animals.pets[1]); 	
	},

	render: function() {
		this.logBooleans();
		this.logObjects();
		this.logLoops();
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

	answerKey: function() {
		var strBuilder = "";
		for(var i = 1; i < 12; i++) {
			strBuilder = strBuilder + "*";
			console.dir(strBuilder);
		}
		var strEnding = "**********";
		for (var i = 1; < 11; i++) {
			strEnding = strEnding.substring(0, strEnding.length - 1);
			console.log(strEnding);
		}
	},



});

module.exports = DashboardView;
