var http=require('http')
    fs=require('fs')
    path=require('path')
    express=require('express')
    app=express();
var url='localhost'
    port=8000,
    quest=0;

    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'keyCk4dfCMdYgVGoD'}).base('appv7IDze9p0Jiuqn');    

    const moment=require('moment');


//parser----------------------------------------------------------------parse


var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


//----------------------------------------------------------------------!parse

//connect static content------------------------------------------------static
app.use(express.static(path.join(__dirname, 'content')));
app.use(express.urlencoded({extended: true}))
//----------------------------------------------------------------------!static

//-----------------------INNER SERVER CODE------------------------------ISC


app.listen(port,()=>{
  console.log('server is on');


//requests and response-------------------------------------------------rr


app.post('/',async function(req, res){
  var username=req.body.username,
      table=req.body.table,
      DateTime=`${req.body.date} ${req.body.time}`,
      answer=0,
      preDuration_=moment(req.body.duration, "H:mm");

UserDate=new Date(DateTime);
preDuration=new Date(preDuration_);

var userY=UserDate.getFullYear(),
    userMon=UserDate.getMonth()+1,
    userD=UserDate.getDate(),
    userH=UserDate.getHours(),
    userMin=UserDate.getMinutes(),
    duration=preDuration.getHours(),
    answer=0;

//GET DATA FROM AITABLE-------------------------------------------------GDFA
let promise = new Promise((resolve,reject)=>{

base('Tasks').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 10,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {


        A_table=record.get('Table');
        A_duration=record.get('Duration');
        EndTime=new Date(record.get('End Time'));

var endY=EndTime.getFullYear(),
    endMon=EndTime.getMonth()+1,
    endD=EndTime.getDate(),
    endH=EndTime.getHours(),
    endMin=EndTime.getMinutes();


        parsedDate=`${endY}-${endMon}-${endD} ${endH}:${endMin}`;


//CHECK_FUNCTION--------------------------------------------------------Check

check=()=>{
    if(A_table==table&&endY==userY&&endMon==userMon&&endD==userD&&((endH>userH)||(((userH+preDuration_)>endH-A_duration)&&(userH+preDuration_<endH))||(endH==userH&&endMin>userMin))){
        return answer+=1,
        console.log(userMin, endMin);
    }else{

    }
 }
 
//----------------------------------------------------------------------!Check


check();

    });
    if(answer>0){
    resolve('NO');
    }else{
    resolve('YES');
    }
    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return;}
});

});

//----------------------------------------------------------------------!GDFA


var telegramMessage=`ПОСТУПИЛ ЗАКАЗ.
%0AИмя - ${username}.
%0AВыбранный стол - ${table} .
%0AДата и время - ${DateTime} .
%0AПродолжительность - ${duration} час(а) `;


let result=await promise;

if(result!='NO'){
    console.log(duration);
    res.send('Забронировано удачно');
    console.log('YES');
    fetch(`https://api.telegram.org/bot5743621724:AAErCluP0nFuZKwp8vTDw7gy6bjKWCrCEug/sendMessage?chat_id=-891328291&text=${telegramMessage}`)
                 .catch(err=>alert(`1`+err));

                 
                 base('Tasks').create([
                   {
                     "fields": {
                       "Name": username,
                       "Table": table,
                       "Start Time": UserDate,
                       "Duration": duration
                     }
                   }
                 ], function(err, records) {
                   if (err) {
                     console.error(err);
                     return;
                   }
                   records.forEach(function (record) {
                     console.log(record.getId());
                   });
                 });

    }else{
    res.send(`Время занято`);
}


});
//----------------------------------------------------------------------!rr

//---------------------</INNER SERVER CODE------------------------------!ISC
}); 

             /*
             */