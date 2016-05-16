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

  $('.ironMan').on('click', function(){
    if (heroSelected === false) {
      $('.myCharacter').append(this);
      heroSelected = true;
      $(this).attr("id","fighter");
      $('#instruction').html("Pick your opponent");
      console.log(heroSelected);}
    else {
      $('.challenger').append(this);
      $('#instruction').html("Make them fight!");
      alert("it works!");
    }
  });

  $('.capAmerica').on('click', function(){
    if (heroSelected === false) {
      $('.myCharacter').append(this);
      heroSelected = true;
      $(this).attr("id","fighter");
      $('#instruction').html("Pick your opponent");
      console.log(heroSelected);}
    else {
      $('.challenger').append(this);
      $('#instruction').html("Make them fight!");
      alert("it works!");
    }
  });

    $('.thor').on('click', function(){
      if (heroSelected === false) {
        $('.myCharacter').append(this);
        heroSelected = true;
        $(this).attr("id","fighter");
        $('#instruction').html("Pick your opponent");
        console.log(heroSelected);}
      else {
        $('.challenger').append(this);
        $('#instruction').html("Make them fight!");
        alert("it works!");
      }
    });

    $('.winterSoldier').on('click', function(){
      if (heroSelected === false) {
        $('.myCharacter').append(this);
        heroSelected = true;
        $(this).attr("id","fighter");
        $('#instruction').html("Pick your opponent");
        console.log(heroSelected);}
      else {
        $('.challenger').append(this);
        $('#instruction').html("Make them fight!");
        alert("it works!");
      }
    });
//Insert character name and health
  $('.ironMan').html("<p>Iron Man</p>"+"<p> health: "+ironMan.health+"</p>");
  $('.capAmerica').html("<p>Captain America</p>"+"<p> health: "+capAmerica.health+"</p>");
  $('.thor').html("<p>Thor</p>"+"<p> health: "+thor.health+"</p>");
  $('.winterSoldier').html("<p>Winter Soldier</p>"+"<p> health: "+winterSoldier.health+"</p>");
});
