(function(){
    "use strict";



  function checkTime(){
    var nowTime = new Date();
    var nowHour = nowTime.getHours();
    var nowMinute = nowTime.getMinutes();
    var nowSecond = nowTime.getSeconds();
    var progress = nowSecond/120 * 100;


  document.getElementById('hours').innerHTML = ("0" + nowHour).slice(-2);
  document.getElementById('minutes').innerHTML = ("0" + nowMinute).slice(-2);
  document.getElementById('seconds').innerHTML = ("0" + nowSecond).slice(-2);


if (nowSecond < 30) {
 document.querySelector('.bg').style.backgroundColor = '#61AFEF';
 }else {
   document.querySelector('.bg').style.backgroundColor = '#98C379';
 }

 // if (document.querySelector('.bg').style.backgroundColor = '#61AFEF' && 'hover') {
 //
 // }

document.getElementById('status-bar').style.width = progress + "%";




}
checkTime();
window.setInterval(checkTime, 1000);






}());
