

console.log("Exec botAi.cfg")
let PlacementMade = false;


//AI RANDOM - BOT//
/*
class MasterBot {
	PlaceAbrick() {
		
						// FUNCTION SO THAT THE RANDOM NUMBER AINT A BAD SPOT ColXisBad//
						
						RandomNumber = Math.floor((Math.random() * 7) + 1);
						while (RandomNumber === BadPlacements[0] || RandomNumber === BadPlacements[1] || RandomNumber === BadPlacements[2] || RandomNumber === BadPlacements[3] || RandomNumber === BadPlacements[4]|| RandomNumber === BadPlacements[5] || RandomNumber === BadPlacements[6] || EXIT == 1000) {
									RandomNumber = Math.floor((Math.random() * 7) + 1);
									EXIT = EXIT + 1
									if (EXIT == 999) {											//GÖr att man efter att loopat 999 ggr och det endast finns BadPlacements kvar.
										$('.ThisIsCol'+(RandomNumber)).trigger('click')			//Att man klickar på en dålig column. En BadPlacements kommer aldrig kunna vara den
										break;													//Den sista brickan i en column eftersom badplacements alltid gället "the 2nd Draw"
									}															//Från nuvarande tur.
								}

									if (cols[RandomNumber-1][5] !== 1 || -1) {
										$('.ThisIsCol'+(RandomNumber)).trigger('click');
									}
						
				}
			}


let Bot2 = new MasterBot();
*/
		//fixar så att skuggan brickan försvinner


class FortuneTeller  {

			//Player 1 is the Bot
			//Player 2 is the player
			//There is a walkaround for this but dont know this value for player function

			Player1VictoryCheck() {
				for (var i=0; i < 7; i++) {
						VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = 1;
						Bot.Scan();
						if (TheBotKnowsIfPlayer1CanWin == true) {
							$('.ThisIsCol'+i+"Rad0").trigger('click')
							PlacementMade = true
							$('.ThisIsCol0Rad0').trigger("mouseleave");
							return;
						}
						VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = 0;
				}
			}

			Player2VictoryCheck() {
			if (PlacementMade == false) {
						for (var i=0; i < 7; i++) {
								VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = -1;
								Bot.Scan();
								if (TheBotKnowsIfPlayer2CanWin == true) {
									$('.ThisIsCol'+i+"Rad0").trigger('click')
									PlacementMade = true
									$('.ThisIsCol0Rad0').trigger("mouseleave");
									return;
								}
								VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = 0;
						}
					}
			}
			
			Player2VictoryCheck2ndDraw() {
				if (PlacementMade == false) {
							for (var i=0; i < 7; i++) {
									VirtualBoard[ 4-NumberOfClicks[i] ] [ [i] ] = -1;									//starts on 4-. The Bot need to check row +2 above the numerofclicks in that col
									Bot.Scan();
									if (TheBotKnowsIfPlayer2CanWin == true) {											//only allows the loop if there a potential win 2nd turn
										BadPlacements [i] = i
										//alert("The bot knows player2 wins 2nd turn if u place a brick in col " + i );
										VirtualBoard[ 4-NumberOfClicks[i] ] [ [i] ] = 0;								//resetting the value so it doesnt affekt next check
										TheBotKnowsIfPlayer2CanWin = false;												//resetting the memory of the win condition. otherwise the bot would think that any placement after the wincondition is met is a win.
									}
									
							}
				}
			}

			DoYourTurn () {
				PlacementMade = false;
				this.Player1VictoryCheck();
				this.Player2VictoryCheck();
				this.Player2VictoryCheck2ndDraw();
			}

}						
														
						

let Oracle = new FortuneTeller();


















let TheBotKnowsIfPlayer1CanWin = false;
let TheBotKnowsIfPlayer2CanWin = false;

//FUNCTION: SCANNING THE TABLE AFTER 4-IN-A-ROW (ROWS, COLUMNS & DIAGONALS)//
class HasAnyoneWon {

  check4InaRow() {
		    for (var h = 0; h < 6; h++) {				//Kollar höjden
		      for (var l = 0; l < 4; l++) {				//Kollar längden	* * * *
		          if (VirtualBoard[0+h][0+l] + VirtualBoard[h][l+1] + VirtualBoard[h][l+2] + VirtualBoard[h][l+3] == 4) {
		           TheBotKnowsIfPlayer1CanWin = true;
		          
		         } else if (VirtualBoard[0+h][0+l] + VirtualBoard[h][l+1] + VirtualBoard[h][l+2] + VirtualBoard[h][l+3] == -4) {
		           TheBotKnowsIfPlayer2CanWin = true;          
		         }
		      }
		    }
		  }
		 

  check4InaColumn() {
		    for (var i = 0; i < 7; i++) {
		          for (var c = 0; c < 3; c++) {
		             if (VirtualBoard[c][i] + VirtualBoard[c+1][i] + VirtualBoard[c+2][i] + VirtualBoard[c+3][i] == 4) {
		                TheBotKnowsIfPlayer1CanWin = true;
		               
		             } else if (VirtualBoard[c][i] + VirtualBoard[c+1][i] + VirtualBoard[c+2][i] + VirtualBoard[c+3][i] == -4) {
		                TheBotKnowsIfPlayer2CanWin = true;   
		             }
		          	 }
		     }
	}
	


    check4InaLeftDiagonal() {									//Doing this diagonal \ <-- bottom to top
    	                   	  
		          for (var c = 0; c < 4; c++) {
		            for (var r = 0; r < 3; r++) {           
		                  if (VirtualBoard[r][c] + VirtualBoard[r+1][c+1] + VirtualBoard[r+2][c+2] + VirtualBoard[r+3][c+3] == 4) {
		                  TheBotKnowsIfPlayer1CanWin = true;
		                  
		                } else if (VirtualBoard[r][c] + VirtualBoard[r+1][c+1] + VirtualBoard[r+2][c+2] + VirtualBoard[r+3][c+3] == -4) {
		                  TheBotKnowsIfPlayer2CanWin = true;
		   
		              }               
		           	}
		         }
		      
	}
	

    check4InaRightDiagonal() {									//Doing this diagonal \ <-- bottom to top
    	                   	  
		          for (var c = 0; c < 4; c++) {
		            for (var r = 0; r < 3; r++) {           
		                  if (VirtualBoard[r][c+3] + VirtualBoard[r+1][c+2] + VirtualBoard[r+2][c+1] + VirtualBoard[r+3][c+0] == 4) {
		                  TheBotKnowsIfPlayer1CanWin = true;
		                  
		                } else if (VirtualBoard[r][c+3] + VirtualBoard[r+1][c+2] + VirtualBoard[r+2][c+1] + VirtualBoard[r+3][c+0] == -4) {
		                  TheBotKnowsIfPlayer2CanWin = true;
		   
		              }               
		           	}
		         }
		      
	}

	checkForADraw() {
		if (NumberOfClicks[0] + NumberOfClicks[1] + NumberOfClicks[2]+NumberOfClicks[3]+NumberOfClicks[4]+NumberOfClicks[5]+NumberOfClicks[6] == 42) {
			alert("Bot Knows It's draw!");
		}
	}

           Scan() {
           	this.checkForADraw();
            this.check4InaRightDiagonal();
            this.check4InaLeftDiagonal();
            this.check4InaRow();
            this.check4InaColumn();
          }


          	PlaceAbrick() {
		
				Oracle.DoYourTurn();

				if (PlacementMade == false) {
						RandomTrigger = false;				//When clicking on the main board RandomTrigger = true;

						let RandomNumber;
						RandomNumber = Math.floor((Math.random() * 7));
						while (RandomTrigger == false) {
						//while (RandomNumber === BadPlacements[0] || RandomNumber === BadPlacements[1] || RandomNumber === BadPlacements[2] || RandomNumber === BadPlacements[3] || RandomNumber === BadPlacements[4]|| RandomNumber === BadPlacements[5] || RandomNumber === BadPlacements[6] || EXIT == 1000) {
						//			RandomNumber = Math.floor((Math.random() * 7) + 1);
						//			EXIT = EXIT + 1
						//			if (EXIT == 999) {											//GÖr att man efter att loopat 999 ggr och det endast finns BadPlacements kvar.
						//				$('.ThisIsCol'+(RandomNumber)).trigger('click')			//Att man klickar på en dålig column. En BadPlacements kommer aldrig kunna vara den
						//				break;													//Den sista brickan i en column eftersom badplacements alltid gället "the 2nd Draw"
						//			}															//Från nuvarande tur.
						//		}

										$('.ThisIsCol'+(RandomNumber)+"Rad0").trigger('click');
										$('.ThisIsCol'+(RandomNumber)+"Rad0").trigger("mouseenter");		//fixar så att skuggan brickan försvinner
										$('.ThisIsCol'+(RandomNumber)+"Rad0").trigger("mouseleave");
										RandomNumber = Math.floor((Math.random() * 7));
										PlacementMade == true;

										
						}		
				}
				



	}

 }


let Bot = new HasAnyoneWon();


let EXIT = 0;
BadPlacements = [0,0,0,0,0,0,0];