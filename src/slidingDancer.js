var makeSlidingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('sliding');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //   // call the old version of step at the beginning of any call to this new version of step

  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
};

makeSlidingDancer.prototype = Object.create(makeDancer.prototype);
makeSlidingDancer.prototype.constructor = makeSlidingDancer;

makeSlidingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  makeDancer.prototype.step.call(this);
  // makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // let rando = Math.random() * (500-200) * 200;

  this.$node.toggle('slow', 'swing', function() {
    $(this).css('border', '10px solid yellow');
    // $(this).css('left': rando );
    // '200px');
  });

  // this.$node.slideUp("fast", )

  // this.$node.animate({"margin-right": '+=200'});
  //{left: '250px'}
};

makeSlidingDancer.prototype.lineUp = function() {
  this.$node.css('left', '520px');
};