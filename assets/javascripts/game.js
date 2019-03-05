//<!-- JAVASCRIPT  -->
 // <!-- ========================================= --><!-- JAVASCRIPT  -->
//  <!-- ========================================= -->
var win=0
var lose=0

  var targetNumber = Math.floor(Math.random()*(120-19+1)+19);

  $("#guessedNo").text(targetNumber);
  
  var counter = 0;
  
  // Now for the hard part. Creating multiple crystals each with their own unique number value.
  // We begin by expanding our array to include four options.
  //var numberOptions = [[], [], [], []];

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < 4; i++) {

    // For each iteration, we will create an imageCrystal
   var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "assets/images/gem2.jpeg");
     imageCrystal.attr("id","cryst"+i)
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.

    imageCrystal.attr("data-crystalvalue",Math.floor(Math.random()*12)+1);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#gems").append(imageCrystal);
  
  }
  
  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifie
    //s that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    $("#count").text(counter)

    // All of the same game win-lose logic applies. So the rest remains unchanged.
   // alert("New score: " + counter);

    if (counter === targetNumber) {
   alert("You win!");
   win ++;$("#win").text(win);
   reset ()
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      lose++;
      $("#lose").text(lose);
      reset();
      
    }

  });

  function reset (){
    counter =0;
    targetNumber = Math.floor(Math.random()*(120-19+1)+19)
    $("#guessedNo").text(targetNumber); 
     for(var i=0;i<4;i++){
      $("#cryst"+i).attr("data-crystalvalue",Math.floor(Math.random()*12)+1); 
     }
  }

