function createDiv(width, height, text) {
	var newDiv = document.createElement('div');

    newDiv.style.width = width + 'px';  
    newDiv.style.height = height + 'px';  
    newDiv.textContent = text;  

    var container = document.getElementById('container');
    container.appendChild(newDiv);
    
}

Window.createDiv = createDiv;