var app = new Vue({ 
	el: "#app", 
	data: {
		items:  [
			{message: "Foo"}, 
			{message: "Bar"}
		], 
		object: {
			title: "how to do lists in vue", 
			author: "Jane Doe", 
			publishedAt: '2016-04-10'
		}
	}
})