var app = new Vue ({
	el: "#app", 
	data: {
		msg: "hi, vue",
	}, 

	//生命周期函数
	beforeCreate: function() {
		console.log("beforeCreate")
	}, 
	created: function() {
		console.log("created")
	}, 
	beforeMount: function() {
		console.log("beforeMount")
	},
	mounted: function(){
		console.log("mounted")
	}, 
	beforeUpdate: function(){
		console.log("beforeUpdate")
	}, 
	updated: function(){
		console.log("updated")
	}
})

setTimeout(function(){
	app.msg = "changed......"
}, 3000)