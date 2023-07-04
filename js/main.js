

	// function clock(){
		// let date = new Date();
		// let hour = date.getHours();
		// let minute = date.getMinutes();
		// let second = date.getSeconds();
		// let session = "AM";
		
		// if(hour>12){
			// session="PM";
		// }
		
		// let time=hour+":"+minute+":"+second+":"+session;
		
		// document.getElementById("clock").innerText = time;
         // }
    // setInterval(clock,1000)
	
	 function clock(){
	let today=new Date();



let hour=document.getElementById("hour");
let hours=today.getHours();
	hour.innerHTML=hours;

let session=document.getElementById("session");
let sessions="AM";
   if(hour>12){
	   let sessions="PM";	
}
	session.innerHTML=sessions;

let minutes=document.getElementById("minutes");
let minute=today.getMinutes();
	minutes.innerHTML=minute;


let sec=document.getElementById("seconds")
let second=today.getSeconds();
	sec.innerHTML=second;
	
	
let day=document.getElementById("day")
let days=today.getDay();
	day.innerHTML=days;
	
let date=document.getElementById("date")
let dates=today.getDate();
	date.innerHTML=dates;
	
	
let month=document.getElementById("month")
let months=today.getMonth()+1;
	month.innerHTML=months;
	
let year=document.getElementById("year")
let years=today.getFullYear();
	year.innerHTML=years;
}
setInterval(clock,1000);
		