describe('batmanDancer', function() {

  var batmanDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    batmanDancer = new BatmanDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(batmanDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(batmanDancer.$node, 'toggle');
    batmanDancer.step();
    expect(batmanDancer.$node.toggle.called).to.be.true;
  });

  it('should have a top property of 10', function() {
    expect(batmanDancer.top).to.equal(10);
  });

  it('should have a left property of 20', function() {
    expect(batmanDancer.left).to.equal(20);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(batmanDancer, 'step');
      expect(batmanDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(batmanDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(batmanDancer.step.callCount).to.be.equal(2);
    });
  });
});
