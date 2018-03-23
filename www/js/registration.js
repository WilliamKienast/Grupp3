$(document).ready(function() {
	
	$("#playbutton").click(function(){
		let p1Name = $("#p1").val() 
		let p2Name = $("#p2").val()

		let p1Bot = $("#bot1").is(':checked')
		let p2Bot = $("#bot2").is(':checked')

		let p1 = {
			name: p1Name,
			isBot: p1Bot
		}

		let p2 = {
			name: p2Name,
			isBot: p2Bot
		}

	   JSON._save('registration', [p1, p2]);

	})
})




    