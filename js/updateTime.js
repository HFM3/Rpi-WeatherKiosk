function updateTime(){
	var now = Date.now();
	
	var today = new Date(now).toLocaleDateString('en-us', {weekday: "long"});
	var monthDayYear = new Date(now).toLocaleDateString('en-us', {month: "long", day: "numeric", year: "numeric"});
	var currentHour = new Date(now).toLocaleTimeString('en-us',{hour: "numeric", hour12: false});
	var currentMinute = new Date(now).toLocaleTimeString('en-us',{minute: "numeric", hour12: false});
	var currentSecond = new Date(now).toLocaleTimeString('en-us',{second: "numeric", hour12: false});
	
	if (currentHour > 12) {
		currentHour = currentHour -12;
		//if (currentHour < 10) {
			//currentHour = "0" + currentHour;
		//};
	};
	
	if (currentHour == 0){
		currentHour = 12;
	};
	
	if (currentMinute < 10) {
			currentMinute = "0" + currentMinute;
		};
		
	if (currentSecond < 10) {
			currentSecond = "0" + currentSecond;
		};
	
	
	document.getElementById("today").innerHTML = today;
	document.getElementById("monthDayYear").innerHTML = monthDayYear;
	document.getElementById("currentHour").innerHTML = currentHour + ":";
	document.getElementById("currentMinute").innerHTML = currentMinute;
	document.getElementById("currentSecond").innerHTML = currentSecond;
	
	
	var timeRefresh = setTimeout(updateTime, 1000);
	
	//console.log(currentHour + ":" + currentMinute  + ":" + currentSecond);
};

updateTime();
