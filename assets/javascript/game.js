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


//On Click events for characters
//===========================================================================

  $('.ironMan').on('click', function(){
    if (heroSelected === false) {
      $('.myCharacter').append(this);
      heroSelected = true;
      fighter = ironMan;
      $(this).attr("id","fighter");
      $('#instruction').html("Pick your opponent");
      console.log(fighter.health);
    }
    else {
      $('.challenger').append(this);
      $('#instruction').html("Make them fight!");
      opponent = ironMan;
      $(this).attr("id","opponent");
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
    else {
      $('.challenger').append(this);
      $('#instruction').html("Make them fight!");
      opponent = capAmerica;
      $(this).attr("id","opponent");
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
      else {
        $('.challenger').append(this);
        $('#instruction').html("Make them fight!");
        opponent = thor;
        $(this).attr("id","opponent");
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
      else {
        $('.challenger').append(this);
        $('#instruction').html("Make them fight!");
        opponent = winterSoldier;
        $(this).attr("id","opponent");
        console.log(opponent.health);
      }
    });
//Insert character name and health
  $('.ironMan').html("<p>Iron Man</p>"+"<p> health: "+ironMan.health+"</p>");
  $('.capAmerica').html("<p>Captain America</p>"+"<p> health: "+capAmerica.health+"</p>");
  $('.thor').html("<p>Thor</p>"+"<p> health: "+thor.health+"</p>");
  $('.winterSoldier').html("<p>Winter Soldier</p>"+"<p> health: "+winterSoldier.health+"</p>");

//On click event for fight button
//=============================================================================
  $('#attackOpponent').on('click', function() {
    fighter.counterAttack += 5;
    opponent.health = opponent.health - fighter.counterAttack;
    fighter.health = fighter.health - opponent.counterAttack;
    console.log(opponent.health);
    console.log(fighter.health);

//Alerts the player that their character has died
    if (fighter.health <= 0) {
      alert('Your fighter was killed! Reload this page to play again');
    }

//Lets the player know that they have defeated their current opponent, decreases the opponentsLeft count by 1, and removes the defeated opponent from the challenger section.
    if (opponent.health <= 0){
      opponentsLeft -=1;
      alert("Well done hero. You defeated your opponent! Pick your next foe");
      $('.challenger').empty();
      console.log("opponentsLeft: "+ opponentsLeft);
    }

//Displays fight details
    if(opponent == ironMan ){
      $('#fightDetails').html("<p>You attacked Iron Man for "+fighter.counterAttack+" health points</p>"+"<p>Iron Man attacked you for "+opponent.counterAttack+" health points");
    } else if (opponent === thor) {
      $('#fightDetails').html("<p>You attacked Thor for "+fighter.counterAttack+" health points</p>"+"<p>Thor attacked you for "+opponent.counterAttack+" health points");
    } else if (opponent === capAmerica) {
      $('#fightDetails').html("<p>You attacked Captain America for "+fighter.counterAttack+" health points</p>"+"<p>Captain America attacked you for "+opponent.counterAttack+" health points");
    } else if (opponent === winterSoldier) {
      $('#fightDetails').html("<p>You attacked Winter Soldier for "+fighter.counterAttack+" health points</p>"+"<p>Winter Soldier attacked you for "+opponent.counterAttack+" health points");
    }

    function reset(){
      heroSelected = false;
      opponentsLeft = 3;
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
      $('.ironMan').html("<p>Iron Man</p>"+"<p> health: "+ironMan.health+"</p>");
      $('.capAmerica').html("<p>Captain America</p>"+"<p> health: "+capAmerica.health+"</p>");
      $('.thor').html("<p>Thor</p>"+"<p> health: "+thor.health+"</p>");
      $('.winterSoldier').html("<p>Winter Soldier</p>"+"<p> health: "+winterSoldier.health+"</p>");

    }

    if (opponentsLeft === 0) {
      reset();
      console.log("reset");
    }

//Updates the characters displayed health affter being attacked
    $('.ironMan').html("<p>Iron Man</p>"+"<p> health: "+ironMan.health+"</p>");
    $('.capAmerica').html("<p>Captain America</p>"+"<p> health: "+capAmerica.health+"</p>");
    $('.thor').html("<p>Thor</p>"+"<p> health: "+thor.health+"</p>");
    $('.winterSoldier').html("<p>Winter Soldier</p>"+"<p> health: "+winterSoldier.health+"</p>");
  });
});
