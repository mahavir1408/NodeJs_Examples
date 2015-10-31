var BusInfo = require('./busInfo');
var info = BusInfo.getBusInfo(4);

info.on('start',function(){
  console.log("Bus Started");
});

info.on('moving',function(cnt){
  console.log("Bus moving: "+cnt);
});

info.on('reached',function(){
  console.log("Bus arrived at destination!!");
});