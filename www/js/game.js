var playerTurnValue = 1;

//creates a function TurnGodess.changeturn(); which changes turnvalue=playersturn.
class TurnGod {
	ChangeTurn() {
			if (playerTurnValue == 1) {
				playerTurnValue = -1;
				$("#TurnValue").html("Turnvalue: " + playerTurnValue);
				console.log("TurnGodess bows to your will, setting turn to " +playerTurnValue);
			} else {
				playerTurnValue = 1;
				$("#TurnValue").html("Turnvalue: " + playerTurnValue);
				console.log("TurnGodess bows to your will, setting turn to " +playerTurnValue);
		}
	}
}
let TurnGodess = new TurnGod()

//Creates a function TurnShower.ShowWhosTurn(); which shows who turn it is
var player1name = "Tobias player1 turn"		//changes later when we got the values of playernames
var player2name = "Irene player2 turn"		//changes later when we got the values of playernames

class show_whos_turn { 
	ShowWhosTurn() {
			if (playerTurnValue == 1) {
			$("#itIsTurn").html(player1name);
			} else {
			$("#itIsTurn").html(player2name);
		}
	}
}
let TurnShower = new show_whos_turn()


//clickcounter for column 1 if sats making the maximum available clicks = 6
var number_of_clicks_col_1 = 0;
$(document).ready(function(){
 $(".col_1").click(function(){
 	if (number_of_clicks_col_1 < 6) {
 		number_of_clicks_col_1 = number_of_clicks_col_1 + 1;
  		console.log("number of clicks of col1 = " + number_of_clicks_col_1);
  }
 });
});

//clickcounter for column 2
var number_of_clicks_col_2 = 0;
$(document).ready(function(){
 $(".col_2").click(function(){
 	if (number_of_clicks_col_2 < 6) {
  		number_of_clicks_col_2 = number_of_clicks_col_2 + 1;
  		console.log("number of clicks of col2 = " + number_of_clicks_col_2);
	}
 });
});

//clickcounter for column 3
var number_of_clicks_col_3 = 0;
$(document).ready(function(){
 $(".col_3").click(function(){
 	if (number_of_clicks_col_3 < 6) {
 		number_of_clicks_col_3 = number_of_clicks_col_3 + 1;
  		console.log("number of clicks of col3 = " + number_of_clicks_col_3);
	}
 });
});

//clickcounter for column 4
var number_of_clicks_col_4 = 0;
$(document).ready(function(){
 $(".col_4").click(function(){
 	if (number_of_clicks_col_4 < 6) {
 		 number_of_clicks_col_4 = number_of_clicks_col_4 + 1;
  		console.log("number of clicks of col4 = " + number_of_clicks_col_4);
  	}
 });
});

//clickcounter for column 5
var number_of_clicks_col_5 = 0;
$(document).ready(function(){
 $(".col_5").click(function(){
 	if (number_of_clicks_col_5 < 6) {
  		number_of_clicks_col_5 = number_of_clicks_col_5 + 1;
  		console.log("number of clicks of col5 = " + number_of_clicks_col_5);
  	}
 });
});

//clickcounter for column 6
var number_of_clicks_col_6 = 0;
$(document).ready(function(){
 $(".col_6").click(function(){
 	if (number_of_clicks_col_6 < 6) {
 		number_of_clicks_col_6 = number_of_clicks_col_6 + 1;
  		console.log("number of clicks of col6 = " + number_of_clicks_col_6);
  	}
 });
});

//clickcounter for column 7
var number_of_clicks_col_7 = 0;
$(document).ready(function(){
 $(".col_7").click(function(){
 	if (number_of_clicks_col_7 < 6) {
 		number_of_clicks_col_7 = number_of_clicks_col_7 + 1;
  		console.log("number of clicks of col7 = " + number_of_clicks_col_7);
  	}
 });
});


//FUNCTION adding the Bricks
//When clicking the corresponding column it fills the correct EmptyBrickSpot
$(document).ready(function(){
 $(".col_1").click(function(){
 	if (cols[0][5] == 0) {
 		if ($(".col1row"+number_of_clicks_col_1).hasClass("bg_red") ||
 			$(".col1row"+number_of_clicks_col_1).hasClass("bg_yellow")) {
 			} else {
 				if (playerTurnValue == 1) {
 						$(".col1row"+number_of_clicks_col_1).addClass("bg_red");
 					} else {
 						$(".col1row"+number_of_clicks_col_1).addClass("bg_yellow");
 					}		
 			}
  		}  
 });
});

//col 2
$(document).ready(function(){
 $(".col_2").click(function(){
 	if (cols[1][5] == 0) {
 		if ($(".col2row"+number_of_clicks_col_2).hasClass("bg_red") ||
 			$(".col2row"+number_of_clicks_col_2).hasClass("bg_yellow")) {
 			} else {
 				if (playerTurnValue == 1) {
 						$(".col2row"+number_of_clicks_col_2).addClass("bg_red");
 					} else {
 						$(".col2row"+number_of_clicks_col_2).addClass("bg_yellow");
 					}		
 			}
  		}  
 });
});

//col 3
$(document).ready(function(){
 $(".col_3").click(function(){
 	if (cols[2][5] == 0) {
 		if ($(".col3row"+number_of_clicks_col_3).hasClass("bg_red") ||
 			$(".col3row"+number_of_clicks_col_3).hasClass("bg_yellow")) {
 			} else {
 				if (playerTurnValue == 1) {
 						$(".col3row"+number_of_clicks_col_3).addClass("bg_red");
 					} else {
 						$(".col3row"+number_of_clicks_col_3).addClass("bg_yellow");
 					}		
 			}
  		}  
 });
});

//col 4
$(document).ready(function(){
 $(".col_4").click(function(){
 	if (cols[3][5] == 0) {
 		if ($(".col4row"+number_of_clicks_col_4).hasClass("bg_red") ||
 			$(".col4row"+number_of_clicks_col_4).hasClass("bg_yellow")) {
 			} else {
 				if (playerTurnValue == 1) {
 						$(".col4row"+number_of_clicks_col_4).addClass("bg_red");
 					} else {
 						$(".col4row"+number_of_clicks_col_4).addClass("bg_yellow");
 					}		
 			}
  		}  
 });
});

//col 5
$(document).ready(function(){
 $(".col_5").click(function(){
 	if (cols[4][5] == 0) {
 		if ($(".col5row"+number_of_clicks_col_5).hasClass("bg_red") ||
 			$(".col5row"+number_of_clicks_col_5).hasClass("bg_yellow")) {
 			} else {
 				if (playerTurnValue == 1) {
 						$(".col5row"+number_of_clicks_col_5).addClass("bg_red");
 					} else {
 						$(".col5row"+number_of_clicks_col_5).addClass("bg_yellow");
 					}		
 			}
  		}  
 });
});

//col 6
$(document).ready(function(){
 $(".col_6").click(function(){
 	if (cols[5][5] == 0) {
 		if ($(".col6row"+number_of_clicks_col_6).hasClass("bg_red") ||
 			$(".col6row"+number_of_clicks_col_6).hasClass("bg_yellow")) {
 			} else {
 				if (playerTurnValue == 1) {
 						$(".col6row"+number_of_clicks_col_6).addClass("bg_red");
 					} else {
 						$(".col6row"+number_of_clicks_col_6).addClass("bg_yellow");
 					}		
 			}
  		}  
 });
});

//col 7
$(document).ready(function(){
 $(".col_7").click(function(){
 	if (cols[6][5] == 0) {
 		if ($(".col7row"+number_of_clicks_col_7).hasClass("bg_red") ||
 			$(".col7row"+number_of_clicks_col_7).hasClass("bg_yellow")) {
 			} else {
 				if (playerTurnValue == 1) {
 						$(".col7row"+number_of_clicks_col_7).addClass("bg_red");
 					} else {
 						$(".col7row"+number_of_clicks_col_7).addClass("bg_yellow");
 					}		
 			}
  		}  
 });
});



//setting PlayerTurnValue into the correct Array & swapping playerturn
//& doing this if the last array isnt filled array[5] == 0

//Array 1 and col 1
/*$(document).ready(function(){
 $(".col_1").click(function(){
 	if (col_1_array[5] == 0) {
  		col_1_array[number_of_clicks_col_1-1] = playerTurnValue;
  	  	TurnGodess.ChangeTurn();
  	}
 });
});
*/

$(document).ready(function(){
 $(".col_1").click(function(){
  if (cols[0][5] == 0) {
      cols[0][number_of_clicks_col_1-1] = playerTurnValue;
        TurnGodess.ChangeTurn();
        Judge.checkIfAnyoneHasWon();
    }
 });
});


//Array 2 and col 2
$(document).ready(function(){
 $(".col_2").click(function(){
 	if (cols[1][5] == 0) {
  	cols[1][number_of_clicks_col_2-1] = playerTurnValue;
  	TurnGodess.ChangeTurn();
    Judge.checkIfAnyoneHasWon();
  	}
 });
});

//Array 3 and col 3
$(document).ready(function(){
 $(".col_3").click(function(){
 	if (cols[2][5] == 0) {
  	cols[2][number_of_clicks_col_3-1] = playerTurnValue;
  	TurnGodess.ChangeTurn();
    Judge.checkIfAnyoneHasWon();
  	}
 });
});

//Array 4 and col 4
$(document).ready(function(){
 $(".col_4").click(function(){
 	if (cols[3][5] == 0) {
  	cols[3][number_of_clicks_col_4-1] = playerTurnValue;
  	TurnGodess.ChangeTurn();
    Judge.checkIfAnyoneHasWon();
  	}
 });
});

//Array 5 and col 5
$(document).ready(function(){
 $(".col_5").click(function(){
 	if (cols[4][5] == 0) {
  	cols[4][number_of_clicks_col_5-1] = playerTurnValue;
  	TurnGodess.ChangeTurn();
    Judge.checkIfAnyoneHasWon();
  	}
 });
});

//Array 6 and col 6
$(document).ready(function(){
 $(".col_6").click(function(){
 	if (cols[5][5] == 0) {
  	cols[5][number_of_clicks_col_6-1] = playerTurnValue;
  	TurnGodess.ChangeTurn();
    Judge.checkIfAnyoneHasWon();
  	}
 });
});

//Array 7 and col 7
$(document).ready(function(){
 $(".col_7").click(function(){
 	if (cols[6][5] == 0) {
  	cols[6][number_of_clicks_col_7-1] = playerTurnValue;
  	TurnGodess.ChangeTurn();
    Judge.checkIfAnyoneHasWon();
  	}
 });
});

//setting the Virtual board with Arrays//

  cols = [
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]
  ];

//FUNCTION: SCANNING THE TABLE AFTER 4-IN-A-ROW (ROWS, COLUMNS & DIAGONALS)//
class HasAnyoneWon {
  check4InaRow() {
    for (var v = 0; v < 7; v++) {
      for (var h = 0; h < 4; h++) {
          if (cols[h][0+v] + cols[h+1][0+v] + cols[h+2][0+v] + cols[h+3][0+v] == 4) {
           alert("Player 1 Wins");
          } else if (cols[h][0+v] + cols[h+1][0+v] + cols[h+2][0+v] + cols[h+3][0+v] == -4) {
           alert("Player 2 Wins");
          }
      }
    }
  }

  check4InaColumn() {
    for (var c = 0; c < 7; c++) {
          for (var i = 0; i < 3; i++) {
             if (cols[0+c][i] + cols[0+c][i+1] + cols[0+c][i+2] + cols[0+c][i+3] == 4) {
                alert("Player 1 Wins");
             } else if (cols[0+c][i] + cols[0+c][i+1] + cols[0+c][i+2] + cols[0+c][i+3] == -4) {
                alert("Player 2 Wins");
             }
          }
        }
    }


    check4InaLeftDiagonal() {                       //Doing this diagonal \ <-- bottom to top
          for (var r = 0; r < 4; r++) {
            for (var x = 3; x < 6; x++) {           
                       if (cols[0+r][x] + cols[1+r][x-1] + cols[2+r][x-2] + cols[3+r][x-3] == 4) {
                  alert("Player 1 Wins");
                } else if (cols[0+r][x] + cols[1+r][x-1] + cols[2+r][x-2] + cols[3+r][x-3] == -4) {
                  alert("Player 2 Wins");
                }
            }
          }
      }

    check4InaRightDiagonal() {                       //Doing this diagonal / <-- bottom to top
          for (var r = 0; r < 4; r++) {
            for (var x = 0; x < 4; x++) {           
                       if (cols[0+r][x] + cols[1+r][x+1] + cols[2+r][x+2] + cols[3+r][x+3] == 4) {
                  alert("Player 1 Wins");
                } else if (cols[0+r][x] + cols[1+r][x+1] + cols[2+r][x+2] + cols[3+r][x+3] == -4) {
                  alert("Player 2 Wins");
                }
            }
          }
      }


           checkIfAnyoneHasWon() {
            this.check4InaRightDiagonal();
            this.check4InaLeftDiagonal();
            this.check4InaRow();
            this.check4InaColumn();
          }
  }

let Judge = new HasAnyoneWon();

//klassnamn: StorBokstavIBörjan
//variabelnamn: litenBokstavIBörjan
//funktionsnamn: litenBokstavIBörjan



/*		

class blabla {
	checkForInaRow() {
		col_4[i] + col_3[i+1] + col_2[i+2] + col_1[i+3] = 4 or -4
		col_5[i] + col_4[i+1] + col_3[i+2] + col_2[i+3] = 4 or -4
		col_6[i] + col_5[i+1] + col_4[i+2] + col_3[i+3] = 4 or -4
		col_7[i] + col_6[i+1] + col_5[i+2] + col_4[i+3] = 4 or -4
	}


/*
player1=1 (red)
player2=-1 (yellow)

playerturn value= 1 (red) starts

//the board contains 7 col's with 7 arrays.
Col_1 = []

When click the Col_1 // on the board
number_of_clicks_col_1 = number_of_clicks_col_1 + 1
//check if col is full
then if number_of_clicks_col_1 = 6
alert col is full/or do nothing...throw? Maybe doesn't matter 
since the checking 4-in-a-row-function only check the 
legal arrays values?

//adding the playerturn value into the array at the correct
//position within the array
array col_1[number_of_clicks_col_1-1] = [playerturn value]
//example
player1 turn
click once array = col_1 [1]		number_of_clicks_col_1 1
click twice array = col_1 [1,1]		number_of_clicks_col_1 2
click three array = col_1 [1,1,1]	number_of_clicks_col_1 3

//Now a function for checking if you got 4 in a row.
//checking row 1 (horizontal row)
col_1 [i] + col_2[i] + col_3[i] + col_4[i] = 4 or -4
col_2 [i] + col_3[i] + col_4[i] + col_5[i] = 4 or -4
col_3 [i] + col_4[i] + col_5[i] + col_6[i] = 4 or -4
col_4 [i] + col_5[i] + col_6[i] + col_7[i] = 4 or -4

//checking row 2 (horizontal row) the +1 value determine row (horisontal)
col_1 [i+1] + col_2[i+1] + col_3[i+1] + col_4[i+1] = 4 or -4
col_2 [i+1] + col_3[i+1] + col_4[i+1] + col_5[i+1] = 4 or -4
col_3 [i+1] + col_4[i+1] + col_5[i+1] + col_6[i+1] = 4 or -4
col_4 [i+1] + col_5[i+1] + col_6[i+1] + col_7[i+1] = 4 or -4

//checking col 1 (vertical row)
col_1 [i] + col_1[i+1] + col_1[i+2] + col_1[i+3] = 4 or -4
col_1 [i+1] + col_1[i+2] + col_1[i+3] + col_1[i+4] = 4 or -4
col_1 [i+2] + col_1[i+3] + col_1[i+4] + col_1[i+5] = 4 or -4

//checking col 2 (vertical row)
col_2 [i] + col_2[i+1] + col_2[i+2] + col_2[i+3] = 4 or -4
col_2 [i+1] + col_2[i+2] + col_2[i+3] + col_2[i+4] = 4 or -4
col_2 [i+2] + col_2[i+3] + col_2[i+4] + col_2[i+5] = 4 or -4

//checking sned-right row 1 - row4
col_1 [i] + col_2[i+1] + col_3[i+2] + col_3[i+3] = 4 or -4
col_2 [i] + col_3[i+1] + col_4[i+2] + col_5[i+3] = 4 or -4
col_3 [i] + col_4[i+1] + col_5[i+2] + col_6[i+3] = 4 or -4
col_4 [i] + col_5[i+1] + col_6[i+2] + col_7[i+3] = 4 or -4

//checking sned-right row 2 to row 5
col_1 [i+1] + col_2[i+2] + col_3[i+3] + col_3[i+4] = 4 or -4
col_2 [i+1] + col_3[i+2] + col_4[i+3] + col_5[i+4] = 4 or -4
col_3 [i+1] + col_4[i+2] + col_5[i+3] + col_6[i+4] = 4 or -4
col_4 [i+1] + col_5[i+2] + col_6[i+3] + col_7[i+4] = 4 or -4

//checking sned-right row 3 - row 6
col_1 [i+2] + col_2[i+3] + col_3[i+4] + col_3[i+5] = 4 or -4
col_2 [i+2] + col_3[i+3] + col_4[i+4] + col_5[i+5] = 4 or -4
col_3 [i+2] + col_4[i+3] + col_5[i+4] + col_6[i+5] = 4 or -4
col_4 [i+2] + col_5[i+3] + col_6[i+4] + col_7[i+5] = 4 or -4

//checking sned-left col 4 - col 1 (row 1-4)
col_4[i] + col_3[i+1] + col_2[i+2] + col_1[i+3] = 4 or -4
col_5[i] + col_4[i+1] + col_3[i+2] + col_2[i+3] = 4 or -4
col_6[i] + col_5[i+1] + col_4[i+2] + col_3[i+3] = 4 or -4
col_7[i] + col_6[i+1] + col_5[i+2] + col_4[i+3] = 4 or -4

//checking sned-left col 4 - col 1 (row 2-5)
col_4[i] + col_3[i+1] + col_2[i+2] + col_1[i+3] = 4 or -4
col_5[i] + col_4[i+1] + col_3[i+2] + col_2[i+3] = 4 or -4
col_6[i] + col_5[i+1] + col_4[i+2] + col_3[i+3] = 4 or -4
col_7[i] + col_6[i+1] + col_5[i+2] + col_4[i+3] = 4 or -4

//Now a function to change playerturn
if playerturn value = 1 then playerturn value = -1
	else playerturn value = 1

class blabla {
	checkForInaRow() {
		col_4[i] + col_3[i+1] + col_2[i+2] + col_1[i+3] = 4 or -4
		col_5[i] + col_4[i+1] + col_3[i+2] + col_2[i+3] = 4 or -4
		col_6[i] + col_5[i+1] + col_4[i+2] + col_3[i+3] = 4 or -4
		col_7[i] + col_6[i+1] + col_5[i+2] + col_4[i+3] = 4 or -4
	}

	checkForInaRDiangomle() {

	}

	checkEverything() {
		this.checkForInaRow();
		this.checkForInaRDiangomle();
	}
}


let bbbb = new blabla();
bbbb.checkEverything();
*/