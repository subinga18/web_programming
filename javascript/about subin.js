function Time() {
	
										var now=new Date();
										var hours = now.getHours(); 
										var minutes = now.getMinutes(); 
										var seconds = now.getSeconds(); 

													if(hours<10){
																hours="0"+hours;//05�� �̷������� ǥ���Ϸ��� ������.0~9������ 01 02 03.. �̷������� ǥ����
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


							setInterval("Time()");//����ؼ� �ݺ�