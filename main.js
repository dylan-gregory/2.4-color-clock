(function(){
    "use strict";



    var clockFace = document.querySelector('.current-time');
    var isHovering = false;

  function checkTime(){
    var nowTime = new Date();
    var nowHour = nowTime.getHours();
    var nowMinute = nowTime.getMinutes();
    var nowSecond = nowTime.getSeconds();
    var progress = nowSecond/200 * 100;
    var clockDisplay;

    document.getElementById('hours').innerHTML = ("0" + nowHour).slice(-2);
    document.getElementById('minutes').innerHTML = ("0" + nowMinute).slice(-2);
    document.getElementById('seconds').innerHTML = ("0" + nowSecond).slice(-2);


    // if (nowSecond < 30) {
    //  document.querySelector('.bg').style.backgroundColor = '#3444C4';
    //  }
    //  if(nowSecond > 30) {
    //    document.querySelector('.bg').style.backgroundColor = '#98C3A1';
    //  }

    // function colorDisplay(nowHour, nowMinute, nowSecond){
    //   nowHour =
    // }

    document.querySelector('.bg').style.backgroundColor = ('#' + nowHour + nowMinute + nowSecond).toString(16);


    document.getElementById('status-bar').style.width = progress + "%";
    document.getElementById('status-bar2').style.width = progress + "%";


    // function colorCode(nowHour, nowMinute, nowSecond){
    //   nowHour = nowHour.toString(16);
    //   nowMinute = nowHour.toString(16);
    //   nowSecond = nowSecond.toString(16);
    //
    //   return [nowHour, nowMinute, nowSecond];
    // }

    if (isHovering) {
    /*use colorCode(hours, minutes seconds from bottom) */
      document.getElementById('hours').innerHTML = ("0" + nowHour.toString(16)).slice(-2);
      document.getElementById('minutes').innerHTML = ("0" + nowMinute.toString(16)).slice(-2);
      document.getElementById('seconds').innerHTML = ("0" + nowSecond.toString(16)).slice(-2);

    }else {
      document.getElementById('hours').innerHTML = ("0" + nowHour).slice(-2);
      document.getElementById('minutes').innerHTML = ("0" + nowMinute).slice(-2);
      document.getElementById('seconds').innerHTML = ("0" + nowSecond).slice(-2);
    }

}





function handleMouseOut(){
  isHovering = false;
}


function colorDisplay(){
  var nowTime = new Date();
  var nowSecond = nowTime.getSeconds();
  isHovering = true;

  document.getElementById('hours').innerHTML = "01";
  document.getElementById('minutes').innerHTML = '23';
  document.getElementById('seconds').innerHTML = ("0" + nowSecond).slice(-2);


}


clockFace.addEventListener('mouseover', colorDisplay);
clockFace.addEventListener('mouseout', handleMouseOut);

checkTime();
window.setInterval(checkTime, 50);



/* how to get hex code from current time

// function colorCode(nowHour, nowMinute, nowSecond){
//   nowHour = nowHour.toString(16);
//   nowMinute = nowMinute.toString(16);
//   nowSecond = nowSecond.toString(16);
//
//   return [nowHour, nowMinute, nowSecond];
// }
*/





}());
