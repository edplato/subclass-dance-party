var BatmanDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('batman');
};

BatmanDancer.prototype = Object.create(Dancer.prototype);
BatmanDancer.prototype.constructor = BatmanDancer;

BatmanDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.on();
};

BatmanDancer.prototype.lineUp = function() {
  this.$node.css('left', '1080px');
};