console.log("Exec botAi.cfg")
var TheBotKnowsIfPlayer1CanWin = false;
var TheBotKnowsIfPlayer2CanWin = false;
var VictoryCol1 = false;
var VictoryCol2 = false;
var VictoryCol3 = false;
var VictoryCol4 = false;
var VictoryCol5 = false;
var VictoryCol6 = false;
var VictoryCol7 = false;

var Col1VictoryForPlayer1 = false;
var Col2VictoryForPlayer1 = false;
var Col3VictoryForPlayer1 = false;
var Col4VictoryForPlayer1 = false;
var Col5VictoryForPlayer1 = false;
var Col6VictoryForPlayer1 = false;
var Col7VictoryForPlayer1 = false;

var Col1VictoryForPlayer2 = false;
var Col2VictoryForPlayer2 = false;
var Col3VictoryForPlayer2 = false;
var Col4VictoryForPlayer2 = false;
var Col5VictoryForPlayer2 = false;
var Col6VictoryForPlayer2 = false;
var Col7VictoryForPlayer2 = false;
var ComputerAlreadyClickedThisTurn = false
var Col1IsBad = 0;
var Col2IsBad = 0;
var Col3IsBad = 0;
var Col4IsBad = 0;
var Col5IsBad = 0;
var Col6IsBad = 0;
var Col7IsBad = 0;
var RandomNumber;



//AI RANDOM - BOT//
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




class FortuneTeller  {
			Col1Check() {
							cols[0][number_of_clicks_col_1] = 1;
							JudgeBotCheck.checkIfAnyoneHasWonBotCheck();
							cols[0][number_of_clicks_col_1] = 0;
							if (TheBotKnowsIfPlayer1CanWin == true) {							
								alert("Col1Victory is true for Player1");
								Col1VictoryForPlayer1 = true;
								TheBotKnowsIfPlayer1CanWin = false;
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





















//FUNCTION: SCANNING THE TABLE AFTER 4-IN-A-ROW (ROWS, COLUMNS & DIAGONALS)//
class HasAnyoneWonBotCheck {
  check4InaRowBotCheck() {
		    for (var v = 0; v < 7; v++) {
		      for (var h = 0; h < 4; h++) {
		          if (cols[h][0+v] + cols[h+1][0+v] + cols[h+2][0+v] + cols[h+3][0+v] == 4) {
		           //alert("Bot Knows that Player 1 Can Win somewhere in the Rows");
		           TheBotKnowsIfPlayer1CanWin = true;
		          
		         } else if (cols[h][0+v] + cols[h+1][0+v] + cols[h+2][0+v] + cols[h+3][0+v] == -4) {
		          //alert("Bot Knows that Player 2 Can Win somewhere in the Rows.");
		           TheBotKnowsIfPlayer2CanWin = true;          
		         }
		      }
		    }
		  }
		 

  check4InaColumnBotCheck() {
		    for (var c = 0; c < 7; c++) {
		          for (var i = 0; i < 3; i++) {
		             if (cols[0+c][i] + cols[0+c][i+1] + cols[0+c][i+2] + cols[0+c][i+3] == 4) {
		               // alert("Bot Knows Player 1 Win somewhere in the Columns");
		                TheBotKnowsIfPlayer1CanWin = true;
		               
		             } else if (cols[0+c][i] + cols[0+c][i+1] + cols[0+c][i+2] + cols[0+c][i+3] == -4) {
		               // alert("Bot Knows Player 2 Win somewhere in the columns");
		                TheBotKnowsIfPlayer2CanWin = true;   
		             }
		          	 }
		     }
	}
	


    check4InaLeftDiagonalBotCheck() {									//Doing this diagonal \ <-- bottom to top
    	                   	  
		          for (var r = 0; r < 4; r++) {
		            for (var x = 3; x < 6; x++) {           
		                  if (cols[0+r][x] + cols[1+r][x-1] + cols[2+r][x-2] + cols[3+r][x-3] == 4) {
		                 // alert("Bot Knows Player 1 Wins somewhere in the left diagnoal I(falling to left 30 grader)");
		                  TheBotKnowsIfPlayer1CanWin = true;
		                  
		                } else if (cols[0+r][x] + cols[1+r][x-1] + cols[2+r][x-2] + cols[3+r][x-3] == -4) {
		                 // alert("Bot Knows Player 2 Wins somewhere in the left diagnoal I(falling to left 30 grader)");
		                  TheBotKnowsIfPlayer2CanWin = true;
		              }               
		           	}
		         }
		      
	}
	

    check4InaRightDiagonalBotCheck() {    								//Doing this diagonal / <-- bottom to top    
			          for (var r = 0; r < 4; r++) {
			            for (var x = 0; x < 4; x++) {           
			                  if (cols[0+r][x] + cols[1+r][x+1] + cols[2+r][x+2] + cols[3+r][x+3] == 4) {
			                //  alert("Bot Knows Player 1 Wins somewhere in the Right diagnoal '/' ");
			                  TheBotKnowsIfPlayer1CanWin = true;
	
			                } else if (cols[0+r][x] + cols[1+r][x+1] + cols[2+r][x+2] + cols[3+r][x+3] == -4) {
			                //  alert("Bot Knows Player 2 Wins somewhere in the Right diagnoal '/' ");
			                  TheBotKnowsIfPlayer2CanWin = true;
			                }  
			            }
			          }
	}
		   

	checkForADrawBotCheck() {
		if (number_of_clicks_col_1+number_of_clicks_col_2+number_of_clicks_col_3+number_of_clicks_col_4+number_of_clicks_col_5+number_of_clicks_col_6+number_of_clicks_col_7 == 42 && OnlyOneWin == false) {
			alert("Bot Knows It's draw!");
		}
	}

           checkIfAnyoneHasWonBotCheck() {
           	this.checkForADrawBotCheck();
            this.check4InaRightDiagonalBotCheck();
            this.check4InaLeftDiagonalBotCheck();
            this.check4InaRowBotCheck();
            this.check4InaColumnBotCheck();
          }
  }

let JudgeBotCheck = new HasAnyoneWonBotCheck();



