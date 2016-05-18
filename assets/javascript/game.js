$(document).ready(function(){


//Character objects and global variables
//============================================================================
  var ironMan = {
    health: 120,
    counterAttack: 8,
  };

  var capAmerica = {
    health: 110,
    counterAttack: 11,
  };

  var thor = {
    health: 95,
    counterAttack: 13,
  };

  var winterSoldier = {
    health: 115,
    counterAttack: 10,
  };

  var heroSelected = false;
  var fighter;
  var opponent;
  var opponentsLeft = 3;
  var foeSelected = false;


//On Click events for characters
//===========================================================================
function clicks() {
  $('.ironMan').on('click', function(){
    if (heroSelected === false) {
      $('.myCharacter').append(this);
      heroSelected = true;
      fighter = ironMan;
      $(this).attr("id","fighter");
      $('#instruction').html("Pick your opponent");
      console.log(fighter.health);
    }
    else if (heroSelected === true && foeSelected === false) {
      foeSelected = true;
      $('.challenger').append(this);
      $('#instruction').html("Make them fight!");
      opponent = ironMan;
      $(this).attr("id","opponent");
    }
    else {
      alert('Please defeat your current opponent before selecting another.');
    }
  });

  $('.capAmerica').on('click', function(){
    if (heroSelected === false) {
      $('.myCharacter').append(this);
      heroSelected = true;
      fighter = capAmerica;
      $(this).attr("id","fighter");
      $('#instruction').html("Pick your opponent");
    }
    else if (heroSelected === true && foeSelected === false) {
      foeSelected = true;
      $('.challenger').append(this);
      $('#instruction').html("Make them fight!");
      opponent = capAmerica;
      $(this).attr("id","opponent");
    }
    else {
      alert('Please defeat your current opponent before selecting another.');
    }
  });

    $('.thor').on('click', function(){
      if (heroSelected === false) {
        $('.myCharacter').append(this);
        heroSelected = true;
        fighter = thor;
        $(this).attr("id","fighter");
        $('#instruction').html("Pick your opponent");
      }
      else if (heroSelected === true && foeSelected === false) {
        foeSelected = true;
        $('.challenger').append(this);
        $('#instruction').html("Make them fight!");
        opponent = thor;
        $(this).attr("id","opponent");
      }
      else {
        alert('Please defeat your current opponent before selecting another.');
      }
    });

    $('.winterSoldier').on('click', function(){
      if (heroSelected === false) {
        $('.myCharacter').append(this);
        heroSelected = true;
        fighter = winterSoldier;
        $(this).attr("id","fighter");
        $('#instruction').html("Pick your opponent");
      }
      else if (heroSelected === true && foeSelected === false) {
        foeSelected = true;
        $('.challenger').append(this);
        $('#instruction').html("Make them fight!");
        opponent = winterSoldier;
        $(this).attr("id","opponent");
        console.log(opponent.health);
      }
      else {
        alert('Please defeat your current opponent before selecting another.');
      }
    });
}

clicks();
//Insert character name and health
function characterStats() {
  $('.ironMan').html("<p>Iron Man</p>"+"<p> health: "+ironMan.health+"</p>");
  $('.capAmerica').html("<p>Captain America</p>"+"<p> health: "+capAmerica.health+"</p>");
  $('.thor').html("<p>Thor</p>"+"<p> health: "+thor.health+"</p>");
  $('.winterSoldier').html("<p>Winter Soldier</p>"+"<p> health: "+winterSoldier.health+"</p>");
}

characterStats();
//On click event for fight button
//=============================================================================
  $('#attackOpponent').on('click', function() {
    if( foeSelected === true) {
    fighter.counterAttack += 5;
    opponent.health = opponent.health - fighter.counterAttack;
    fighter.health = fighter.health - opponent.counterAttack;
    console.log(opponent.health);
    console.log(fighter.health);
  }


//Displays fight details
    if(opponent == ironMan && foeSelected === true ){
      $('#fightDetails').html("<p>You attacked Iron Man for "+fighter.counterAttack+" health points</p>"+"<p>Iron Man attacked you for "+opponent.counterAttack+" health points");
    } else if (opponent === thor && foeSelected === true) {
      $('#fightDetails').html("<p>You attacked Thor for "+fighter.counterAttack+" health points</p>"+"<p>Thor attacked you for "+opponent.counterAttack+" health points");
    } else if (opponent === capAmerica && foeSelected === true) {
      $('#fightDetails').html("<p>You attacked Captain America for "+fighter.counterAttack+" health points</p>"+"<p>Captain America attacked you for "+opponent.counterAttack+" health points");
    } else if (opponent === winterSoldier && foeSelected === true) {
      $('#fightDetails').html("<p>You attacked Winter Soldier for "+fighter.counterAttack+" health points</p>"+"<p>Winter Soldier attacked you for "+opponent.counterAttack+" health points");
    }
    else {
      $('#fightDetails').html("<p>Pick a new opponent before continuing to fight");
    }

    //Alerts the player that their character has died
        if (fighter.health <= 0) {
          $('#fightDetails').html("<p>Your hero was killed. Try again.</p>");
          alert('Your fighter was killed! Play again');
          reset();
        }

    //Lets the player know that they have defeated their current opponent, decreases the opponentsLeft count by 1, and removes the defeated opponent from the challenger section.
        if (opponent.health <= 0 && foeSelected === true){
          opponentsLeft -=1;
          foeSelected = false;
          $('#fightDetails').empty();
          $('.challenger').empty();
          $('#fightDetails').html("<p>Well done hero. You defeated your opponent! Pick your next foe.</p>");
          console.log("opponentsLeft: "+ opponentsLeft);
        }



    function reset(){
      heroSelected = false;
      foeSelected = false;
      opponentsLeft = 3;
      $('#instruction').html("Select your fighter");
      $('#fightDetails').empty();
      $('.selectHero').empty();
      $('.challenger').empty();
      $('.myCharacter').empty();
      $('.selectHero').append('<div class="col-md-2 ironMan"></div>');
      $('.selectHero').append('<div class="col-md-2 capAmerica"></div>');
      $('.selectHero').append('<div class="col-md-2 thor"></div>');
      $('.selectHero').append('<div class="col-md-2 winterSoldier"></div>');
      ironMan.health = 120;
      capAmerica.health = 110;
      thor.health = 95;
      winterSoldier.health = 115;
      ironMan.counterAttack = 8;
      capAmerica.counterAttack = 11;
      thor.counterAttack = 13;
      winterSoldier.counterAttack = 10;
      characterStats();
      clicks();

    }

    if (opponentsLeft === 0) {
      alert("Amazing job hero! You've proven yourself as the best and, defeated all of your challengers. Pick a new character to play again.");
      reset();
      console.log("reset");
    }

//Updates the characters displayed health affter being attacked
    characterStats();
  });
});
