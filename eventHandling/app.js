var app = new Vue({
	el: '#app', 
	data: {
		type: "A", 
		ok: false, 
		name: "Vue.js"
	}, 
	methods:{
		greet: function(event){
			alert("hello " + this.name + "!")
			if(event){ //event为DOM原生事件
				alert(event.target.tagName)
			}
		}, 
		say: function(text){
			alert(text)
		}
	}
})