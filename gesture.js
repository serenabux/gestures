var downX, downY, upX, upY;
$("#gestureArea").mouseup(function(){
	downX = event.pageX;
	downY = event.pageY;
	gesture();
});

$("#gestureArea").mousedown(function(){
	upX = event.pageX;
	upY = event.pageY;
});

function gesture(){
	console.log("here")
	if (upX < downX){
		document.getElementById("gestureResult").innerHTML = "Swipe Left";
	}
	else if(upX > downX){
		document.getElementById("gestureResult").innerHTML = "Swipe Right";
	}
	else{
		document.getElementById("gestureResult").innerHTML = "Mouse Up";
	}
}