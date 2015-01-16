
window.addEventListener("load", function () 

{
    // the code to be called when the dom has loaded
    // #document has its nodes

    changeText();
    //part 2
    createBackground();
    //part 3 + 4
    clickStrikeThrough();
    //part 5
    resetdude();

/*/ whenever gets clicked, change image with similar name
	


/*/



});

//below I'll declare the functions

//Part 1
function changeText (){
	document.getElementById("greeting").innerHTML = "Hello, Planet Earth!";
}

//part 2
function createBackground () {
	var listItem = document.getElementsByTagName("li");

	for (var i = 0; i < listItem.length; i++) {
		listItem[i].style.backgroundColor = "yellow";
	}
}

//part 3 + 4

function clickStrikeThrough (){

	function clickBox (event ) {

		event.target.classList.add("selected");
// another option is -->  event.target.className = "selected";
//select the img in DOM; set the src attribute using the events innerHTML in the image path
	/*/ var image = document.querySelector("img");
	image.setAttribute("src", "images/" + event.target.innerHTML + ".jpeg");
	/*/

	document.querySelector("img").setAttribute("src", "images/" + event.target.innerHTML + ".jpeg");

}

var box = document.getElementsByTagName("li");

for (var i = 0; i < box.length; i++) {
	box[i].addEventListener("click", clickBox); 
}
}

//part 5
function resetdude (){

	function clickReset (){


		var box = document.getElementsByTagName("li");

		for (var i = 0; i < box.length; i++) {
			box[i].classList.remove("selected");
		}
		document.querySelector("img").setAttribute("src", "images/panic.jpeg");

	}

		var reset = document.getElementById("reset");
		reset.addEventListener("click", clickReset);	

}


