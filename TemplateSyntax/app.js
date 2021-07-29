var app = new Vue({
	el: "#app", 
	data: {
		msg: "this is a message.", 
		rawHtml: '<span style = "color: red"> This should be red </span>', 
		color: 'red', 
		isButtonDisabled: false, 
		number: 10, 
		ok: true, 
		url: 'https://www.baidu.com',
		href: 'href',
		things: 'mouseover',
		contents: "doSomething"
	}, 
	methods: {
		click1 : function(){
			console.log("click1......")
		}, 
		click2: function(){
			console.log("click2......")
		}, doSomething: function(){
			console.log("do something")
		}
	}
})