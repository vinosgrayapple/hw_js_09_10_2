var dropdown = document.querySelectorAll("li.dropdown2");

for (index = 0; index < dropdown.length; index++) {
    dropdown2 = dropdown[index];
    dropdown2.addEventListener('mouseenter', function() {
    	var sm = this.children[1];
    	sm.style.display = "block";
    });
    dropdown2.addEventListener('mouseleave', function() {
    	var sm = this.children[1];
    	sm.style.display = "none";
    });
}

