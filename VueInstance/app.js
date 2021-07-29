var obj = {
	foo: "bar"
}

//Object.freeze(obj)  //终止响应 - obj内的值不再发生变化

var app = new Vue ({
	el: "#app",
	data: obj
})

//$app.watch可以观察更改对象前后的值
app.$watch('foo', function(newVal, oldVal) {
	console.log(newVal, oldVal)
})

app.$data.foo = 1