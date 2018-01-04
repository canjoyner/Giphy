var topics= ["apple", "pear","strawberry", "banana", "pineapple","grapes", "plum"];
var topic ;
var phrase;
var queryURL;


function pickGiphy() {
	var choice = $(this).attr("choiceName");
	 queryURL = ["http://api.giphy.com/v1/gifs/search?q="+ phrase +"&api_key=dc6zaTOxFJmzC"];

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
	

		$(".images").empty();
		console.log("two")
	for(var v = 0; v < 4; v++)

{
		
	var pick = response.data[v].images.original_still.url;
	var pickvid = response.data[v].images.original.mp4;
	var rating = response.data[v].rating;
	var pickSpot =$ ("<div class='store'>");
	var image =$("<img>").attr("src",pick);
			// when looking up video tags there needed to be a soure tag and a 
			// video tag. I just couldn't get it to work
	// var vid =$("<video>");
	// var vidSource = $("<source>").attr("src",pickvid)
	var testPhrase =$("<p>").text(topic);
	// pickSpot.append(vid);
	pickSpot.append(image);
	pickSpot.append(rating);

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



// this function works once to use the button to select what you would like to see
// after the initial selection you have to type in key words to change the image
$(".hero").on("click", function(){
	console.log("toggle")
	phrase = $(this).val();
	console.log(this)
	console.log(phrase)

	 pickGiphy();

})


