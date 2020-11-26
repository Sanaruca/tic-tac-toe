function controller(juego, p) {


  let p1s = player1.jugadas,
    p2s = player2.jugadas;


  if (juego) {


  } else {
    // player1.select(p);
    // bbb();


      //JUEGO YO
      player1.select(p);
      // REVISO GANADOR O EMPATE
      win(player1);
      //JUEGA EL BOT
      bot();
      win(player2);
      // REVISO GANADOR O EMPATE
      console.log("estado de posiciones:",tablero.espaciosLibres);
  



    
  }





  function bot() {


    if (player2.jugadas.check(false, 2) && tablero.espaciosLibres.includes(player2.jugadas.check(true, 2))) { // puedo hacer una jugada para ganar?


      $(`#cl${p2s.check(true, 2)}`)
        .addClass('bot');


      player2.select(p2s.check(true, 2))


    } else if (player1.jugadas.check(false, 2) && tablero.espaciosLibres.includes(player1.jugadas.check(true, 2))) { // mi competencia puede?



      $(`#cl${player1.jugadas.check(true, 2)}`)
        .addClass('bot');


      console.log('voy a jugar aqui', player1.jugadas.check(true, 2))

      player2.select(player1.jugadas.check(true, 2))


    } else {

      let min = 0, max = tablero.espaciosLibres.length - 1;
      let m = Math.floor(Math.random() * (max - min)) + min;
      console.log('soy m', m);

      player2.select(tablero.espaciosLibres[m]);

      console.log(p2s.index[p2s.index.length - 1])


      $(`#cl${p2s.index[p2s.index.length - 1]}`)
        .addClass('bot');
    }
  }

}


function win(player){
  //IF
  // Verificar si 3 de los indices de player.index corresponden a un arreglo de las posiciones ganadoras
  // "secuencias "
  // si es asi dar por ganador al player



  
  if (player.jugadas.check(false,3)) {
    alert('ganador');
  } else if (tablero.espaciosLibres.length == 0) {
    alert('empate');
  }




 //else IF
 //verificar si el tablero de jugadas ya no tiene pos disponibles en tal caso EMPATAN
 // else
 // pueden seguir jugando
}