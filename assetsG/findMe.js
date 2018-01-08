var topics= ["apple", "pear","strawberry", "banana", "pineapple","grapes", "plum"];
var topic ;
var phrase;
var queryURL;
var still;


function pickGiphy() {
	var choice = $(this).attr("choiceName");
	 queryURL = ["https://api.giphy.com/v1/gifs/search?q="+ phrase +"&rating=pg&api_key=dc6zaTOxFJmzC"];

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
	

		$(".images").empty();
		console.log("two")
	for(var v = 0; v < 4; v++)

{
		// look for me to undo 
	var pick = response.data[v].images.original_still.url;
	var pickVid = response.data[v].images.downsized.url;
	var rating = response.data[v].rating;
	var pickSpot =$ ("<div class='store'>");
	// var image =$("<img>").attr("src",pick, 
	// 							"imageStill",pick,
	// 							"imageAnimate",pickVid,
	// 							"dataState", "still");

	var image =$("<img>").attr("src",pickVid);
		image.addClass(".display");
		image.addClass(".dataState",still);
		image.addClass(".dataStill",pick);
		image.addClass(".dataAnimate",pickVid);
			// when looking up video tags there needed to be a soure tag and a 
			// video tag. I just couldn't get it to work
	// var vid =$("<video>");
	// var vidSource = $("<source>").attr("src",pickvid)
	var testPhrase =$("<p>").text(topic);
	// pickSpot.append(vid);
	pickSpot.append(image);
	pickSpot.append(rating);
	console.log(image)

	$(".images").prepend(pickSpot);
}


			
		makeButtons();
		
	});
}

function makeButtons() {

$(".buttons").empty();
console.log("he")
for(var i=0; i < topics.length; i++){
	var a = $("<button>");
	a.addClass("hero");
	a.attr("heroName",topics[i]);
	a.text(topics[i]);
	a.val(topics[i]);
	$(".buttons").append(a);
	}
}



$("#add-idea").on("click", function(event){

	event.preventDefault();
	var topic = $("#ask-input").val().trim();

	topics.push(topic);
	console.log(topic)

	makeButtons();
	$("#add-idea").text("");
	phrase = topic;
	console.log(phrase)

})

makeButtons();


$(document).on("click", "#add-idea",pickGiphy);

$(document).on("click", ".hero", clickable );

$(document).on("click", ".store", swap );

// this function works once to use the button to select what you would like to see
// after the initial selection you have to type in key words to change the image

function clickable() {

	console.log("toggle")
	phrase = $(this).val();
	console.log(this)
	console.log(phrase)

	 pickGiphy();


}

function swap(){
	var state = $(this).attr("dataState");
	console.log(state)
	if (state === "still") {
        $(this).attr("src", $(this).attr("dataAnimate"));
        $(this).attr("dataState", "animate");
      } else {
        $(this).attr("src", $(this).attr("dataStill"));
        $(this).attr("dataState", "still");
      }
}