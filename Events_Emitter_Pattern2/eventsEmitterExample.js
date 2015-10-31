var Bus = require('./bus');
var bus = new Bus(4);

bus.on('start',function(){
  console.log("Bus Started");
});

bus.on('moving',function(cnt){
  console.log("Bus moving: "+cnt);
});

bus.on('reached',function(){
  console.log("Bus arrived at destination!!");
});