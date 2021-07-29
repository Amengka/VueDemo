var app5 = new Vue ({
	el: '#app-5', 
	data: {
		message: "Hello Vue!"
	}, 
	methods: {
		reverse: function() {
			this.message = this.message.split(' ').reverse().join(' ')
		}
	}
})