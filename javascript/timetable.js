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


function table1_onmouseover(){
		table1.innerText="Global Center 103";
  }
  function table1_onmouseout(){
		table1.innerText="Practical English D1";
  }

  function table2_onmouseover(){
		table2.innerText="Vision Tower B208D";
  }
  function table2_onmouseout(){
		table2.innerText="Computer Programming";
  }
function table3_onmouseover(){
		table3.innerText="Vision Tower B208D";
  }
  function table3_onmouseout(){
		table3.innerText="Computer Programming";
  }
  function table4_onmouseover(){
		table4.innerText="Vision Tower 402";
  }
  function table4_onmouseout(){
		table4.innerText="History and imagination";
  }

  function table5_onmouseover(){
		table5.innerText="Vision Tower B208B";
  }
  function table5_onmouseout(){
		table5.innerText="Web Programming";
  }
  function table6_onmouseover(){
		table6.innerText="Vision Tower B208B";
  }
  function table6_onmouseout(){
		table6.innerText="Web Programming";
  }
function table7_onmouseover(){
		table7.innerText="IT univ 412";
  }
  function table7_onmouseout(){
		table7.innerText="Discrete mathematics";
  }
  function table8_onmouseover(){
		table8.innerText="IT univ 412";
  }
  function table8_onmouseout(){
		table8.innerText="Discrete mathematics";
  }