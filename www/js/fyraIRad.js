let 		VirtualBoard =
			[
  			[0,0,0,0,0,0,0],
  			[0,0,0,0,0,0,0],
  			[0,0,0,0,0,0,0],
  			[0,0,0,0,0,0,0],
  			[0,0,0,0,0,0,0],
  			[0,0,0,0,0,0,0],
  			];

let 		NumberOfClicks = [null,null,null,null,null,null,null]
let RandomTrigger = true;



class Fyrairad {
	constructor(selector){
		this.load(selector);
	}

	async load(selector) {
		this.rader = 6;
		this.colus = 7;
		let jsonPlayers = await JSON._load('registration');
		this.player1 = new player(jsonPlayers[0].name, 0, "pink", 1, jsonPlayers[0].isBot);
		this.player2 = new player(jsonPlayers[1].name, 0, "blue", 2, jsonPlayers[1].isBot);
        $("#p1").text(this.player1.name + ' Score: ');
        $("#p2").text(this.player2.name + ' Score: ');
		this.player = this.player1;
		this.selector = selector;
		this.speletSlut = false;
		this.createGrid();
		this.setUpEvent();
		if (this.player.isBot == true) {
			console.log("jag e bot oich kör");
			Bot.PlaceAbrick();
		}
		console.log(this.player.isBot);
	}

	onSpelaresDrag() {
		$("#spelare").text(this.player.name);
	}

	spelare1Score() {
        $("#scoreP1").text(this.player1.score);
	}
	spelare2Score() {
        $("#scoreP2").text(this.player2.score);
	}

	delayedAlert(message){
	if (this.player.isBot == false) {
		$("#modal-winner .player-name").text(this.player.name);
		setTimeout(() => $("#modal-winner").modal("show"));
	} else if (this.player1.isBot == true && this.player2.isBot == true){
		$("#modal-twobots .player-name").text(this.player.name);
		setTimeout(() => $("#modal-twobots").modal("show"));
	} else {
		setTimeout(() => $("#modal-defeated").modal("show"));
	}

	}
	
	createGrid() {
		// tar saker från constructorn och lägger i board
		const board = $(this.selector);
		//gör så att hela griden töms
		board.empty();

		//kod för att få det att visa att player 1 är först ut
				$("#scoreP1").css("font-size", "28px");
				$("#p1").css("font-size", "28px");
				$("#p1").css("padding-top", "0px");
				$("#p2").css("padding-top", "8px");

				

					

		//när man restartar kommer man tbx hit och med this.speletSlut = false; gör så man kan spela igen
		this.speletSlut = false;
		this.player1.score = 0;
		this.player2.score = 0;
		this.player = this.player1;
		//RESET the values of VirutalBoard and number of clicks when restarting//
		VirtualBoard =
			[
  			[0,0,0,0,0,0,0],
  			[0,0,0,0,0,0,0],
  			[0,0,0,0,0,0,0],
  			[0,0,0,0,0,0,0],
  			[0,0,0,0,0,0,0],
  			[0,0,0,0,0,0,0],
  			];

  		NumberOfClicks = [null,null,null,null,null,null,null]


		//vi Loppar igenom varje rad och skapar en Div till varje rad
		for (let rad = 0; rad < this.rader; rad++) {
			const enrad = $('<div>').addClass('rad');
			//Och inne i varje rad skapar vi 7 olika coluumner
			for (let colu = 0; colu < this.colus; colu++) {
				const encolu = $('<div>').addClass("colu tom").addClass("ThisIsColu"+colu+"Rad"+rad)			//Gives each placement/circle a unique class
				//attr står för addattribute()
				.attr("data-colu", colu).attr("data-rad", rad);
				
				enrad.append(encolu);
			}
			board.append(enrad);
		}
	}

	setUpEvent() {
		const board = $(this.selector);
		//Gör så man får tillgång till this. Man behöver tillgång till this för att kuna bytta spelare
		const that = this;
		
		

		function hittaSistaTommaCellen(colu) {
			//ta alla coluumenr som har samma attribute data, alltså är på Samma rad lodrätt
			const cells = $(`.colu[data-colu='${colu}']`);
			//kollar igenom alla celler baklänges
			for(let i = cells.length - 1; i>= 0 ; i--) {
				//Man tar cellen man är på för tillfället
				const cell = $(cells[i]);
				//om cellen har classen "tom" ge tbx en cell
				if (cell.hasClass('tom')) {
					return cell;
				}
			}
			//Annars ge tbx noll
			return null;
		}

		//när man tar musen över en colu så läser den här coden utav vart man är någon stans
		//och visar vart man kan lägga sin "bricka"
		board.on('mouseenter', '.colu.tom', function() {
			if(that.player.isBot){} else {
			//ifall spelet är slut ge inte något värde ifall man klickar
			if (that.speletSlut) return;
			//vi vill hitta den sista tomma cellen i den coluumen
			const colu = $(this).data('colu');
			//Vissar en markering över den sista tomma "brickan" alltså den längst ner i coluumen
			const sistaTommaCellen = hittaSistaTommaCellen(colu);
			sistaTommaCellen.addClass(`hover-player${that.player.number}`);}

			
		});

		//denna funktion gör så att man bara ser vilken coluum man är på för tillfället och tar bort
		//dom man tidigare varit på
		board.on("mouseleave", ".colu", function() {
			$(".colu").removeClass(`hover-player${that.player.number}`);
		});

		//skapar en "bricka" som sätt längst ner på coluumen, ifall det redan e en bricka längst ner sätts den
		//brickan på den andra.
		board.on("click", ".colu.tom" , function() {

			// don't allow player to click during bot move
			if(window.blockPlayerClick){ return; }

			//Ifall sppelet är slut så ge inte något värde ifall man klickar
			if (that.speletSlut) return;

			const colu = $(this).data("colu");
			const rad = $(this).data("rad");
			let PlayerTurnValue;


		
		

			//I en coluumn finns det 6 "celler" eller "brickor" Denna funktion letar efter den sista tomma
			//Det vill säga ifall ngn fyllt up en "bricka" Då kommer den markera ovanför den "brickan"
			const sistaTommaCellen = hittaSistaTommaCellen(colu);
			sistaTommaCellen.removeClass(`tom hover-player${that.player.number}`);
			sistaTommaCellen.addClass('player'+that.player.number);
			sistaTommaCellen.data("spelare", that.player);
			//FOR AI//This adds the correct PlayerTurnvalue into the VirtualBoardArray.
			console.log(that.player);

		//	if(that.player.number == 1){						
		//		PlayerTurnValue = 1;
		//	} else {
		//		PlayerTurnValue = -1;
		//	}

			that.player.score++;
			//Making a DRAW so if player2
			if(that.speletSlut == false)
			{
				if(that.player1.score == 21 && that.player2.score == 21) {
				setTimeout(() => $("#modal-draw").modal("show"));
			}}

			

			
		

			const vinnare = that.kollEfterVinnare(
				sistaTommaCellen.data("rad"),
				sistaTommaCellen.data("colu")
				)
			
			if (vinnare){
				//gör så att spelet sluta när man vunnit
				that.speletSlut = true;
				
				
				that.delayedAlert("Game is OVER!!! " + that.player.name + " has won!!! with a score of " + that.player.score);
				//tar bort så att muspekaren inte syns ifall man har vunnit
				$(".colu.tom").removeClass("tom");
				if(that.player.isBot){

				} else {
				highScore.addScore(that.player);}
			}

		

				if(that.player == that.player1){
				$("#scoreP1").css("font-size", "28px");
				$("#p1").css("font-size", "28px");
				$("#p1").css("padding-top", "0px");
				$("#scoreP2").css("font-size", "20px");
				$("#p2").css("font-size", "20px");
				$("#p2").css("padding-top", "8px");
				
					} else {
				$("#scoreP2").css("font-size", "28px");
				$("#p2").css("font-size", "28px");
				$("#p2").css("padding-top", "0px");
				$("#scoreP1").css("font-size", "20px");
				$("#p1").css("font-size", "20px");
				$("#p1").css("padding-top", "8px");
				
			}
			//för att räkna score
			that.spelare1Score();
			that.spelare2Score();
			//Säger vems tur det är
			that.onSpelaresDrag();
			
	
			let clickedColu = $(this);
            let dataColu = clickedColu.data('colu');																//funkar men förstår inte vaför clicked.Colu.data automatiskt hämtar värdet i data-colu=? och inte andra ata värden?
           // let dataColuAlternative2 = clickedColu.attr('data-colu');

        
	        NumberOfClicks[dataColu] = NumberOfClicks[dataColu] + 1;
           	//console.log(NumberOfClicks)

           	if (that.player.isBot == true) {
           		PlayerTurnValue = 1;
           	} else {
           		PlayerTurnValue = -1;
           	}

           		//bytter spelare
			that.player = (that.player === that.player1) ? that.player2 : that.player1;
			//Vi triggar igång mouseenter igen för att man ska se direkt när en spelare har tryckt
			//Att den andra får sin "hover" färg och ser att det är sin tur
			$(this).trigger("mouseenter");

           	VirtualBoard[sistaTommaCellen.data("rad")][sistaTommaCellen.data("colu")] = PlayerTurnValue;

          	if (that.player.isBot == true) {
	          	if (that.player1.isBot == true && that.player2.isBot == true) {
	           		Inverter.invertBoard();
	  			}
           		Bot.PlaceAbrick();
           	}



		});

	}
		//kollar efter en vinnare
		kollEfterVinnare(rad, colu){
			const that = this;

			//få cell
			function fåCell(i, j) {
				return $(`.colu[data-rad='${i}'][data-colu='${j}']`);
			}
			//en funktion som gör att man kan kolla åt olika håll
			function kollaMot(mot) {
				let total = 0;
				let i = rad + mot.i;
				let j = colu + mot.j;
				let next = fåCell(i, j);
				while (i >= 0 &&
					i< that.rader &&
					j >= 0 &&
					j < that.colus &&
					next.data("spelare") === that.player)
				{
					total++;
					i += mot.i;
					j += mot.j;
					next = fåCell(i,j);
				}
				return total;
			}
			//kollar ifall man har fått 4 irad åt något håll
			function kollaVin(motA, motB) {
				const total = 1 +
				kollaMot(motA) +
				kollaMot(motB);
				//Spelare med 4 i rad vinner
				if (total >= 4) {
					return that.player;
				} else {
					return null;
				}
			}
			//kolla vin diagonalt ifrån Bott vänster till Topp höger
			function kollaDiagonaltBVtillTH() {
				return kollaVin({i: 1, j: -1}, {i: -1,j: 1})
			}
			//kolla vin diagonalt ifrån Topp vänster till Bott höger
			function kollaDiagonaltTVtillBH() {
				return kollaVin({i: 1, j: 1}, {i: -1,j: -1})
			}
				//kolla vin diagonalt ifrån Bott höger till Topp vänster
			function kollaDiagonaltBHtillTV() {
				return kollaVin({i: -1, j: 1}, {i: 1,j: -1})
			}
			//kolla vin diagonalt ifrån Topp höger till Bott vänster
			function kollaDiagonaltTHtillBV() {
				return kollaVin({i: -1, j: -1}, {i: 1,j: 1})
			}
			//Kollar ifall man vunnit verticalt
			function kollaVerticalt() {
				return kollaVin({i: -1, j: 0}, {i: 1, j: 0});
			}
			//kollar ifall man vunnit horizontelt
			function kollaHorizontelt() {
				return kollaVin({i: 0, j: -1}, {i: 0, j: 1});
			}

			//ger tbx värdet ifall man vunnit
			return kollaVerticalt() ||
			 kollaHorizontelt() ||
			 kollaDiagonaltTVtillBH() ||
			 kollaDiagonaltBVtillTH() 
			 kollaDiagonaltTHtillBV() ||
			 kollaDiagonaltBHtillTV();
			}
			//restart
			startaOm() {
				this.createGrid();
				this.onSpelaresDrag();
				this.spelare1Score();
				this.spelare2Score();
				if (this.player.isBot == true) {
					Bot.PlaceAbrick();
				}

			}
		
	}

class Invert {
			
	      invertBoard() {
	        	let v = VirtualBoard;
		  		for(let row = 0; row < v.length; row++){
		  			for(let colu = 0; colu < v[row].length; colu++){
		  			v[row][colu] = -v[row][colu];
		  			}
		  		}
	  		}
	  	}
let Inverter = new Invert;