var app = new Vue({
	el: '#app',
	data: {
		msg: 'hello'
	}, 
	computed:{
		reversedMsg: function()
		{
			return this.msg.split('').reverse().join('')
		}
	}, 
	methods: {
		reversedMsg2: function(){
			return this.msg.split('').reverse().join('')
		}
	}
})