$(document).ready(function(){
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

  if (heroSelected === false){
    heroSelected = false;
    $('.ironMan').on('click', function(){
      $('.myCharacter').append(this);
      heroSelected = true;
      $(this).attr("id","fighter");
      $('#instruction').html("Pick your opponent");
      console.log(heroSelected);
    });

    $('.capAmerica').on('click', function(){
      $('.myCharacter').append(this);
      heroSelected = true;
      $(this).attr("id","fighter");
      $('#instruction').html("Pick your opponent");
      console.log(heroSelected);
    });

    $('.thor').on('click', function(){
      $('.myCharacter').append(this);
      heroSelected = true;
      $(this).attr("id","fighter");
      $('#instruction').html("Pick your opponent");
      console.log(heroSelected);
    });

    $('.winterSoldier').on('click', function(){
      $('.myCharacter').append(this);
      heroSelected = true;
      $(this).attr("id","fighter");
      $('#instruction').html("Pick your opponent");
      console.log(heroSelected);
    });
  }
  else if(heroSelected === true) {
    $('.ironMan').on('click', function(){
      $('.challenger').append(this);
      $('#instruction').html("Make them fight!");
      alert("it works!");
    });

    $('.capAmerica').on('click', function(){
      $('.challenger').append(this);
      $('#instruction').html("Make them fight!");
      alert("it works!");
    });

    $('.thor').on('click', function(){
      $('.challenger').append(this);
      $('#instruction').html("Make them fight!");
      alert("it works!");
    });

    $('.winterSoldier').on('click', function(){
      $('.challenger').append(this);
      $('#instruction').html("Make them fight!");
      alert("it works!");
    });
  }

//Insert character name and health
  $('.ironMan').html("<p>Iron Man</p>"+"<p> health: "+ironMan.health+"</p>");
  $('.capAmerica').html("<p>Captain America</p>"+"<p> health: "+capAmerica.health+"</p>");
  $('.thor').html("<p>Thor</p>"+"<p> health: "+thor.health+"</p>");
  $('.winterSoldier').html("<p>Winter Soldier</p>"+"<p> health: "+winterSoldier.health+"</p>");
});
