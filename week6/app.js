
function task() {

	var item    = document.getElementById('taskInput').value
	
	var text    = document.createTextNode(item)

	var newItem = document.createElement('li')

	newItem.appendChild(text)
	document.getElementById('do').appendChild(newItem)
	
	
	
}
