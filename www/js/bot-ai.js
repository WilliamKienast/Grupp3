

console.log("Exec botAi2.cfg")
let BotPlacementMade = false;
BadPlacements = [null,null,null,null,null,null,null];




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
					if (5-NumberOfClicks[i] >= 0) {	
						VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = 1;
						Bot.Scan();
						VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = 0;
						if (TheBotKnowsIfPlayer1CanWin == true && BotPlacementMade == false) {
							$('.ThisIsCol'+i+"Rad0").trigger('click');
							console.log("Bot finds Player with Turnvalue 1 can win!");						//BOT IS ALWAYS TURNVALUE 1
							BotPlacementMade = true;
							$('.ThisIsCol0Rad0').trigger("mouseleave");
							TheBotKnowsIfPlayer1CanWin = false;
						}
					}	
				}
			}

			Player2VictoryCheck() {
			if (BotPlacementMade == false) {
						for (var i=0; i < 7; i++) {
							if (5-NumberOfClicks[i] >= 0) {	
								VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = -1;
								Bot.Scan();
								VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = 0;
								if (TheBotKnowsIfPlayer2CanWin == true && BotPlacementMade == false) {
									$('.ThisIsCol'+i+"Rad0").trigger('click');
									console.log("Bot finds Player with Turnvalue -1 can win!");
									BotPlacementMade = true;
									$('.ThisIsCol0Rad0').trigger("mouseleave");
									TheBotKnowsIfPlayer2CanWin = false;
									
								}
							}	
						}
					}
			}
			
			Player2VictoryCheck2ndDraw() {
				if (BotPlacementMade == false) {
							for (var i=0; i < 7; i++) {
								if (4-NumberOfClicks[i] >= 0) {							//THis does so you dont try to add a number outside the col
									VirtualBoard[ 4-NumberOfClicks[i] ] [ [i] ] = -1;
							//		console.log("Adding myfakemove and then op bricks and then do scanning for op victory");									//starts on 4-. The Bot need to check row +2 above the numerofclicks in that col
									Bot.Scan();
									VirtualBoard[ 4-NumberOfClicks[i] ] [ [i] ] = 0;
									if (TheBotKnowsIfPlayer2CanWin == true) {											//only allows the loop if there a potential win 2nd turn
										BadPlacements [i] = i;
										console.log("Bot finds that " +i+ "is a bad col due the 2nd draw");
										//alert("The bot knows player2 wins 2nd turn if u place a brick in col " + i );
																		//resetting the value so it doesnt affekt next check
										TheBotKnowsIfPlayer2CanWin = false;												//resetting the memory of the win condition. otherwise the bot would think that any placement after the wincondition is met is a win.
									}
								}
							}
				}
			}

			OfTwoAGoodStart() {
				if (BotPlacementMade == false) {
					if ((NumberOfClicks[0] + NumberOfClicks[1] + NumberOfClicks[2]+NumberOfClicks[3]+NumberOfClicks[4]+NumberOfClicks[5]+NumberOfClicks[6]) < 6) {
						console.log("number of lcikcs < 6")
							if (NumberOfClicks[3] == null) {
								$('.ThisIsCol3Rad0').trigger('click');
								BotPlacementMade = true;
								console.log("inne i if sats 1");
							} else if (NumberOfClicks[2] == null) {
								$('.ThisIsCol2Rad0').trigger('click');
								BotPlacementMade = true;
								console.log("inne i if sats 2");
							} else if (NumberOfClicks[2] == null) {
								$('.ThisIsCol4Rad0').trigger('click');
								BotPlacementMade = true;
								console.log("inne i if sats 3");

							}

					}
				}
			}

		//	Player2Sumof3Check() {
		//	if (BotPlacementMade == false) {
		//				for (var i=0; i < 7; i++) {
		//					if (5-NumberOfClicks[i] >= 0) {	
		//						VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = -1;
		//						Bot.checkForPossible3inARow();
		//						VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = 0;
		//						if (TheBotKnowsOpHasSumofTwo == true && BotPlacementMade == false) {
		//							console.log("hej");
		//							$('.ThisIsCol'+i+"Rad0").trigger('click');
		//							console.log("Bot finds Player with Turnvalue -1 has two in a row");
		//							BotPlacementMade = true;
		//							$('.ThisIsCol0Rad0').trigger("mouseleave");
		//							TheBotKnowsOpHasSumofTwo = false;
		//							
		//						}
		//					}	
		//				}
		//			}
		//	}

			DoYourMagic () {
				BadPlacements = [null,null,null,null,null,null,null];
				BotPlacementMade = false;
				TheBotKnowsIfPlayer1CanWin = false;
 				TheBotKnowsIfPlayer2CanWin = false;
 				TheBotKnowsOpHasSumofTwo = false;
				TheBotKnowsItHasSumofTwo = false;
				this.Player1VictoryCheck();
				this.Player2VictoryCheck();
				this.Player2VictoryCheck2ndDraw();
				this.OfTwoAGoodStart();
			//	this.Player2Sumof3Check();
			}

}						
														
						

let Oracle = new FortuneTeller();


let TheBotKnowsIfPlayer1CanWin = false;
let TheBotKnowsIfPlayer2CanWin = false;
let TheBotKnowsOpHasSumofTwo = false;
let TheBotKnowsItHasSumofTwo = false;

//FUNCTION: SCANNING THE TABLE AFTER 4-IN-A-ROW (ROWS, COLUMNS & DIAGONALS)//
class Scanner {

  check4InaRow() {
		    for (var h = 0; h < 6; h++) {				//Kollar höjden
		      for (var l = 0; l < 4; l++) {				//Kollar längden	* * * *
		          if (VirtualBoard[0+h][0+l] + VirtualBoard[h][l+1] + VirtualBoard[h][l+2] + VirtualBoard[h][l+3] == 4) {
		           TheBotKnowsIfPlayer1CanWin = true;
		          console.log("SCAN: PLAYER1 HAS WON IN ROWS");
		         } else if (VirtualBoard[0+h][0+l] + VirtualBoard[h][l+1] + VirtualBoard[h][l+2] + VirtualBoard[h][l+3] == -4) {
		           TheBotKnowsIfPlayer2CanWin = true;
		           console.log("SCAN: PLAYER2 HAS WON IN ROWS");          
		         }
		      }
		    }
		  }
		 

  check4InaColumn() {
		    for (var i = 0; i < 7; i++) {
		          for (var c = 0; c < 3; c++) {
		             if (VirtualBoard[c][i] + VirtualBoard[c+1][i] + VirtualBoard[c+2][i] + VirtualBoard[c+3][i] == 4) {
		                TheBotKnowsIfPlayer1CanWin = true;
		                console.log("SCAN: PLAYER1 HAS WON IN COLS");
		               
		             } else if (VirtualBoard[c][i] + VirtualBoard[c+1][i] + VirtualBoard[c+2][i] + VirtualBoard[c+3][i] == -4) {
		                TheBotKnowsIfPlayer2CanWin = true; 
		                console.log("SCAN: PLAYER2 HAS WON IN COLS"); 
		             }
		          	 }
		     }
	}
	


    check4InaLeftDiagonal() {									//Doing this diagonal \ <-- bottom to top
    	                   	  
		          for (var c = 0; c < 4; c++) {
		            for (var r = 0; r < 3; r++) {           
		                  if (VirtualBoard[r][c] + VirtualBoard[r+1][c+1] + VirtualBoard[r+2][c+2] + VirtualBoard[r+3][c+3] == 4) {
		                  TheBotKnowsIfPlayer1CanWin = true;
		                  console.log("SCAN: PLAYER1 HAS WON IN LEFT DIAGONAL");
		                  
		                } else if (VirtualBoard[r][c] + VirtualBoard[r+1][c+1] + VirtualBoard[r+2][c+2] + VirtualBoard[r+3][c+3] == -4) {
		                  TheBotKnowsIfPlayer2CanWin = true;
		                  console.log("SCAN: PLAYER2 HAS WON IN LEFT DIAGONAL");
		   
		              }               
		           	}
		         }
		      
	}
	

    check4InaRightDiagonal() {									//Doing this diagonal \ <-- bottom to top
    	                   	  
		          for (var c = 0; c < 4; c++) {
		            for (var r = 0; r < 3; r++) {           
		                  if (VirtualBoard[r][c+3] + VirtualBoard[r+1][c+2] + VirtualBoard[r+2][c+1] + VirtualBoard[r+3][c+0] == 4) {
		                  TheBotKnowsIfPlayer1CanWin = true;
		                  console.log("SCAN: PLAYER1 HAS WON IN RIGHT DIAGONAL");
		                  
		                } else if (VirtualBoard[r][c+3] + VirtualBoard[r+1][c+2] + VirtualBoard[r+2][c+1] + VirtualBoard[r+3][c+0] == -4) {
		                  TheBotKnowsIfPlayer2CanWin = true;
		                  console.log("SCAN: PLAYER2 HAS WON IN RIGHT DIAGONAL");
		   
		              }               
		           	}
		         }
		      
	}

	checkForADraw() {
		if (NumberOfClicks[0] + NumberOfClicks[1] + NumberOfClicks[2]+NumberOfClicks[3]+NumberOfClicks[4]+NumberOfClicks[5]+NumberOfClicks[6] == 42) {
			alert("Bot Knows It's draw!");
		}
	}

	//  checkForPossible3inARow() {
	//	    for (var h = 0; h < 6; h++) {				//Kollar höjden
	//	      for (var l = 0; l < 4; l++) {				//Kollar längden	* * * *
	//	          if (VirtualBoard[0+h][0+l] + VirtualBoard[h][l+1] + VirtualBoard[h][l+2] + VirtualBoard[h][l+3] == -3) {
	//	           TheBotKnowsOpHasSumofTwo = true;
	//	          console.log("SCAN: OP HAS TWO IN A ROW AND EMPTY SPACES NEXT TO IT");
	//	         } else if (VirtualBoard[0+h][0+l] + VirtualBoard[h][l+1] + VirtualBoard[h][l+2] + VirtualBoard[h][l+3] == 3) {
	//	           TheBotKnowsItHasSumofTwo = true;
	//	           console.log("SCAN: BOT HAS TWO IN ROWS AND EMPTY SPACES NEXT TO IT");          
	//	         }
	//	      }
	//	    }
	//	  }
		 


   Scan() {
   	this.checkForADraw();
    this.check4InaRightDiagonal();
    this.check4InaLeftDiagonal();
    this.check4InaRow();
    this.check4InaColumn();
 //   this.checkForPossible3inARow();

  }


  	PlaceAbrick() {
		
		Oracle.DoYourMagic();


		if (BotPlacementMade == false) {
			// 1. Check if we can't place ANYWHERE
			let numEmpty = $('.col.tom').length;
			if(numEmpty == 0){
				return;
			}


			// 2. Check how many cols are NOT BAD and NOT FULL
			let goodPlacements = [];
			for (let i = 0; i < BadPlacements.length; ++i) {
				if (BadPlacements[i] == null && NumberOfClicks[i] < 6) {
					goodPlacements.push(i);
				}
			}

			let availableCols = $('#fyraIRad .rad:first-child .col.tom');

			// 3. If there are ONLY BAD places left, choose 1 of them randomly
			if (goodPlacements.length == 0) {
				let randomColIndex = Math.floor(Math.random() * availableCols.length);
				$( availableCols[randomColIndex] ).click().trigger("mouseleave");
				return;
			}

			// 4. Choose a random good placement
			let randomColIndex = Math.floor(Math.random() * goodPlacements.length);
			let rndCol = goodPlacements[randomColIndex];

			$('.ThisIsCol'+(rndCol)+"Rad0").trigger('click').trigger("mouseleave");

		}


				

		// let TempClick;
		// let RandomNumber;
		// RandomNumber = Math.floor((Math.random() * 7));
		// let EXIT = 0;
		// if (BotPlacementMade == false) {
		// 		RandomTrigger = false;				//When clicking on the main board RandomTrigger = true;

		// 		if ( (NumberOfClicks[0] + NumberOfClicks[1] + NumberOfClicks[2] + NumberOfClicks[3] + NumberOfClicks[4] + NumberOfClicks[5] + NumberOfClicks[6]) < 42) {				//Stop the endless loop of 
		// 				while (RandomTrigger == false) {
		// 					console.log('aaaa', BadPlacements, RandomNumber);
		// 				while (BadPlacements.includes(RandomNumber) && EXIT < 1000) {
		// 							RandomNumber = Math.floor((Math.random() * 7));
		// 							console.log("HEJ JAG AR INNE I LOOP EXIT", RandomNumber)
		// 							EXIT = EXIT + 1;
		// 							if (EXIT > 500) {
		// 								EXIT = 1001;											//GÖr att man efter att loopat 999 ggr och det endast finns BadPlacements kvar.
		// 								$('.ThisIsCol'+(RandomNumber)+"Rad0").trigger('click');
		// 								$('.ThisIsCol'+(RandomNumber)+"Rad0").trigger("mouseleave");
		// 								console.log("HEJ JAG AR INNE I LOOP EXIT")
		// 								BotPlacementMade = true;			//Att man klickar på en dålig column. En BadPlacements kommer aldrig kunna vara den
		// 								break;												//Den sista brickan i en column eftersom badplacements alltid gället "the 2nd Draw"
		// 							}															//Från nuvarande tur.
		// 						}

		// 								if (BotPlacementMade == false) {
		// 									if ($('.ThisIsCol'+(RandomNumber)+"Rad0").hasClass('tom')) {
		// 										$('.ThisIsCol'+(RandomNumber)+"Rad0").trigger('click');
		// 										BotPlacementMade = true;
		// 										RandomTrigger = true;
		// 									}
		// 									$('.ThisIsCol'+(RandomNumber)+"Rad0").trigger("mouseleave");
		// 									RandomNumber = Math.floor((Math.random() * 7));
		// 									console.log("HEJ JAG AR INNE I LOOP RANDOM NUMBER")
		// 								}
								
																				
		// 						}
		// 		} else {
		// 			alert("all places are full trigger restart fucntion?");
		// 		}
	}
 }


let Bot = new Scanner();




//if BadPlacements.includes(RandomNumber)

//BadPlacements.indexOf(RandomNumber) == RandomNumber

//placementArray [null, null, null, null, null, null, null]


//placementArray.indexOf()

//$('.ThisIsCol'+(RandomNumber)+"Rad0").trigger('click')

