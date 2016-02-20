// var pew = $("#myAd img");

//instantiate a TimelineLite    
// var tl = new TimelineLite();
// tl.to(".envato", 5, {x:"111px"});

//add a from() tween at the beginning of the timline
// tl.from(".ads-container img", 5, {opacity:1, scale:0});



$("#play").click(function() {
		tl.play();
});
		
$("#pause").click(function() {
		tl.pause();
});
		
$("#reverse").click(function() {
		tl.reverse();
});
		
$("#resume").click(function() {
		tl.resume();	
});

$("#stagger").click(function() {
		tl.play("stagger");	
});
		
$("#restart").click(function() {
		tl.restart();
});

//when the timeline updates, call the updateSlider function
tl.eventCallback("onUpdate", updateSlider);
	
$("#slider").slider({
  range: false,
  min: 0,
  max: 100,
  step:.1,
  slide: function ( event, ui ) {
    tl.pause();
    //adjust the timeline's progress() based on slider value
    tl.progress( ui.value/100 );
    }
});	
		
function updateSlider() {
  $("#slider").slider("value", tl.progress() *100);
} 	

// tl.progress(1) autostart