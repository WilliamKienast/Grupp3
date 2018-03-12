//Intital Values//
var playerTurnValue = 1;
var OnlyOneWin = false;

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
  		if (OnlyOneWin == false) {
		    for (var v = 0; v < 7; v++) {
		      for (var h = 0; h < 4; h++) {
		          if (cols[h][0+v] + cols[h+1][0+v] + cols[h+2][0+v] + cols[h+3][0+v] == 4) {
		           alert("Player 1 Wins");
		           OnlyOneWin = true;
		           break;
		          } else if (cols[h][0+v] + cols[h+1][0+v] + cols[h+2][0+v] + cols[h+3][0+v] == -4) {
		           alert("Player 2 Wins");
		           OnlyOneWin = true;
		           break;
		          }
		      }
		    }
		  }
		 }

  check4InaColumn() {
  		if (OnlyOneWin == false) {
		    for (var c = 0; c < 7; c++) {
		          for (var i = 0; i < 3; i++) {
		             if (cols[0+c][i] + cols[0+c][i+1] + cols[0+c][i+2] + cols[0+c][i+3] == 4) {
		                alert("Player 1 Wins");
		                OnlyOneWin = true;
		                break;
		             } else if (cols[0+c][i] + cols[0+c][i+1] + cols[0+c][i+2] + cols[0+c][i+3] == -4) {
		                alert("Player 2 Wins");
		                OnlyOneWin = true;
		                break;
		             }
		          }
		        }
		    }
		 }


    check4InaLeftDiagonal() {
    	if (OnlyOneWin == false) {                     	  //Doing this diagonal \ <-- bottom to top
		          for (var r = 0; r < 4; r++) {
		            for (var x = 3; x < 6; x++) {           
		                       if (cols[0+r][x] + cols[1+r][x-1] + cols[2+r][x-2] + cols[3+r][x-3] == 4) {
		                  alert("Player 1 Wins");
		                  OnlyOneWin = true;
		                  break;
		                } else if (cols[0+r][x] + cols[1+r][x-1] + cols[2+r][x-2] + cols[3+r][x-3] == -4) {
		                  alert("Player 2 Wins");
		                  OnlyOneWin = true;
		                  break;
		                }
		            }
		          }
		      }
		 }

    check4InaRightDiagonal() {   
    			if (OnlyOneWin == false) {                    //Doing this diagonal / <-- bottom to top
			          for (var r = 0; r < 4; r++) {
			            for (var x = 0; x < 4; x++) {           
			                       if (cols[0+r][x] + cols[1+r][x+1] + cols[2+r][x+2] + cols[3+r][x+3] == 4) {
			                  alert("Player 1 Wins");
			                  OnlyOneWin = true;
			                  break;
			                } else if (cols[0+r][x] + cols[1+r][x+1] + cols[2+r][x+2] + cols[3+r][x+3] == -4) {
			                  alert("Player 2 Wins");
			                  OnlyOneWin = true;
			                  break;
			                }
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

class Reset {
    Restart() {
        for (var i = 1; i < 8; i++) {
          $('.col_'+i).removeClass("bg_yellow bg_red");
          cols = [
          [0,0,0,0,0,0],
          [0,0,0,0,0,0],
          [0,0,0,0,0,0],
          [0,0,0,0,0,0],
          [0,0,0,0,0,0],
          [0,0,0,0,0,0],
          [0,0,0,0,0,0]
          ];
          window["number_of_clicks_col_"+ i] = 0;
          playerTurnValue = 1;
          OnlyOneWin = false;
        }
    }
  }

  let Reaper = new Reset();