describe('megamanDancer', function() {

  var megamanDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    megamanDancer = new MegamanDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(megamanDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(megamanDancer.$node, 'toggle');
    megamanDancer.step();
    expect(megamanDancer.$node.toggle.called).to.be.true;
  });

  it('should have a top property of 10', function() {
    expect(megamanDancer.top).to.equal(10);
  });

  it('should have a left property of 20', function() {
    expect(megamanDancer.left).to.equal(20);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(megamanDancer, 'step');
      expect(megamanDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(megamanDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(megamanDancer.step.callCount).to.be.equal(2);
    });
  });
});
