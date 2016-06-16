var outputEl = document.getElementById('outputTarget');

// Type in textArea, then click 'create' button
// to create unlimited tennis balls
var create = document.getElementById('create');
create.addEventListener('click', function handleCreateButtonEvent () {
	outputEl.innerHTML += `
		<div id="square" class="matter">
			<h4>${textArea.value}</h4>
		</div>
	`
});

var square = document.getElementById('square');


var destroy = document.getElementById('destroy');
var last = outputEl.lastchild;

console.log(last);
destroy.addEventListener('click', function handleDestroyButtonEvent () {	
  outputEl.removeChild(last);
});
















// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, 
// create a new card element in the DOM. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, 
// should then be removed from the DOM. Not just made invisible, actually removed from the DOM.