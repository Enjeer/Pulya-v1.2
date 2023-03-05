postSend=(username, table, time, date, duration, response)=>{

  var xhr = new XMLHttpRequest();


//------------------------------------------------\\
  body='username='+encodeURIComponent(username);
  body+='&table='+encodeURIComponent(table);
  body+='&time='+encodeURIComponent(time);
  body+='&date='+encodeURIComponent(date);
  body+='&duration='+encodeURIComponent(duration);
//------------------------------------------------\\  
//body - username - table - time - date - duration\\

xhr.responseType = 'text';

  xhr.onload=()=>{
    alert(xhr.responseText);
  }

  xhr.open("POST", '/', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.send(body);
}