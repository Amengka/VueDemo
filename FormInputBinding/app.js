var app = new Vue({
	el: "#app", 
	data: {
		message: "", 
		message2: "", 
		checkedNames: [], 
		checked: false,
		picked: "", 
		selected: '', 
		options: [
			{text: 'one', value: 'a'}, 
			{text: 'two', value: 'b'}, 
			{text: 'three', value: 'c'}
		], 
		MultiSelected: []
	}, 
	methods: {
		submit:function(){
			var postObj = {
				msg1: this.message,
				msg2: this.message2,
				checkVal: this.checkedNames
			}
			console.log(postObj)
		}
	}
})