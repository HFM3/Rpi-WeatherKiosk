var url = "https://api.darksky.net/forecast/"
var apiKey = "DARK SKY API KEY GOES HERE"

var jsonR;

var count = 0;


var city = "Boston, MA"
var lat = "42.358770"
var lng = "-71.057182"


// currently
var currentlySummary;
var currentlyIcon;
var minutelySummary;
var todayTempMinTime;
var todayTempMin;
var currentTemp;
var todayTempMax;
var todayTempMaxTime;
var currentlyFeelsLike;
var currentlyTime;

// hourly

var hourlySummary;

// hour 1
var hourly_1_time;
var hourly_1_icon;
var hourly_1_summary;
var hourly_1_temp;

// today info
var today;
var monthDayYear;
var currentTime;
var sunrise;
var sunset;
var moonPhase;


// future info

var dailySummary;

// tomorrow
var day_1_icon;
var day_1_tempMin;
var day_1_tempMax;

// tomorrow + 1
var day_2_day;
var day_2_icon;
var day_2_tempMin;
var day_2_tempMax;

// tomorrow + 2
var day_3_day;
var day_3_icon;
var day_3_tempMin;
var day_3_tempMax;

// alert
var alertTitle;
var alertDesc;
var alertTime;
var alertExpire;





var fullURL = url + apiKey + "/" + lat + "," + lng + "?callback=?";


window.onload = function getWeather(){
	$.getJSON(fullURL,function(jsonFetch) {
		
		jsonR = jsonFetch;
		//console.log(jsonR, "JSON Written")
		console.log("New Weather Info Fetched")
		
		count = count + 1;
		console.log("Count: " + count);
		
		if (count === 14) {
			setTimeout(function(){location.reload();}, 475000);
			console.log("set to reload in 7 minutes 55 seconds");
		};
			
		
		// currently
		currentlySummary = jsonR.currently.summary;
		currentlyIcon = jsonR.currently.icon;
		minutelySummary = jsonR.minutely.summary;
		minutelySummary = minutelySummary.substr(0, minutelySummary.length-1); //removes period at end of summary
		todayTempMinTime = new Date((jsonR.daily.data[0].temperatureMinTime)*1000).toLocaleTimeString('en-us', {hour: '2-digit'});
		todayTempMin = jsonR.daily.data[0].temperatureMin;
		currentTemp = jsonR.currently.temperature;
		todayTempMax = jsonR.daily.data[0].temperatureMax;
		todayTempMaxTime = new Date((jsonR.daily.data[0].temperatureMaxTime)*1000).toLocaleTimeString('en-us', {hour: '2-digit'});
		currentlyFeelsLike = jsonR.currently.apparentTemperature;
		currentlyTime = new Date((jsonR.currently.time)*1000).toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit', second:'2-digit'});
		
		document.getElementById("title").innerHTML = currentlyTime + " " + city;
		document.getElementById("location").innerHTML = city;
		document.getElementById("currentlySummary").innerHTML = currentlySummary;
		document.getElementById("currentlyIcon").className = currentlyIcon;
		document.getElementById("minutelySummary").innerHTML = minutelySummary;
		document.getElementById("currentlyFeelsLike").innerHTML = "Feels like: " + currentlyFeelsLike.toFixed(1);
		document.getElementById("todayTempMinTime").innerHTML = todayTempMinTime;
		document.getElementById("todayTempMin").innerHTML = todayTempMin.toFixed(0) + "&nbsp;";
		document.getElementById("currentTemp").innerHTML = currentTemp.toFixed(0) + "&deg;";
		document.getElementById("todayTempMax").innerHTML = todayTempMax.toFixed(0);
		document.getElementById("todayTempMaxTime").innerHTML = todayTempMaxTime;

		
		// hourly
		
		hourlySummary = jsonR.hourly.summary;
		hourlySummary = hourlySummary.substr(0, hourlySummary.length-1); //removes period at end of summary
		
		document.getElementById("hourlySummary").innerHTML = hourlySummary;

		
		// hour 1
		
		var hour1 = 1;
		var hour2 = 2;
		var hour3 = 3;
		var hour4 = 5;
		var hour5 = 7;
		
		hourly_1_time = new Date((jsonR.hourly.data[hour1].time)*1000).toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'});
		hourly_1_icon = jsonR.hourly.data[hour1].icon;
		hourly_1_summary = jsonR.hourly.data[hour1].summary;
		hourly_1_temp = jsonR.hourly.data[hour1].temperature;
		
		document.getElementById("hourly_1_time").innerHTML = hourly_1_time;
		document.getElementById("hourly_1_icon").className = hourly_1_icon;
		document.getElementById("hourly_1_summary").innerHTML = hourly_1_summary;
		document.getElementById("hourly_1_temp").innerHTML = hourly_1_temp.toFixed(0) + "&deg;F";
		
		// hour 2
		hourly_2_time = new Date((jsonR.hourly.data[hour2].time)*1000).toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'});
		hourly_2_icon = jsonR.hourly.data[hour2].icon;
		hourly_2_summary = jsonR.hourly.data[hour2].summary;
		hourly_2_temp = jsonR.hourly.data[hour2].temperature;
		
		document.getElementById("hourly_2_time").innerHTML = hourly_2_time;
		document.getElementById("hourly_2_icon").className = hourly_2_icon;
		document.getElementById("hourly_2_summary").innerHTML = hourly_2_summary;
		document.getElementById("hourly_2_temp").innerHTML = hourly_2_temp.toFixed(0) + "&deg;F";
		
		// hour 3
		hourly_3_time = new Date((jsonR.hourly.data[hour3].time)*1000).toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'});
		hourly_3_icon = jsonR.hourly.data[hour3].icon;
		hourly_3_summary = jsonR.hourly.data[hour3].summary;
		hourly_3_temp = jsonR.hourly.data[hour3].temperature;
		
		document.getElementById("hourly_3_time").innerHTML = hourly_3_time;
		document.getElementById("hourly_3_icon").className = hourly_3_icon;
		document.getElementById("hourly_3_summary").innerHTML = hourly_3_summary;
		document.getElementById("hourly_3_temp").innerHTML = hourly_3_temp.toFixed(0) + "&deg;F";
		
		// hour 4
		hourly_4_time = new Date((jsonR.hourly.data[hour4].time)*1000).toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'});
		hourly_4_icon = jsonR.hourly.data[hour4].icon;
		hourly_4_summary = jsonR.hourly.data[hour4].summary;
		hourly_4_temp = jsonR.hourly.data[hour4].temperature;
		
		document.getElementById("hourly_4_time").innerHTML = hourly_4_time;
		document.getElementById("hourly_4_icon").className = hourly_4_icon;
		document.getElementById("hourly_4_summary").innerHTML = hourly_4_summary;
		document.getElementById("hourly_4_temp").innerHTML = hourly_4_temp.toFixed(0) + "&deg;F";
		
		// hour 5
		hourly_5_time = new Date((jsonR.hourly.data[hour5].time)*1000).toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'});
		hourly_5_icon = jsonR.hourly.data[hour5].icon;
		hourly_5_summary = jsonR.hourly.data[hour5].summary;
		hourly_5_temp = jsonR.hourly.data[hour5].temperature;
		
		document.getElementById("hourly_5_time").innerHTML = hourly_5_time;
		document.getElementById("hourly_5_icon").className = hourly_5_icon;
		document.getElementById("hourly_5_summary").innerHTML = hourly_5_summary;
		document.getElementById("hourly_5_temp").innerHTML = hourly_5_temp.toFixed(0) + "&deg;F";
		
		// today info
		sunrise = new Date((jsonR.daily.data[0].sunriseTime)*1000).toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'});
		sunset = new Date((jsonR.daily.data[0].sunsetTime)*1000).toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'});
		moonPhase = jsonR.daily.data[0].moonPhase*100;
		
		document.getElementById("sunrise").innerHTML = sunrise;
		document.getElementById("moonPhaseTitle").innerHTML = "Phase";
		document.getElementById("sunset").innerHTML = sunset;
		document.getElementById("moonPhase").innerHTML = moonPhase.toFixed(1) + "%";
		
		// future info
		dailySummary = jsonR.daily.summary;
		
		document.getElementById("dailySummary").innerHTML = dailySummary;
		
		// tomorrow
		day_1_day = "Tomorrow";
		day_1_icon = jsonR.daily.data[1].icon;
		day_1_tempMin = jsonR.daily.data[1].temperatureMin;
		day_1_tempMax = jsonR.daily.data[1].temperatureMax;
		
		document.getElementById("day_1_day").innerHTML = day_1_day;
		document.getElementById("day_1_icon").className = day_1_icon;
		document.getElementById("day_1_tempMin").innerHTML = day_1_tempMin.toFixed(0) + "/";
		document.getElementById("day_1_tempMax").innerHTML = day_1_tempMax.toFixed(0);
		
		// tomorrow + 1
		day_2_day = new Date((jsonR.daily.data[2].time)*1000).toLocaleDateString('en-us', {weekday: "long"});
		day_2_icon = jsonR.daily.data[2].icon;
		day_2_tempMin = jsonR.daily.data[2].temperatureMin
		day_2_tempMax = jsonR.daily.data[2].temperatureMax;
		
		document.getElementById("day_2_day").innerHTML = day_2_day;
		document.getElementById("day_2_icon").className = day_2_icon;
		document.getElementById("day_2_tempMin").innerHTML = day_2_tempMin.toFixed(0) + "/";
		document.getElementById("day_2_tempMax").innerHTML = day_2_tempMax.toFixed(0);
		
		// tomorrow + 2
		day_3_day = new Date((jsonR.daily.data[3].time)*1000).toLocaleDateString('en-us', {weekday: "long"});
		day_3_icon = jsonR.daily.data[3].icon;
		day_3_tempMin = jsonR.daily.data[3].temperatureMin;
		day_3_tempMax = jsonR.daily.data[3].temperatureMax;
		
		document.getElementById("day_3_day").innerHTML = day_3_day;
		document.getElementById("day_3_icon").className = day_3_icon;
		document.getElementById("day_3_tempMin").innerHTML = day_3_tempMin.toFixed(0) + "/";
		document.getElementById("day_3_tempMax").innerHTML = day_3_tempMax.toFixed(0);
		
		// alerts
		
		if (jsonR.alerts !== undefined){
			alertTitle = jsonR.alerts[0].title;
			alertDesc = jsonR.alerts[0].description;
			alertTime = new Date((jsonR.alerts[0].time)*1000).toLocaleDateString('en-us',{});
			alertExpire = new Date((jsonR.alerts[0].expires)*1000).toLocaleDateString('en-us',{});
			
			document.getElementById("alertTitle").innerHTML = alertTitle;
			document.getElementById("alertDesc").innerHTML = alertDesc;
		}
		else {
			document.getElementById("alertTitle").innerHTML = "";
			document.getElementById("alertDesc").innerHTML = "";
		};
			

		var icons = new Skycons(),
				list  = ["clear-day", "clear-night", "partly-cloudy-day", "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind", "fog"], i;
			for(i = list.length; i--; ) {
				var weatherType = list[i],
					elements = document.getElementsByClassName( weatherType );
				for (e = elements.length; e--;){
					icons.set( elements[e], weatherType );
				};
			};
		icons.play();
		
		//jsonR = null;
		//console.log(jsonR, "json Cleared");

		
	});
	
	setTimeout(getWeather, 480000);
	//console.log("timmer Set");
	console.log(new Date);
	
};


