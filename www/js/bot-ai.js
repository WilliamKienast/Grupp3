

console.log("Exec botAi.cfg")



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

/*
class MasterBot {
	PlaceAbrickAnywhere() {
		if (ComputerAlreadyClickedThisTurn == true) {
			ComputerAlreadyClickedThisTurn = false;
		}
		Oracle.CheckForAnyGoodSpotsOnTheBoard();
		if (ComputerAlreadyClickedThisTurn == false) {
			if (number_of_clicks_col_1+number_of_clicks_col_2+number_of_clicks_col_3+number_of_clicks_col_4+number_of_clicks_col_5+number_of_clicks_col_6+number_of_clicks_col_7 == 42) {		//fixes endless loop if no bricks are empty
																																																//if == 42 I do nothing//
			} else {

					var Tempclicks = number_of_clicks_col_1+number_of_clicks_col_2+number_of_clicks_col_3+number_of_clicks_col_4+number_of_clicks_col_5+number_of_clicks_col_6+number_of_clicks_col_7; 
					while (Tempclicks == number_of_clicks_col_1+number_of_clicks_col_2+number_of_clicks_col_3+number_of_clicks_col_4+number_of_clicks_col_5+number_of_clicks_col_6+number_of_clicks_col_7) {
						// FUNCTION SO THAT THE RANDOM NUMBER AINT A BAD SPOT ColXisBad//
						RandomNumber = Math.floor((Math.random() * 7) + 1);
						while (RandomNumber === Col1IsBad || RandomNumber === Col2IsBad || RandomNumber === Col3IsBad || RandomNumber === Col4IsBad || RandomNumber === Col5IsBad || RandomNumber === Col6IsBad || RandomNumber === Col7IsBad) {
									RandomNumber = Math.floor((Math.random() * 7) + 1);
								}
									if (cols[RandomNumber-1][5] !== 1 || -1) {
										$('.col'+(RandomNumber)+'row6').trigger('click');
									}
						
				}
			}
		}
	}
}

let RandomBot = new MasterBot();

*/

/*
class FortuneTeller  {

			//Player 1 is the Bot
			//Player 2 is the player
			//There is a walkaround for this but dont know this value for player function


			Player1VictoryCheck() {
				for (var i=0; i < 7; i++) {
						VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = 1;
						Bot.Scan();
						if (TheBotKnowsIfPlayer1CanWin == true) {
							$('.ThisIsCol'+i).trigger('click')
							return;
						}
						VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = 0;
				}
			}

			Player2VictoryCheck() {
				for (var i=0; i < 7; i++) {
						VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = -1;
						Bot.Scan();
						if (TheBotKnowsIfPlayer2CanWin == true) {
							$('.ThisIsCol'+i).trigger('click')
							return;
						}
						VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = 0;
				}
			}

			
			Player2VictoryCheck2ndDraw() {
				for (var i=0; i < 7; i++) {
						VirtualBoard[ 4-NumberOfClicks[i] ] [ [i] ] = -1;									//starts on 4-. The Bot need to check row +2 above the numerofclicks in that col
						Bot.Scan();
						if (TheBotKnowsIfPlayer2CanWin == true) {											//only allows the loop if there a potential win 2nd turn
							BadPlacements [i] = i
							alert("The bot knows player2 wins 2nd turn if u place a brick in col " + i );
							VirtualBoard[ 4-NumberOfClicks[i] ] [ [i] ] = 0;								//resetting the value so it doesnt affekt next check
							TheBotKnowsIfPlayer2CanWin = false;												//resetting the memory of the win condition. otherwise the bot would think that any placement after the wincondition is met is a win.
						}
						
				}
			}						
														
						
			

			Col2Check() {
							cols[1][number_of_clicks_col_2] = 1;
							JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
							cols[1][number_of_clicks_col_2] = 0;
							if (TheBotKnowsIfPlayer1CanWin == true) {							
								alert("Col2Victory is true for Player1");
								Col2VictoryForPlayer1 = true;
								TheBotKnowsIfPlayer1CanWin = false;	
								}													
														
						}
			

			Col3Check() {
							cols[2][number_of_clicks_col_3] = 1;
							JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
							cols[2][number_of_clicks_col_3] = 0;
							if (TheBotKnowsIfPlayer1CanWin == true) {						
								alert("Col3Victory is true for Player1");
								Col3VictoryForPlayer1 = true;
								TheBotKnowsIfPlayer1CanWin = false;	
							}													
																
						}
			

			Col4Check() {
							cols[3][number_of_clicks_col_4] = 1;
							JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
							cols[3][number_of_clicks_col_4] = 0;
							if (TheBotKnowsIfPlayer1CanWin == true) {						
								alert("Col4Victory is true for Player1");
								Col4VictoryForPlayer1 = true;
								TheBotKnowsIfPlayer1CanWin = false;	
								}													
																
						}
			

			Col5Check() {
								cols[4][number_of_clicks_col_5] = 1;
								JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
								cols[4][number_of_clicks_col_5] = 0;
								if (TheBotKnowsIfPlayer1CanWin == true) {							
									alert("Col5Victory is true for Player1");
									Col5VictoryForPlayer1 = true;
									TheBotKnowsIfPlayer1CanWin = false;	
								}													
	

						}
			

			Col6Check() {
							cols[5][number_of_clicks_col_6] = 1;
							JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
							cols[5][number_of_clicks_col_6] = 0;
							if (TheBotKnowsIfPlayer1CanWin == true) {							
								alert("Col6Victory is true for Player1");
								Col6VictoryForPlayer1 = true;
								TheBotKnowsIfPlayer1CanWin = false;	
								}													
														
						}
			

			Col7Check() {
							cols[6][number_of_clicks_col_7] = 1;
							JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
							cols[6][number_of_clicks_col_7] = 0;
							if (TheBotKnowsIfPlayer1CanWin == true) {							
								alert("Col7Victory is true for Player1");
								Col7VictoryForPlayer1 = true;
								TheBotKnowsIfPlayer1CanWin = false;
							}														
														
						}
			
			Col1CheckOpponent() {
									cols[0][number_of_clicks_col_1] = -1;
									JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
									cols[0][number_of_clicks_col_1] = 0;
									if (TheBotKnowsIfPlayer2CanWin == true) {							
										alert("Col1Victory is true for Player2");
										Col1VictoryForPlayer2 = true;
										TheBotKnowsIfPlayer2CanWin = false;
									}													
														
								}
			

			Col2CheckOpponent() {
									cols[1][number_of_clicks_col_2] = -1;
									JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
									cols[1][number_of_clicks_col_2] = 0;
									if (TheBotKnowsIfPlayer1CanWin == true) {							
										alert("Col2Victory is true for Player2");
										Col2VictoryForPlayer2 = true;
										TheBotKnowsIfPlayer2CanWin = false;	
									}													
															
								}
			

			Col3CheckOpponent() {
									cols[2][number_of_clicks_col_3] = -1;
									JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
									cols[2][number_of_clicks_col_3] = 0;
									if (TheBotKnowsIfPlayer2CanWin == true) {						
										alert("Col3Victory is true for Player2");
										Col3VictoryForPlayer2 = true;
										TheBotKnowsIfPlayer2CanWin = false;	
									}																										
								}
			

			Col4CheckOpponent() {
									cols[3][number_of_clicks_col_4] = -1;
									JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
									cols[3][number_of_clicks_col_4] = 0;
									if (TheBotKnowsIfPlayer2CanWin == true) {						
										alert("Col4Victory is true for Player2");
										Col4VictoryForPlayer2 = true;
										TheBotKnowsIfPlayer2CanWin = false;	
										}													
														
								}
			

			Col5CheckOpponent() {
									cols[4][number_of_clicks_col_5] = -1;
									JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
									cols[4][number_of_clicks_col_5] = 0;
									if (TheBotKnowsIfPlayer2CanWin == true) {							
										alert("Col5Victory is true for Player2");
										Col5VictoryForPlayer2 = true;
										TheBotKnowsIfPlayer2CanWin = false;	
										}													


								}
			

			Col6CheckOpponent() {
									cols[5][number_of_clicks_col_6] = -1;
									JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
									cols[5][number_of_clicks_col_6] = 0;
									if (TheBotKnowsIfPlayer2CanWin == true) {							
										alert("Col6Victory is true for Player2");
										Col6VictoryForPlayer2 = true;
										TheBotKnowsIfPlayer2CanWin = false;	
										}													
															
								}
			

			Col7CheckOpponent() {
									cols[6][number_of_clicks_col_7] = -1;
									JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
									cols[6][number_of_clicks_col_7] = 0;
									if (TheBotKnowsIfPlayer2CanWin == true) {							
										alert("Col7Victory is true for Player2");
										Col7VictoryForPlayer2 = true;
										TheBotKnowsIfPlayer2CanWin = false;
									}														
															
								}

								//////////CHECKS THE 2ND DRAW FOR OPPONENT -1///////////
			Col1Check2ndDraw() {
							cols[0][number_of_clicks_col_1+1] = -1;
							JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
							cols[0][number_of_clicks_col_1+1] = 0;
							if (TheBotKnowsIfPlayer2CanWin == true) {							
								alert("The 2nd draw of column 1 is victory for opponent");
								Col1IsBad = 1;
								TheBotKnowsIfPlayer2CanWin = false;
							}													
														
						}
			

			Col2Check2ndDraw() {
							cols[1][number_of_clicks_col_2+1] = -1;
							JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
							cols[1][number_of_clicks_col_2+1] = 0;
							if (TheBotKnowsIfPlayer2CanWin == true) {							
								alert("The 2nd draw of column 2 is victory for opponent");
								Col2IsBad = 2;
								TheBotKnowsIfPlayer2CanWin = false;	
								}													
														
						}
			

			Col3Check2ndDraw() {
							cols[2][number_of_clicks_col_3+1] = -1;
							JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
							cols[2][number_of_clicks_col_3+1] = 0;
							if (TheBotKnowsIfPlayer2CanWin == true) {						
								alert("The 2nd draw of column 3 is victory for opponent");
								Col3IsBad = 3;
								TheBotKnowsIfPlayer2CanWin = false;	
							}													
																
						}
			

			Col4Check2ndDraw() {
							cols[3][number_of_clicks_col_4+1] = -1;
							JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
							cols[3][number_of_clicks_col_4+1] = 0;
							if (TheBotKnowsIfPlayer2CanWin == true) {						
								alert("The 2nd draw of column 4 is victory for opponent");
								Col4IsBad = 4;
								TheBotKnowsIfPlayer2CanWin = false;	
								}													
																
						}
			

			Col5Check2ndDraw() {
								cols[4][number_of_clicks_col_5+1] = -1;
								JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
								cols[4][number_of_clicks_col_5+1] = 0;
								if (TheBotKnowsIfPlayer2CanWin == true) {							
									alert("The 2nd draw of column 5 is victory for opponent");
									Col5IsBad = 5;
									TheBotKnowsIfPlayer2CanWin = false;	
								}													
	

						}
			

			Col6Check2ndDraw() {
							cols[5][number_of_clicks_col_6+1] = -1;
							JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
							cols[5][number_of_clicks_col_6+1] = 0;
							if (TheBotKnowsIfPlayer2CanWin == true) {							
								alert("The 2nd draw of column 6 is victory for opponent");
								Col6IsBad = 6;
								TheBotKnowsIfPlayer2CanWin = false;	
								}													
														
						}
			

			Col7Check2ndDraw() {
							cols[6][number_of_clicks_col_7+1] = -1;
							JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
							cols[6][number_of_clicks_col_7+1] = 0;
							if (TheBotKnowsIfPlayer2CanWin == true) {							
								alert("The 2nd draw of column 7 is victory for opponent");
								Col17sBad = 7;
								TheBotKnowsIfPlayer2CanWin = false;
							}														
														
						}




			MakeADraw() {

						//Red Player//
				if (Col1VictoryForPlayer1 == true) {
					$('.col1row6').trigger('click');
					ComputerAlreadyClickedThisTurn = true;
				} else if (Col2VictoryForPlayer1 == true) {
					$('.col2row6').trigger('click');
					ComputerAlreadyClickedThisTurn = true;
				} else if (Col3VictoryForPlayer1 == true) {
					$('.col3row6').trigger('click');
					ComputerAlreadyClickedThisTurn = true;
				} else if (Col4VictoryForPlayer1 == true) {
					$('.col4row6').trigger('click');
					ComputerAlreadyClickedThisTurn = true;
				} else if (Col5VictoryForPlayer1 == true) {
					$('.col5row6').trigger('click');
					ComputerAlreadyClickedThisTurn = true;
				} else if (Col6VictoryForPlayer1 == true) {
					$('.col6row6').trigger('click');
					ComputerAlreadyClickedThisTurn = true;
				} else if (Col7VictoryForPlayer1 == true) {
					$('.col7row6').trigger('click');
					ComputerAlreadyClickedThisTurn = true;

				} else if (Col1VictoryForPlayer2 == true) {
					$('.col1row6').trigger('click');
					ComputerAlreadyClickedThisTurn = true;
				} else if (Col2VictoryForPlayer2 == true) {
					$('.col2row6').trigger('click');
					ComputerAlreadyClickedThisTurn = true;
				} else if (Col3VictoryForPlayer2 == true) {
					$('.col3row6').trigger('click');
					ComputerAlreadyClickedThisTurn = true;
				} else if (Col4VictoryForPlayer2 == true) {
					$('.col4row6').trigger('click');
					ComputerAlreadyClickedThisTurn = true;
				} else if (Col5VictoryForPlayer2 == true) {
					$('.col5row6').trigger('click');
					ComputerAlreadyClickedThisTurn = true;
				} else if (Col6VictoryForPlayer2 == true) {
					$('.col6row6').trigger('click');
					ComputerAlreadyClickedThisTurn = true;
				} else if (Col7VictoryForPlayer2 == true) {
					$('.col7row6').trigger('click');
					ComputerAlreadyClickedThisTurn = true;
				};
				Col1VictoryForPlayer1 = false;
				Col2VictoryForPlayer1 = false;
				Col3VictoryForPlayer1 = false;
				Col4VictoryForPlayer1 = false;
				Col5VictoryForPlayer1 = false;
				Col6VictoryForPlayer1 = false;
				Col7VictoryForPlayer1 = false;

				Col1VictoryForPlayer2 = false;
				Col2VictoryForPlayer2 = false;
				Col3VictoryForPlayer2 = false;
				Col4VictoryForPlayer2 = false;
				Col5VictoryForPlayer2 = false;
				Col6VictoryForPlayer2 = false;
				Col7VictoryForPlayer2 = false;

			}


			CheckForAnyGoodSpotsOnTheBoard() {
				this.Col1Check();
				this.Col2Check();
				this.Col3Check();
				this.Col4Check();
				this.Col5Check();
				this.Col6Check();
				this.Col7Check();
				this.Col1CheckOpponent();
				this.Col2CheckOpponent();
				this.Col3CheckOpponent();
				this.Col4CheckOpponent();
				this.Col5CheckOpponent();
				this.Col6CheckOpponent();
				this.Col7CheckOpponent();
				this.Col1Check2ndDraw();
				this.Col2Check2ndDraw();
				this.Col3Check2ndDraw();
				this.Col4Check2ndDraw();
				this.Col5Check2ndDraw();
				this.Col6Check2ndDraw();
				this.Col7Check2ndDraw();
				this.MakeADraw();
			}

}

let Oracle = new FortuneTeller();

*/
















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
		
						// FUNCTION SO THAT THE RANDOM NUMBER AINT A BAD SPOT ColXisBad//
						let RandomNumber;
						RandomNumber = Math.floor((Math.random() * 7));
						TotalNumberOfClicks = (NumberOfClicks[0]+NumberOfClicks[1]+NumberOfClicks[2]+NumberOfClicks[3]+NumberOfClicks[4]+NumberOfClicks[5]+NumberOfClicks[6])
						while ( TotalNumberOfClicks == (NumberOfClicks[0]+NumberOfClicks[1]+NumberOfClicks[2]+NumberOfClicks[3]+NumberOfClicks[4]+NumberOfClicks[5]+NumberOfClicks[6]) )
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

										
						}		
						
				





 }


let Bot = new HasAnyoneWon();


let EXIT = 0;
let TotalNumberOfClicks = 0;
BadPlacements = [0,0,0,0,0,0,0];