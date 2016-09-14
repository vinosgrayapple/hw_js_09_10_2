 // = document.querySelectorAll(".dropdown2");
var dropdown = document.querySelectorAll("li.dropdown2"),index;

for (index = 0; index < dropdown.length; index++) {
    dropdown2 = dropdown[index];
    dropdown2.addEventListener('mouseenter', dropdownHandler);
}

function dropdownHandler(){
	this.childNodes[2].style.display = "block";
}

    button.addEventListener('dblclick', doubleClickHandler);
dropdown.addEventListener("click", function(){
	this.style.display = "block";
	// alert("button was clicked");
});
