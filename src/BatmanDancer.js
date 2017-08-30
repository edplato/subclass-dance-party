var BatmanDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('batman');
};

BatmanDancer.prototype = Object.create(Dancer.prototype);
BatmanDancer.prototype.constructor = BatmanDancer;

BatmanDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.$node.toggle('slow', 'swing', function() {
    $(this).css('border', '10px solid yellow');
    // $(this).css('left': rando );
    // '200px');
  });

  // this.$node.slideUp("fast", )
  // this.$node.animate();

  // this.$node.animate({"margin-right": '+=200'});
  //{left: '250px'}
};

BatmanDancer.prototype.lineUp = function() {
  this.$node.css('left', '820px');
};