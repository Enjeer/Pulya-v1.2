btn.onclick = function(){
    var name=document.getElementById("name").value,
           date=document.getElementById("date").value,table,r1,r2,
           time=document.getElementById("time").value,
           rad1=document.getElementById("pool"),
           rad2=document.getElementById("piramid"),
           duration=document.getElementById("customSelect").value,
           r1=rad1.checked,r2=rad2.checked;
   
       nameVer=function(){
         if(name==""){
           return name='none';
         }else{
           return secName=name, name=`указано имя: ${name}`;
         }
       }
   
       timeVer=function(){
         if(time==""){
           return time='none';
         }else{
           return secTime=time, time=`на время: ${time}`;
         }
       }
   
       dateVer=function(){
         if(date==""){
           return date='none';
         }else{
           return secDate=date, date=`Выбранная дата: ${date}`;
         }
       }   
   
       getTable=function(){
           if(r1==true){
             return table='Пул';
           }else if(r2==true){
             return table='Пирамида';
           }else{
             return table='none';
           }
       }
       durationVer=function(){
           if(duration=='none'){
            return duration='none';
           }else{
            return duration;
           }
       }
       
       run=function(){
         if(name!='none'){
            if(table!=='none'){
               if(date!='none'){
                  if(time!='none'){
                    if(duration!='none'){
   
               fetch(`https://hook.eu1.make.com/76i6v5hv1hwpbccifvqslga7h4m4r0gt?name=${secName}&date=${secDate}&time=${secTime}&table=${table}&duration=${duration}`)
               .then(response=>{
                 if(response.status==220){
                   fetch(`https://api.telegram.org/bot5743621724:AAErCluP0nFuZKwp8vTDw7gy6bjKWCrCEug/sendMessage?chat_id=-891328291&text=Поступил заказ: Указанное имя: ${name}. Выбранный стол: ${table}. ${date} ${time}. На ${duration}`)
               .catch(err=>alert(`1`+err));
                 alert('Забронировано');
                 }else{
                   alert('Время занято');
                 }
               })
        .catch(err=>alert(`2`+err));
                     }else{
                       alert('Продолжительность не выбрана');
                     }
                  }else{
                   alert('Время не выбрано!');
                  }
               }else{
                 alert('Дата не выбрана!');
               }
            }else{
             alert('Стол не выбран!');
            }
         }else{
           alert('Укажите имя!');
         }
       }
   getTable();
   
   nameVer();
   
   timeVer();
   
   dateVer();
   
   durationVer();
   
   run();
   
     }