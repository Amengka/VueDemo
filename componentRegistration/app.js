Vue.component('button-counter', {
	props:['title'], 
	data: function(){
		return {}
	}, 
	template: '<div><h1>hi...</h1></div>', 
	methods:{
	}
})


var app = new Vue({
	el: '#app', 
	data: {

	}, 
	methods: {
		clicknow: function(e)
		{
			console.log(e)
		}
	}, 
	//创建局部组件
	components: {
		test: {
			template: '<h2>h2...</h2>', 
			//methods:{}, 
			//data:{}
		}
	}
})


//局部注册的组件在其子组件不可用 若要使其使用 需要写为

//var ComponentA = { /* ... */ }

//var ComponentB = {
	//components: {
	//  'component-a': ComponentA
	//},
	//// ...
  //}