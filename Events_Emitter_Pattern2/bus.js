var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Bus(count){
  var self = this;
  process.nextTick(function(){
    self.emit('start');
    var t = setInterval(function(){
      self.emit('moving',count);
      --count;
      if(count<=0){
        self.emit('reached');
        clearInterval(t);
      }
    },1000);
  });
};
util.inherits(Bus,EventEmitter);

module.exports = Bus;