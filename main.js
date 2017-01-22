(function(){
    "use strict";



  function checkTime(){
    var nowTime = new Date();
    var nowHour = nowTime.getHours();
    var nowMinute = nowTime.getMinutes();
    var nowSecond = nowTime.getSeconds();
    var progress = nowSecond/200 * 100;

    document.getElementById('hours').innerHTML = ("0" + nowHour).slice(-2);
    document.getElementById('minutes').innerHTML = ("0" + nowMinute).slice(-2);
    document.getElementById('seconds').innerHTML = ("0" + nowSecond).slice(-2);


    // if (nowSecond < 30) {
    //  document.querySelector('.bg').style.backgroundColor = '#3444C4';
    //  }
    //  if(nowSecond > 30) {
    //    document.querySelector('.bg').style.backgroundColor = '#98C3A1';
    //  }
    document.querySelector('.bg').style.backgroundColor = '#' + '0123' + nowSecond;


  document.getElementById('status-bar').style.width = progress + "%";
  document.getElementById('status-bar2').style.width = progress + "%";


}


function colorDisplay(){
  document.getElementById('hours').innerHTML = "01";
  document.getElementById('minutes').innerHTML = '23';
  document.getElementById('seconds').innerHTML = nowSecond;

}



checkTime();
window.setInterval(checkTime, 1000);
document.querySelector(".current-time").addEventListener('mouseover', colorDisplay);

//
//
// function colorDisplay(){
//   if (document.querySelector('.bg').style.backgroundColor = '#3444C4') {
//     document.getElementById('hours').innerHTML = "C4";
//     document.getElementById('minutes').innerHTML = "44";
//     document.getElementById('seconds').innerHTML = "34";
//   }
//   if (document.querySelector('.bg').style.backgroundColor = '#98C3A1') {
//     document.getElementById('hours').innerHTML = "98";
//     document.getElementById('minutes').innerHTML = "C3";
//     document.getElementById('seconds').innerHTML = "A1";
//   }





}());
