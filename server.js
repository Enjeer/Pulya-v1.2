var http=require('http')
    fs=require('fs')
    path=require('path')
    express=require('express')
    app=express();
var router=express.Router()
var url='localhost'
    port=8000;


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


app.post('/', function(req, res){
  console.log(req.body.username)
});


//----------------------------------------------------------------------!rr

//---------------------</INNER SERVER CODE------------------------------!ISC
}); 

             /*
                   fetch(`https://api.telegram.org/bot5743621724:AAErCluP0nFuZKwp8vTDw7gy6bjKWCrCEug/sendMessage?chat_id=-891328291&text=Поступил заказ`)
               .catch(err=>alert(`1`+err));
              })   : Указанное имя:${name}. Выбранный стол: ${table}. ${date} ${time}. На ${duration}
        .catch(err=>alert(`2`+err)); */