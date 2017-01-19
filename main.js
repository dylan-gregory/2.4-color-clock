(function(){
    "use strict";

  var hours = document.querySelector('.current-time .hours');
  var minutes = document.querySelector('.current-time .minutes');
  var seconds = document.querySelector('.current-time .seconds');
  var nowTime = new Date();

  var nowHour = now.getHours();
  var nowMinute = now.getMinutes();
  var nowSecond = now.getSeconds();

  // var everySecond = setInterval(function() {
  //       document.querySelector('.seconds').textContent = Date.now();
  //     }, 36000);



// function tickingTime(nowTime){
//   hours.textContent = interval[0];
//   minutes.textContent = interval[1];
//   seconds.textContent = interval[2];
//
//   printToScreen(tickingTime);
//   return tickingTime;
// }
//
//
//

function checkTime(){
        window.setInterval((nowSecond), 1000);
        

    }
checkTime();
//

}());
