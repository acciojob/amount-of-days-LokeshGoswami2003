//your JS code here. If required.
let daysOfAYear=(year)=>{
	return (year%400==0 ||(year%4==0 && year%100!=0))?"366":"365";
}
let year=prompt("year");  
alert(daysOfAYear(year));