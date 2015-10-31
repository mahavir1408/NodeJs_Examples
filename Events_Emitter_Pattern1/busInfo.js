var EventEmitter = require('events').EventEmitter;
var getBusInfo = function(count){
  var emitter = new EventEmitter();
  
  process.nextTick(function(){
    emitter.emit('start');
    var t = setInterval(function(){
      emitter.emit('moving',count);
      --count;
      if(count<=0){
        emitter.emit('reached');
        clearInterval(t);
      }
    },1000);
  });
  return(emitter);
};
module.exports.getBusInfo = getBusInfo;