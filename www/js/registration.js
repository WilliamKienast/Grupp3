$(document).ready(function() {
	$("#playbutton").click(function(){
		let p1Name = ("p1").val() 
		let p2Name = ("p2").val()

let p1Bot = ("#human1").is(':checked')
let p2Bot = ("#human2").is(':checked')

		let p1 = {
			name: p1name,
			isBot: p1bot
		}

		let p2 = {
			name: p2name,
			isBot: p2bot
		}


	   JSON._save('registration', [p1,p2]);

	})
})




    