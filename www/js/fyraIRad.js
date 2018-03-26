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
		this.cols = 7;
		let jsonPlayers = await JSON._load('registration');
		this.player1 = new player(jsonPlayers[0].name, 0, "blue", 1);
		this.player2 = new player(jsonPlayers[1].name, 0, "pink", 2);
        $("#p1").text(this.player1.name + ' Score: ');
        $("#p2").text(this.player2.name + ' Score: ');
		
		this.player = this.player1;
		this.selector = selector;
		this.speletSlut = false;
		this.createGrid();
		this.setUpEvent();
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

	createGrid() {
		// tar saker från constructorn och lägger i board
		const board = $(this.selector);
		//gör så att hela griden töms
		board.empty();

		//när man restartar kommer man tbx hit och med this.speletSlut = false; gör så man kan spela igen
		this.speletSlut = false;
		this.player1.score = 0;
		this.player2.score = 0;
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
			//Och inne i varje rad skapar vi 7 olika columner
			for (let col = 0; col < this.cols; col++) {
				const encol = $('<div>').addClass("col tom").addClass("ThisIsCol"+col+"Rad"+rad)			//Gives each placement/circle a unique class
				//attr står för addattribute()
				.attr("data-col", col).attr("data-rad", rad);
				
				enrad.append(encol);
			}
			board.append(enrad);
		}
	}

	setUpEvent() {
		const board = $(this.selector);
		//Gör så man får tillgång till this. Man behöver tillgång till this för att kuna bytta spelare
		const that = this;

		function hittaSistaTommaCellen(col) {
			//ta alla columenr som har samma attribute data, alltså är på Samma rad lodrätt
			const cells = $(`.col[data-col='${col}']`);
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

		//när man tar musen över en col så läser den här coden utav vart man är någon stans
		//och visar vart man kan lägga sin "bricka"
		board.on('mouseenter', '.col.tom', function() {
			//ifall spelet är slut ge inte något värde ifall man klickar
			if (that.speletSlut) return;
			//vi vill hitta den sista tomma cellen i den columen
			const col = $(this).data('col');
			//Vissar en markering över den sista tomma "brickan" alltså den längst ner i columen
			const sistaTommaCellen = hittaSistaTommaCellen(col);
			sistaTommaCellen.addClass(`hover-player${that.player.number}`);

			
		});

		//denna funktion gör så att man bara ser vilken colum man är på för tillfället och tar bort
		//dom man tidigare varit på
		board.on("mouseleave", ".col", function() {
			$(".col").removeClass(`hover-player${that.player.number}`);
		});

		//skapar en "bricka" som sätt längst ner på columen, ifall det redan e en bricka längst ner sätts den
		//brickan på den andra.
		board.on("click", ".col.tom" , function() {
			//Ifall sppelet är slut så ge inte något värde ifall man klickar
			if (that.speletSlut) return;

			const col = $(this).data("col");
			const rad = $(this).data("rad");
			let PlayerTurnValue;

		
		

			//I en column finns det 6 "celler" eller "brickor" Denna funktion letar efter den sista tomma
			//Det vill säga ifall ngn fyllt up en "bricka" Då kommer den markera ovanför den "brickan"
			const sistaTommaCellen = hittaSistaTommaCellen(col);
			sistaTommaCellen.removeClass(`tom hover-player${that.player.number}`);
			sistaTommaCellen.addClass('player'+that.player.number);
			sistaTommaCellen.data("spelare", that.player);
			//FOR AI//This adds the correct PlayerTurnvalue into the VirtualBoardArray.
			if(that.player.number == 1){
				PlayerTurnValue = 1;
			} else {
				PlayerTurnValue = -1;
			}

			that.player.score++;
			//Making a DRAW so if player2
				if(that.player1.score == 21 && that.player2.score == 21) {
				alert("It's a DRAW!!");
			}

			VirtualBoard[sistaTommaCellen.data("rad")][sistaTommaCellen.data("col")] = PlayerTurnValue;

			const vinnare = that.kollEfterVinnare(
				sistaTommaCellen.data("rad"),
				sistaTommaCellen.data("col")
				)
			
			if (vinnare){
				//gör så att spelet sluta när man vunnit
				that.speletSlut = true;
				
				let spelare = prompt(`${that.player} Vad heter du?`)
				alert('Spelet är över. ' + spelare + ' has Get gud!');
				//tar bort så att muspekaren inte syns ifall man har vunnit
				$(".col.tom").removeClass("tom");
				highScore.addScore(that.player);
			}

			//bytter spelare
			that.player = (that.player === that.player1) ? that.player2 : that.player1;
			//för att räkna score
			that.spelare1Score();
			that.spelare2Score();
			//Säger vems tur det är
			that.onSpelaresDrag();
			//Vi triggar igång mouseenter igen för att man ska se direkt när en spelare har tryckt
			//Att den andra får sin "hover" färg och ser att det är sin tur
			$(this).trigger("mouseenter");
		});
	}
		//kollar efter en vinnare
		kollEfterVinnare(rad, col){
			const that = this;

			//få cell
			function fåCell(i, j) {
				return $(`.col[data-rad='${i}'][data-col='${j}']`);
			}

			function kollaMot(mot) {
				let total = 0;
				let i = rad + mot.i;
				let j = col + mot.j;
				let next = fåCell(i, j);
				while (i >= 0 &&
					i< that.rader &&
					j >= 0 &&
					j < that.cols &&
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

			startaOm() {
				this.createGrid();
				this.onSpelaresDrag();
				this.spelare1Score();
				this.spelare2Score();
			}
		
	}


;

//FOR AI/ Click Counter
//funktioner funkar men..blir knas när man trycker på starta om varför?? //
$(document).ready(function() {
    $('.col').click(function(){
		console.log('click happened')

        let clickedCol = $(this);
        if ($(this).hasClass('player1')) {
           	console.log('player1')
        } else if ($(this).hasClass('player2')) {
           	console.log('player2')
        } else {

            let dataCol = clickedCol.data('col');																//funkar men förstår inte vaför clicked.Col.data automatiskt hämtar värdet i data-col=? och inte andra ata värden?
           // let dataColAlternative2 = clickedCol.attr('data-col');
            if (dataCol == 0 && NumberOfClicks[0] < 6) {
            	NumberOfClicks[0] = NumberOfClicks[0] + 1;
           	} else if (dataCol == 1 && NumberOfClicks[1] < 6) {
            	NumberOfClicks[1] = NumberOfClicks[1] + 1;
            } else if (dataCol == 2 && NumberOfClicks[2] < 6) {
            	NumberOfClicks[2] = NumberOfClicks[2] + 1;
            } else if  (dataCol == 3 && NumberOfClicks[3] < 6) {
            	NumberOfClicks[3] = NumberOfClicks[3] + 1;
            } else if (dataCol == 4 && NumberOfClicks[4] < 6) {
            	NumberOfClicks[4] = NumberOfClicks[4] + 1;
            } else if (dataCol == 5 && NumberOfClicks[5] < 6) {
            	NumberOfClicks[5] = NumberOfClicks[5] + 1;
            } else if (dataCol == 6 && NumberOfClicks[6] < 6) {
            	NumberOfClicks[6] = NumberOfClicks[6] + 1;
           	}

           	console.log(NumberOfClicks)
        }
   	});
});

