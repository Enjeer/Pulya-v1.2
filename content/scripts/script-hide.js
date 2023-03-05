const buttonClass=document.getElementById("btn").className;
viewportChangeButton=()=>{
  var SIZE_H=visualViewport.height,
      SIZE_W=visualViewport.width;


      Sizing=()=>{
  if(SIZE_H>SIZE_W){
    document.getElementById("upperTXT").style="font-size:4.5vh;";
  document.getElementById("username").style="font-size:4.5vh;";
  document.getElementById("table_choice").style="font-size:4.5vh;";
  document.getElementById("pool").style=`height:5vh;
                                         width:5vh;`;
  document.getElementById("piramid").style=`height:5vh;
                                            width:5vh;
                                            margin-top:3vh;`;
  document.getElementById("Pool").style="font-size:3.5vh; padding-left:3vh; margin-left:1.5vh; font-weight:500;";
  document.getElementById("Piramid").style="font-size:3.5vh; padding-left:3vh; margin-top:2.5vh; margin-left:1.5vh; font-weight:500;";
  document.getElementById("date").style="font-size:4.5vh; margin-top:2vw;";
  document.getElementById("time").style="font-size:4.5vh; margin-top:2vw;";
  document.getElementById("customSelect").style="font-size:4.5vh; margin-top:0.8vw;";
  document.getElementById("btn").style="font-size:5vh; padding:1vh;";
  }else{
  document.getElementById("upperTXT").style="font-size:3vw;";
  document.getElementById("username").style="font-size:3vw;";
  document.getElementById("table_choice").style="font-size:3vw;";
  document.getElementById("pool").style=`height:2vw;
                                         width:2vw;
                                         padding-right:3vw;`;
  document.getElementById("piramid").style=`height:2vw;
                                            width:2vw;
                                            margin-top:1vw;`;
  document.getElementById("Pool").style="font-size:2vw; padding-left:1vw; font-weight:500;";
  document.getElementById("Piramid").style="font-size:2vw; padding-left:1vw; margin-top:0.5vw; font-weight:500;";
  document.getElementById("date").style="font-size:2vw;";
  document.getElementById("time").style="font-size:2vw;";
  document.getElementById("customSelect").style="font-size:2vw;";
  document.getElementById("btn").style="font-size:3vw; padding:1vw; width:28vw; height:8vw;";
  }
}


  if(SIZE_H>SIZE_W){
    document.getElementById("btn").className=`${buttonClass} fixed-bottom`;
    Sizing();
  }else{
    document.getElementById("btn").className=buttonClass;
    Sizing();
  }
}
viewportChangeButton();
addEventListener("resize",viewportChangeButton);