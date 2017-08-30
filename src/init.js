$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * (2000 - 500) + 500
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    // iterate over global dancer array
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  // unlineup button/functionality - need to know how many of each dancer

  $('.unLineButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      let newHeight = $('body').height() * Math.random();
      let newWidth = $('body').width() * Math.random();
      window.dancers[i].setPosition(newHeight, newWidth);
    }
  });
  // delete dancers (clears the dance floor)

  $('.slidingMegaMan').mouseenter(function() {
    $('.slidingMegaMan').css('border', '10px solid blue');
  });

  $('.slidingMegaMan').mouseleave(function() {
    $('.slidingMegaMan').css('border', '10px solid green');
  });

});

