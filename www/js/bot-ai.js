

let BotPlacementMade = false;
BadPlacements = [null,null,null,null,null,null,null];




class FortuneTeller  {

			//Player 1 is the Bot
			//Player 2 is the player


			Player1VictoryCheck() {
				for (var i=0; i < 7; i++) {
					if (5-NumberOfClicks[i] >= 0) {	
						VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = 1;
						Bot.Scan();
						VirtualBoard[ 5-NumberOfClicks[i] ] [ [i] ] = 0;
						if (TheBotKnowsIfPlayer1CanWin == true && BotPlacementMade == false) {
							$('.ThisIsColu'+i+"Rad0").trigger('click');
							console.log("Bot finds Player with Turnvalue 1 can win!");						//BOT IS ALWAYS TURNVALUE 1
							BotPlacementMade = true;
							$('.ThisIsColu0Rad0').trigger("mouseleave");
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
									$('.ThisIsColu'+i+"Rad0").trigger('click');
									console.log("Bot finds Player with Turnvalue -1 can win!");
									BotPlacementMade = true;
									$('.ThisIsColu0Rad0').trigger("mouseleave");
									TheBotKnowsIfPlayer2CanWin = false;
									
								}
							}	
						}
					}
			}
			
			Player2VictoryCheck2ndDraw() {
				if (BotPlacementMade == false) {
							for (var i=0; i < 7; i++) {
								if (4-NumberOfClicks[i] >= 0) {							//THis does so you dont try to add a number outside the colu
									VirtualBoard[ 4-NumberOfClicks[i] ] [ [i] ] = -1;
							//		console.log("Adding myfakemove and then op bricks and then do scanning for op victory");									//starts on 4-. The Bot need to check row +2 above the numerofclicks in that colu
									Bot.Scan();
									VirtualBoard[ 4-NumberOfClicks[i] ] [ [i] ] = 0;
									if (TheBotKnowsIfPlayer2CanWin == true) {											//only allows the loop if there a potential win 2nd turn
										BadPlacements [i] = i;
										console.log("Bot finds that " +i+ "is a bad colu due the 2nd draw");
										//alert("The bot knows player2 wins 2nd turn if u place a brick in colu " + i );
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
								$('.ThisIsColu3Rad0').trigger('click').trigger("mouseleave");
								BotPlacementMade = true;
								console.log("inne i if sats 1");
							} else if (NumberOfClicks[2] == null) {
								$('.ThisIsColu2Rad0').trigger('click').trigger("mouseleave");
								BotPlacementMade = true;
								console.log("inne i if sats 2");
							} else if (NumberOfClicks[2] == null) {
								$('.ThisIsColu4Rad0').trigger('click').trigger("mouseleave");
								BotPlacementMade = true;
								console.log("inne i if sats 3");

							}

					}
				}
			}

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

			}

}						
														
						

let Oracle = new FortuneTeller();


let TheBotKnowsIfPlayer1CanWin = false;
let TheBotKnowsIfPlayer2CanWin = false;
let TheBotKnowsOpHasSumofTwo = false;
let TheBotKnowsItHasSumofTwo = false;

//FUNCTION: SCANNING THE TABLE AFTER 4-IN-A-ROW (ROWS, COLuUMNS & DIAGONALS)//
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
		 

  check4InaColuumn() {
		    for (var i = 0; i < 7; i++) {
		          for (var c = 0; c < 3; c++) {
		             if (VirtualBoard[c][i] + VirtualBoard[c+1][i] + VirtualBoard[c+2][i] + VirtualBoard[c+3][i] == 4) {
		                TheBotKnowsIfPlayer1CanWin = true;
		                console.log("SCAN: PLAYER1 HAS WON IN COLuS");
		               
		             } else if (VirtualBoard[c][i] + VirtualBoard[c+1][i] + VirtualBoard[c+2][i] + VirtualBoard[c+3][i] == -4) {
		                TheBotKnowsIfPlayer2CanWin = true; 
		                console.log("SCAN: PLAYER2 HAS WON IN COLuS"); 
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

   Scan() {
   	this.checkForADraw();
    this.check4InaRightDiagonal();
    this.check4InaLeftDiagonal();
    this.check4InaRow();
    this.check4InaColuumn();


  }

  	PlaceAbrick(){
  		window.blockPlayerClick = true
  		console.log("STEP 1")
  		setTimeout(() => this.PlaceAbrickStep2(), 300);
  	}


//function(){
//	this.PlaceAbrickStep2()
//}
//
//above equals below. arrowsfunctions
//
//() => this.PlaceAbrickStep2()


  	PlaceAbrickStep2() {
  		window.blockPlayerClick = false
  		console.log("STEP 2")
		Oracle.DoYourMagic();


		if (BotPlacementMade == false) {
			// 1. Check if we can't place ANYWHERE
			let numEmpty = $('.colu.tom').length;
			if(numEmpty == 0){
				return;
			}


			// 2. Check how many colus are NOT BAD and NOT FULL
			let goodPlacements = [];
			for (let i = 0; i < BadPlacements.length; ++i) {
				if (BadPlacements[i] == null && NumberOfClicks[i] < 6) {
					goodPlacements.push(i);
				}
			}

			let availableColus = $('#fyraIRad .rad:first-child .colu.tom');

			// 3. If there are ONLY BAD places left, choose 1 of them randomly
			if (goodPlacements.length == 0) {
				let randomColuIndex = Math.floor(Math.random() * availableColus.length);
				$( availableColus[randomColuIndex] ).click().trigger("mouseleave");
				return;
			}

			// 4. Choose a random good placement
			let randomColuIndex = Math.floor(Math.random() * goodPlacements.length);
			let rndColu = goodPlacements[randomColuIndex];

			$('.ThisIsColu'+(rndColu)+"Rad0").trigger('click').trigger("mouseleave");

		}
	}
 }


let Bot = new Scanner();

