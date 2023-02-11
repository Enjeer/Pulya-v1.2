const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(`<!DOCTYPE html>
<head><title>Pulya Booking</title>
  <meta charset="utf-8">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
</head>
<body>  
  <div class="container-fluid">
      <form name="data-form" id="datF">
        <p class = "h2">Бронирование стола</p>
          <div class="form-group">
            <input type = "text" id="name" class="form-control" placeholder="Имя">
          </div>    
          <div class="form-group">
            <p class="h3">Выбор стола:</p>
            <div class="form-check">
              <input type="radio" id="pool" name="table" class="form-check-input">
              <label class="form-check-label" for="pool">Пул</label>
            </div>
            <div class="form-check">
              <input type="radio" id="piramid" name="table" class="form-check-input">
              <label class="form-check-label" for="piramid">Русская пирамида</label>
            </div>
          </div> 
          <div class="form-group">
            <input type="date" id="date" class="form-control" placeholder="Дата">
          </div>
          <div class="form-group">
            <input type="time" id="time" class="form-control" placeholder="Время">
          </div>
          <div class="input-group">
            <select class="form-control custom-select" id="customSelect">
              <option selected value="none">Количество часов...</option>
              <option value="1">1 час</option>
              <option value="2">2 часа</option>
              <option value="3">3 часа</option>
              <option value="4">4 часа</option>
              <option value="5">5 часов</option>
              <option value="6">6 часов</option>
              <option value="7">7 часов</option>
              <option value="8">8 часов</option>
            </select>
          </div><br>
        </form>
          <input type="submit" id="btn" class="btn btn-primary" value="Подтвердить">
    </div>
<script src="script.js"></script>
</body>
  </html>


    `);
}).listen(8000,()=>console.log('server is on')); 

