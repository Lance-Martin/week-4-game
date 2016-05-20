$(document).ready(function(){


//Character objects and global variables/functions
//============================================================================
  var ironMan = {
    health: 120,
    counterAttack: 8,
    attack: 8,
  };

  var capAmerica = {
    health: 100,
    counterAttack: 5,
    attack: 5,
  };

  var thor = {
    health: 150,
    counterAttack: 20,
    attack: 20,
  };

  var winterSoldier = {
    health: 180,
    counterAttack: 25,
    attack: 25,
  };

  var heroSelected = false;
  var fighter;
  var opponent;
  var opponentsLeft = 3;
  var foeSelected = false;

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
    capAmerica.health = 100;
    thor.health = 150;
    winterSoldier.health = 180;
    ironMan.counterAttack = 8;
    capAmerica.counterAttack = 5;
    thor.counterAttack = 20;
    winterSoldier.counterAttack = 25;
    characterStats();
    clicks();
  }

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
    fighter.counterAttack += fighter.attack;
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

    //if the players character is killed then notify/alert them that their character has died and then reset the game
        if (fighter.health <= 0 && opponent.health > 0) {
          $('#fightDetails').html("<p>Your hero was killed. Try again.</p>");
          alert('Your fighter was killed! Play again');
          reset();
        }
    //If the players character dies and they killed their opponent then alert them that they died but took down their opponent with them, then reset the game.
        if (fighter.health <= 0 && opponent.health <= 0) {
          $('#fightDetails').html("<p>Your hero was killed. Try again.</p>");
          alert("Your character was killed, but you died a hero. You took your opponent down with you. Play again. ");
          reset();
        }

    //Lets the player know that they have defeated their current opponent, decreases the opponentsLeft count by 1, and removes the defeated opponent from the challenger section.
        if (opponent.health <= 0 && foeSelected === true){
          opponentsLeft -=1;
          fighter.health += opponent.counterAttack; //in the demo video the player's selected hero doesn't lose health on the last hit to his enemy. This makes that possible.
          foeSelected = false;
          $('#fightDetails').empty();
          $('.challenger').empty();
          $('#fightDetails').html("<p>Well done hero. You defeated your opponent! Pick your next foe.</p>");
          console.log("opponentsLeft: "+ opponentsLeft);
        }

  //If all opponents are defeated then alert the player that they have defeated all their opponents and then reset the game for them to play again.
    if (opponentsLeft === 0) {
      alert("Amazing job hero! You've proven yourself as the best and defeated all of your challengers. Pick a new character to play again.");
      reset();
      console.log("reset");
    }

//Updates the characters displayed health affter being attacked
    characterStats();
  });

//If the player clicks the reset button then reset the game
  $('#reset').on('click', function(){
    reset();
  });
});
