var MegamanDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('megaman');
};

MegamanDancer.prototype = Object.create(Dancer.prototype);
MegamanDancer.prototype.constructor = MegamanDancer;

MegamanDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // let rando = Math.random() * (500-200) * 200;

  this.$node.toggle('slow', 'swing', function() {
    $(this).css('background-size', '10px 10px');
    // $(this).css('left': rando );
    // '200px');
  });

  // this.$node.slideUp("fast", )
  // this.$node.animate();

  // this.$node.animate({"margin-right": '+=200'});
  //{left: '250px'}
};

MegamanDancer.prototype.lineUp = function() {
  this.$node.css('left', '520px');
};