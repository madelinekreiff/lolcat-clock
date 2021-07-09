var time = new Date().getHours();
var image = document.getElementById("lolcat");
var message = document.getElementById("timeEvent");
var clock = document.getElementById("clock");
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var newImage = "";
var isPartyTime = false;

var updateClock = function () {
	if (time == partyTime){
		newImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
		messageText = "IZ PARTEE TIME!!";
	} else if (time == napTime) {
		newImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		messageText = "IZ NAP TIME...";
	} else if (time == lunchTime) {
		newImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		messageText = "IZ NOM NOM NOM TIME!!";
	} else if (time == wakeupTime) {
		newImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
		messageText = "IZ TIME TO GETTUP.";
	} else if (time < noon) {
		newImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
		messageText = "Good morning!";
	} else if (time > evening) {
		newImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
		messageText = "Good Evening!";
	} else {
		newImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
		messageText = "Good afternoon!";
	}
	
	image.src = newImage;
	message.innerText = messageText;

	showTime();
}; // end updateClock();

var showTime = function () {
	var hours = new Date().getHours();
	var minutes = new Date().getMinutes();
	var seconds = new Date().getSeconds();
	var meridian = "AM";
	
	if (hours >= 12) {
		meridian = "PM";
	}
	if (hours > 12) {
		hours -= 12;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	
	var currentTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
	clock.innerText = currentTime;
}; // end showTime();

setInterval(updateClock, 1000);
updateClock();

var partyEvent = function () {
	if (isPartyTime === false) {
		isPartyTime = true;
		time = partyTime;
		partyTimeButton.innerText = "Party Over";
partyTimeButton.style.backgroundColor = "#0a8dab";
	} else {
		isPartyTime = false;
		time = new Date().getHours();
		partyTimeButton.innerText = "PARTY TIME!";
partyTimeButton.style.backgroundColor = "#222";
	}
};

partyTimeButton.addEventListener("click", partyEvent);

wakeUpTimeSelector.addEventListener("change", function (e) {
	wakeupTime = e.target.value;
});

lunchTimeSelector.addEventListener("change", function (e) {
	lunchTime = e.target.value;
});

napTimeSelector.addEventListener("change", function (e) {
	napTime = e.target.value;
});