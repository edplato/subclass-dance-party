var MegamanDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('megaman');
};

MegamanDancer.prototype = Object.create(Dancer.prototype);
MegamanDancer.prototype.constructor = MegamanDancer;

MegamanDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.on();
};

MegamanDancer.prototype.lineUp = function() {
  this.$node.css('left', '720px');
};