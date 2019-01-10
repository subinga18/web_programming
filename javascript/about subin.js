function Time() {
	
										var now=new Date();
										var hours = now.getHours(); 
										var minutes = now.getMinutes(); 
										var seconds = now.getSeconds(); 

													if(hours<10){
																hours="0"+hours;//05시 이런식으로 표현하려고 넣은것.0~9까지는 01 02 03.. 이런식으로 표현됨
													}
	
													if (hours>=10){
																hours=hours-12;
													}
	
													if(minutes<10){
																minutes="0"+minutes;
													}
	
													if(seconds<10){
																seconds="0"+seconds;
													}
	
	
 
										document.getElementById("date").value=hours+":"+minutes+":"+seconds;
							}


							setInterval("Time()");//계속해서 반복