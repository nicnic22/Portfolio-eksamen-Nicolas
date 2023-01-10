window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("Siden vises");
  //hvad der skal ske

  //startGame();

  document.querySelector("#game_ui").classList.add("remove_screen");

  document.querySelector("#monster_container").classList.add("remove_screen");
  document.querySelector("#monster_container2").classList.add("remove_screen");
  document.querySelector("#monster_container3").classList.add("remove_screen");
  document.querySelector("#monster_container4").classList.add("remove_screen");
  document.querySelector("#snack_container").classList.add("remove_screen");
  document.querySelector("#snack_container2").classList.add("remove_screen");
  document.querySelector("#snack_container3").classList.add("remove_screen");
  document.querySelector("#snack_container4").classList.add("remove_screen");
  document.querySelector("#snack_container5").classList.add("remove_screen");
  document.querySelector("#snack_container6").classList.add("remove_screen");

  const element = document.getElementById("startbutton");
  element.addEventListener("click", startGame);

}




const monster1_container = document.querySelector("#monster_container");
const monster1_sprite = document.querySelector("#monster_sprite");

const monster2_container = document.querySelector("#monster_container2");
const monster2_sprite = document.querySelector("#monster_sprite2");

const monster3_container = document.querySelector("#monster_container3");
const monster3_sprite = document.querySelector("#monster_sprite3");

const monster4_container = document.querySelector("#monster_container4");
const monster4_sprite = document.querySelector("#monster_sprite4");



const snack1_container = document.querySelector("#snack_container");
const snack1_sprite = document.querySelector("#snack_sprite");

const snack2_container = document.querySelector("#snack_container2");
const snack2_sprite = document.querySelector("#snack_sprite2");

const snack3_container = document.querySelector("#snack_container3");
const snack3_sprite = document.querySelector("#snack_sprite3");

const snack4_container = document.querySelector("#snack_container4");
const snack4_sprite = document.querySelector("#snack_sprite4");

const snack5_container = document.querySelector("#snack_container5");
const snack5_sprite = document.querySelector("#snack_sprite5");

const snack6_container = document.querySelector("#snack_container6");
const snack6_sprite = document.querySelector("#snack_sprite6");



let points;
let life;
let myRand;
let speed;






function startGame() {
  console.log("startGame");
  //Skjul andre skærme


  //tilføj remove_screen igen til elementer som ellers ikke bliver genstartet
  document.querySelector("#monster_container3").classList.add("remove_screen");
  document.querySelector("#monster_container4").classList.add("remove_screen");

  document.querySelector("#snack_container3").classList.add("remove_screen");
  document.querySelector("#snack_container4").classList.add("remove_screen");
  document.querySelector("#snack_container5").classList.add("remove_screen");
  document.querySelector("#snack_container6").classList.add("remove_screen");
  

  //vent med at vise monstre
  setTimeout(function() {
    document.querySelector("#monster_container3").classList.remove("remove_screen");
  }, 5000)

  setTimeout(function() {
    document.querySelector("#monster_container4").classList.remove("remove_screen");
  }, 10000)


  //vent med at vise snacks
  setTimeout(function() {
    document.querySelector("#snack_container3").classList.remove("remove_screen");
  }, 3000)

  setTimeout(function() {
    document.querySelector("#snack_container4").classList.remove("remove_screen");
  }, 6000)

  setTimeout(function() {
    document.querySelector("#snack_container5").classList.remove("remove_screen");
  }, 10000)

  setTimeout(function() {
    document.querySelector("#snack_container6").classList.remove("remove_screen");
  }, 13000)




  document.querySelector("#startbox").classList.add("remove_screen");
  document.querySelector("#game_ui").classList.remove("remove_screen");


  document.querySelector("#liv1").classList.remove("hide_heart");
  document.querySelector("#liv2").classList.remove("hide_heart");
  document.querySelector("#liv3").classList.remove("hide_heart");


  document.querySelector("#winbox").classList.add("remove_screen");
  document.querySelector("#losebox").classList.add("remove_screen");

  document.querySelector("#monster_container").classList.remove("remove_screen");
  document.querySelector("#monster_container2").classList.remove("remove_screen");
  document.querySelector("#snack_container").classList.remove("remove_screen");
  document.querySelector("#snack_container2").classList.remove("remove_screen");
  //document.querySelector("#snack_container3").classList.remove("remove_screen");

  //Nulstil point og udskriv
  points = 0;
  document.querySelector("#score").innerHTML = points;

  //reset liv til 3
  life = 3;
  //document.querySelector("#liv" + life).innerHTML = life;
 
  //reset speed
  speed = 1;

  //Start timer
  document.querySelector("#time_sprite").classList.add("shrinktime");
  document.querySelector("#time_container").addEventListener("animationend", stopSpillet);

  //Giv en random position og random delay til container
  myRand = Math.floor(Math.random() * 6) + 1;
  monster2_container.classList.add("pos" + myRand);
  myRand = Math.floor(Math.random() * 4) + 1;
  monster2_container.classList.add("delay" + myRand);
  monster2_container.classList.add("speed" + speed);
/*
  myRand = Math.floor(Math.random() * 6) + 1;
  red2.classList.add("pos" + myRand);
  myRand = Math.floor(Math.random() * 4) + 1;
  red2.classList.add("delay" + myRand);
  red2.classList.add("speed" + speed);

  myRand = Math.floor(Math.random() * 6) + 1;
  blue1.classList.add("pos" + myRand);
  myRand = Math.floor(Math.random() * 4) + 1;
  blue1.classList.add("delay" + myRand);
  blue1.classList.add("speed" + speed);

  myRand = Math.floor(Math.random() * 6) + 1;
  blue2.classList.add("pos" + myRand);
  myRand = Math.floor(Math.random() * 4) + 1;
  blue2.classList.add("delay" + myRand);
  blue2.classList.add("speed" + speed);
 */

  //Start op_ned-animationer på alle elementer
  monster1_container.classList.add("pattern1");
  monster2_container.classList.add("falling");
  monster3_container.classList.add("pattern4");
  monster4_container.classList.add("pattern2");
  snack1_container.classList.add("pattern2");
  snack2_container.classList.add("pattern1");
  snack3_container.classList.add("pattern3");
  snack4_container.classList.add("pattern4");
  snack5_container.classList.add("pattern1");
  snack6_container.classList.add("falling");


/* 
  //Lyt efter op_ned-animationer er færdig
  monster1_sprite.addEventListener("animationiteration", genstartRed);
  snack1.addEventListener("animationiteration", genstartRed);
 */




  //Lyt efter klik på alle elementer
  monster1_sprite.addEventListener("mousedown", monster_stop);
  monster2_sprite.addEventListener("mousedown", monster_stop2);
  monster3_sprite.addEventListener("mousedown", monster_stop3);
  monster4_sprite.addEventListener("mousedown", monster_stop4);
  snack1_sprite.addEventListener("mousedown", snack_stop);
  snack2_sprite.addEventListener("mousedown", snack_stop2);
  snack3_sprite.addEventListener("mousedown", snack_stop3);
  snack4_sprite.addEventListener("mousedown", snack_stop4);
  snack5_sprite.addEventListener("mousedown", snack_stop5);
  snack6_sprite.addEventListener("mousedown", snack_stop6);

}









/* if (life <= 0) {
    gameover();
  } else if (points >= 5) {
    levelComplete();
  } else {
    gameover();
 */








//document.querySelector("#monster_sprite").addEventListener("click", monster_stop);

function monster_stop() {
  console.log("monster_stop");
  
  document.querySelector("#liv" + life).classList.add("hide_heart");
  life--;

  //points--;
  //document.querySelector("#score").textContent = points;

  document.querySelector("#monster_sprite").classList.add("stop");

  document.querySelector("#monster_container").classList.add("hop_kf");

  document.querySelector("#sound_bad").play();

  document.querySelector("#monster_container").addEventListener("animationend", click_done_monster);

  if (life == 0) {
    console.log("YOU ARE DEAD");
    stopSpillet();
  }
}

function click_done_monster() {
  console.log("click_done_monster");

  document.querySelector("#monster_container").classList.add("remove");
}



function monster_stop2() {
  console.log("monster_stop2");
  
  document.querySelector("#liv" + life).classList.add("hide_heart");
  life--;

  //points--;
  //document.querySelector("#score").textContent = points;

  document.querySelector("#monster_sprite2").classList.add("stop");

  document.querySelector("#monster_container2").classList.add("hop_kf");

  document.querySelector("#sound_bad").play();

  document.querySelector("#monster_container2").addEventListener("animationend", click_done_monster2);

  if (life == 0) {
    console.log("YOU ARE DEAD");
    stopSpillet();
  }
}

function click_done_monster2() {
  console.log("click_done_monster2");

  document.querySelector("#monster_container2").classList.add("remove");
}



function monster_stop3() {
  console.log("monster_stop3");
  
  document.querySelector("#liv" + life).classList.add("hide_heart");
  life--;

  //points--;
  //document.querySelector("#score").textContent = points;

  document.querySelector("#monster_sprite3").classList.add("stop");

  document.querySelector("#monster_container3").classList.add("hop_kf");

  document.querySelector("#sound_bad").play();

  document.querySelector("#monster_container3").addEventListener("animationend", click_done_monster3);

  if (life == 0) {
    console.log("YOU ARE DEAD");
    stopSpillet();
  }
}

function click_done_monster3() {
  console.log("click_done_monster3");

  document.querySelector("#monster_container3").classList.add("remove");
}



function monster_stop4() {
  console.log("monster_stop4");
  
  document.querySelector("#liv" + life).classList.add("hide_heart");
  life--;

  //points--;
  //document.querySelector("#score").textContent = points;

  document.querySelector("#monster_sprite4").classList.add("stop");

  document.querySelector("#monster_container4").classList.add("hop_kf");

  document.querySelector("#sound_bad").play();

  document.querySelector("#monster_container4").addEventListener("animationend", click_done_monster4);

  if (life == 0) {
    console.log("YOU ARE DEAD");
    stopSpillet();
  }
}

function click_done_monster4() {
  console.log("click_done_monster4");

  document.querySelector("#monster_container4").classList.add("remove");
}






//document.querySelector("#snack_sprite").addEventListener("click", snack_stop);

function snack_stop() {
  console.log("snack_stop");
  
  points++;
  document.querySelector("#score").textContent = points;
  
  document.querySelector("#snack_sprite").classList.add("stop");

  document.querySelector("#snack_container").classList.add("hop_kf");

  document.querySelector("#sound_good").play();

  document.querySelector("#snack_container").addEventListener("animationend", click_done_snack);

  if (points == 5) {
    console.log("YOU WIN!");
    stopSpillet();
  }
}

function click_done_snack() {
  console.log("click_done_snack");

  document.querySelector("#snack_container").classList.add("remove");
}



function snack_stop2() {
  console.log("snack_stop2");
  
  points++;
  document.querySelector("#score").textContent = points;
  
  document.querySelector("#snack_sprite2").classList.add("stop");

  document.querySelector("#snack_container2").classList.add("hop_kf");

  document.querySelector("#sound_good").play();

  document.querySelector("#snack_container2").addEventListener("animationend", click_done_snack2);

  if (points == 5) {
    console.log("YOU WIN!");
    stopSpillet();
  }
}

function click_done_snack2() {
  console.log("click_done_snack2");

  document.querySelector("#snack_container2").classList.add("remove");
}



function snack_stop3() {
  console.log("snack_stop3");
  
  points++;
  document.querySelector("#score").textContent = points;
  
  document.querySelector("#snack_sprite3").classList.add("stop");

  document.querySelector("#snack_container3").classList.add("hop_kf");

  document.querySelector("#sound_good").play();

  document.querySelector("#snack_container3").addEventListener("animationend", click_done_snack3);

  if (points == 5) {
    console.log("YOU WIN!");
    stopSpillet();
  }
}

function click_done_snack3() {
  console.log("click_done_snack3");

  document.querySelector("#snack_container3").classList.add("remove");
}



function snack_stop4() {
  console.log("snack_stop4");
  
  points++;
  document.querySelector("#score").textContent = points;
  
  document.querySelector("#snack_sprite4").classList.add("stop");

  document.querySelector("#snack_container4").classList.add("hop_kf");

  document.querySelector("#sound_good").play();

  document.querySelector("#snack_container4").addEventListener("animationend", click_done_snack4);

  if (points == 5) {
    console.log("YOU WIN!");
    stopSpillet();
  }
}

function click_done_snack4() {
  console.log("click_done_snack4");

  document.querySelector("#snack_container4").classList.add("remove");
}



function snack_stop5() {
  console.log("snack_stop5");
  
  points++;
  document.querySelector("#score").textContent = points;
  
  document.querySelector("#snack_sprite5").classList.add("stop");

  document.querySelector("#snack_container5").classList.add("hop_kf");

  document.querySelector("#sound_good").play();

  document.querySelector("#snack_container5").addEventListener("animationend", click_done_snack5);

  if (points == 5) {
    console.log("YOU WIN!");
    stopSpillet();
  }
}

function click_done_snack5() {
  console.log("click_done_snack5");

  document.querySelector("#snack_container5").classList.add("remove");
}



function snack_stop6() {
  console.log("snack_stop6");
  
  points++;
  document.querySelector("#score").textContent = points;
  
  document.querySelector("#snack_sprite6").classList.add("stop");

  document.querySelector("#snack_container6").classList.add("hop_kf");

  document.querySelector("#sound_good").play();

  document.querySelector("#snack_container6").addEventListener("animationend", click_done_snack6);

  if (points == 5) {
    console.log("YOU WIN!");
    stopSpillet();
  }
}

function click_done_snack6() {
  console.log("click_done_snack6");

  document.querySelector("#snack_container6").classList.add("remove");
}










function stopSpillet() {
  console.log("stopSpillet");

  //Stop timer
  document.querySelector("#time_sprite").classList.remove("shrinktime");
  document.querySelector("#time_sprite").classList.add("redtime");
  document.querySelector("#time_container").removeEventListener("animationend", stopSpillet);

  //fjern alt er på alle elementers container og sprite
  monster1_container.classList = "";
  monster1_container.firstElementChild.classList = "";

  monster2_container.classList = "";
  monster2_container.firstElementChild.classList = "";

  monster3_container.classList = "";
  monster3_container.firstElementChild.classList = "";

  monster4_container.classList = "";
  monster4_container.firstElementChild.classList = "";


  snack1_container.classList = "";
  snack1_container.firstElementChild.classList = "";

  snack2_container.classList = "";
  snack2_container.firstElementChild.classList = "";

  snack3_container.classList = "";
  snack3_container.firstElementChild.classList = "";

  snack4_container.classList = "";
  snack4_container.firstElementChild.classList = "";

  snack5_container.classList = "";
  snack5_container.firstElementChild.classList = "";

  snack6_container.classList = "";
  snack6_container.firstElementChild.classList = "";


  monster1_sprite.classList = "";
  //monster1_sprite.firstElementChild.classList = "";
  monster2_sprite.classList = "";
  //monster2_sprite.firstElementChild.classList = "";
  monster3_sprite.classList = "";
  //monster3_sprite.firstElementChild.classList = "";
  monster4_sprite.classList = "";
  //monster4_sprite.firstElementChild.classList = "";
  snack1_sprite.classList = "";
  //snack1_sprite.firstElementChild.classList = "";
  snack2_sprite.classList = "";
  //snack2_sprite.firstElementChild.classList = "";
  snack3_sprite.classList = "";
  //snack3_sprite.firstElementChild.classList = "";
  snack4_sprite.classList = "";
  //snack4_sprite.firstElementChild.classList = "";
  snack5_sprite.classList = "";
  //snack5_sprite.firstElementChild.classList = "";
  snack6_sprite.classList = "";
  //snack6_sprite.firstElementChild.classList = "";

  //fjern alle event listener på alle containere
  //red1.removeEventListener("animationiteration", genstartRed);
  document.querySelector("#monster_container").removeEventListener("animationend", click_done_monster);
  monster1_sprite.removeEventListener("mousedown", monster_stop);

  document.querySelector("#monster_container2").removeEventListener("animationend", click_done_monster2);
  monster2_sprite.removeEventListener("mousedown", monster_stop2);

  document.querySelector("#monster_container3").removeEventListener("animationend", click_done_monster3);
  monster3_sprite.removeEventListener("mousedown", monster_stop3);

  document.querySelector("#monster_container4").removeEventListener("animationend", click_done_monster4);
  monster4_sprite.removeEventListener("mousedown", monster_stop4);

  //red2.removeEventListener("animationiteration", genstartRed);
  document.querySelector("#snack_container").removeEventListener("animationend", click_done_snack);
  snack1_sprite.removeEventListener("mousedown", snack_stop);

  document.querySelector("#snack_container2").removeEventListener("animationend", click_done_snack2);
  snack2_sprite.removeEventListener("mousedown", snack_stop2);

  document.querySelector("#snack_container3").removeEventListener("animationend", click_done_snack3);
  snack3_sprite.removeEventListener("mousedown", snack_stop3);

  document.querySelector("#snack_container4").removeEventListener("animationend", click_done_snack4);
  snack4_sprite.removeEventListener("mousedown", snack_stop4);

  document.querySelector("#snack_container5").removeEventListener("animationend", click_done_snack5);
  snack5_sprite.removeEventListener("mousedown", snack_stop5);

  document.querySelector("#snack_container6").removeEventListener("animationend", click_done_snack6);
  snack6_sprite.removeEventListener("mousedown", snack_stop6);

  document.querySelector("#startbutton").removeEventListener("click", startGame);


  document.querySelector("#snack_container").classList.add("remove_screen");
  document.querySelector("#snack_container2").classList.add("remove_screen");
  document.querySelector("#snack_container3").classList.add("remove_screen");
  document.querySelector("#snack_container4").classList.add("remove_screen");
  document.querySelector("#snack_container5").classList.add("remove_screen");
  document.querySelector("#snack_container6").classList.add("remove_screen");

  document.querySelector("#monster_container").classList.add("remove_screen");
  document.querySelector("#monster_container2").classList.add("remove_screen");
  document.querySelector("#monster_container3").classList.add("remove_screen");
  document.querySelector("#monster_container4").classList.add("remove_screen");


  if (life <= 0) {
    gameover();
  } else if (points >= 5) {
    levelComplete();
  } else {
    gameover();
  }

}


function gameover() {
  console.log("GAMEOVER");

  //Vis gameover skærm

  //Klik på genstart1

  document.querySelector("#game_ui").classList.add("remove_screen");

  document.querySelector("#losebox").classList.remove("remove_screen");

  document.querySelector("#sound_lose").play();

  const element2 = document.getElementById("resetbuttonlose");
  element2.addEventListener("click", startGame);
}

function levelComplete() {
  console.log("Hurra du vandt");

  //Vis levelComplete skærm

  //Klik på genstart2

  document.querySelector("#game_ui").classList.add("remove_screen");

  document.querySelector("#winbox").classList.remove("remove_screen");

  document.querySelector("#sound_win").play();

  const element3 = document.getElementById("resetbuttonwin");
  element3.addEventListener("click", startGame);

}