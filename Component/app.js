Vue.component("button-counter", {
	props: ['title'],
	data: function(){           //这里data为一个函数的原因是为了让每个实例可以维护一份被返回对象的独立的拷贝
		                                        //如果变为函数将会变成类似全局变量的效果
		return {
			count: 0
		}
	}, 
	//若要在template中添加多个渲染需要用<div></div>包裹起来
	/*template: '	
	<div>
	<h1>hi...</h1>
	<button v-on:click = "count++">You clicked me {{count}} times. </button>
	</div>'
	*/
	//也可以在template里使用method
	template: '	<button v-on:click = "clickFun" >{{title}}You clicked me {{count}} times. </button>', 
	//template: '	<button v-on:click = "count++">You clicked me {{count}} times. </button>'
	methods: {
		clickFun: function(){
			this.count++
			this.$emit('clicknow', this.count)
		}
	}
})

var app = new Vue({
	el: '#app', 
	data: {

	}, 
	methods: {
		clicknow2: function(e){
			console.log(e)
		}, 
		clicknow3: function(e){
			console.log("text" + e)
		}
	}
})