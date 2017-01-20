(function(){
    "use strict";



  function checkTime(){
    var nowTime = new Date();
    var nowHour = nowTime.getHours();
    var nowMinute = nowTime.getMinutes();
    var nowSecond = nowTime.getSeconds();


  document.getElementById('hours').innerHTML = ("0" + nowHour).slice(-2);
  document.getElementById('minutes').innerHTML = ("0" + nowMinute).slice(-2);
  document.getElementById('seconds').innerHTML = ("0" + nowSecond).slice(-2);


  window.setInterval(checkTime, 1000);
}

checkTime();


}());
