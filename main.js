var money = 10000;
document.getElementById('money').innerHTML = money;

var stavka = 0;
document.getElementById('yuo').innerHTML = stavka;

var my_score = 0;
document.getElementById('final_money').innerHTML = my_score;

var enemy_score = 0;
document.getElementById('enemy_money').innerHTML = enemy_score; 


function money_off(){
    var monet_to_play = document.getElementById('money_to_casion').value;
    var monet = parseFloat(monet_to_play);
    var local_stavka = parseFloat(stavka);
    var money_local = parseFloat(money);
  if(monet >= money_local){
    alert('нехватает лавэ');
  }
  else{
    local_stavka += monet;
    stavka = local_stavka;
    fast_check_stavka();
    document.getElementById('yuo').innerHTML = stavka;
  }
}


function fast_check_stavka(){
  if(stavka > money){
    alert('нехватает лавэ');
    stavka = 0;
    document.getElementById('yuo').innerHTML = stavka;
  }
}


function money_on(){
  var monet_to_play = document.getElementById('money_to_casion').value;
  var monet = parseFloat(monet_to_play);
  var local_stavka = parseFloat(stavka);
  if(local_stavka == 0){

    alert('НЕЛЬЗЯ!!!');
  }
  else{
    local_stavka = stavka - monet;
    stavka = local_stavka;
    document.getElementById('yuo').innerHTML = stavka;
  }

}


var card_number =     [1,2,3,4,5,6,7,8,9,10,10,10,10]


function your_card(){
    var rand;
    var value; 
    i = 4 ;
    do {
        rand = Math.floor(Math.random()*card_number.length);
        value = card_number[rand];
        if(i>2){
          my_score += value;
        }
        else{
          enemy_score +=value;
        }
        i--;
    }
    while(i);
    document.getElementById('final_money').innerHTML = my_score;
    document.getElementById('enemy_money').innerHTML = enemy_score;
}


function plus_card_player(){
  var new_card;
  var total;
  total  = Math.floor(Math.random()*card_number.length);
  new_card = card_number[total];
  var total_money = new_card + my_score;
  my_score = total_money;
  document.getElementById('final_money').innerHTML = total_money; 
  if(my_score > 21){
    alert('you lose');
    money -= stavka;
}
document.getElementById('money').innerHTML = money;
restrat_game();
}


function check_enemy_number(){
  while(true){
  if(enemy_score < 17){
      card_plus_enemy();
  }
  else if(enemy_score > 21) {
    alert('you win');
    money += stavka;
    break;
  }
  document.getElementById('money').innerHTML = money;
}
restrat_game();
}


function card_plus_enemy(){
  var new_card_enemy;
  var total_enemy;
    alert('крупье берет карту');
    total_enemy  = Math.floor(Math.random()*card_number.length);
    new_card_enemy = card_number[total_enemy];
    var total_money_enemy = new_card_enemy + enemy_score;
    enemy_score = total_money_enemy;
    //console.log(enemy_score);
  }
 

function check_score(){
  if(my_score > enemy_score){
    alert('you win');
    money +=stavka;
  }
  else if(enemy_score > my_score){
      alert('you lose');
      money -=stavka;   
  }
  else{
    alert('ЧТО');
    alert('._.');
    money+=0;
  }
  document.getElementById('money').innerHTML = money;
  restrat_game();
}


function restrat_game(){
my_score = 0;
document.getElementById('final_money').innerHTML = my_score;
enemy_score = 0;
document.getElementById('enemy_money').innerHTML = enemy_score; 
}
