postSend=(username, table, time, date, duration)=>{

  var xhr = new XMLHttpRequest();


//------------------------------------------------\\
  body='username='+encodeURIComponent(username);
  body+='&table='+encodeURIComponent(table);
  body+='&time='+encodeURIComponent(time);
  body+='&date='+encodeURIComponent(date);
  body+='&duration='+encodeURIComponent(duration);
//------------------------------------------------\\  
//body - username - table - time - date - duration\\


  xhr.open("POST", '/', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.send(body);
}