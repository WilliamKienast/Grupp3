class Connect4 {
	constructor(playboard){
		this.rows = 6;
		this.cols = 7;
		this.playboard = playboard;
		this.createGrid1();	
	}


	createGrid1(){

		const board = $(this.playboard);
		console.log(this.cols);

		for(let row = 0; row < this.rows; row++) {
			const aRow = $("<div>").addClass("row")

			for(let col = 0; col < this.cols; col++) {
				const aCol = $("<div>").addClass("col empty")
			

			.attr("data-col", col).attr("data-row", row);

			aRow.append(aCol);
		}
		board.append(aRow);
	}
}
		
	}
	
