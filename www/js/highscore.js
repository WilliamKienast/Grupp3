class HighScore {

    constructor(){
        this.limitRows = 10;
        // Read hiscores from json file into this.data 
        this.readJsonData();
    }
    
    async readJsonData(){
        this.data = await JSON._load('highscores');

        // for now call render here
        this.render();
    }

    addScore(player){
        // check if the new score is good enough and add it if so add it
        this.data.push({playername: player.name, score: player.score});
        // sort list
        this.data.sort(function(a,b){
            if(a.score > b.score){
                return 1;
            }
            if(a.score < b.score){
                return -1;
            }
            // if it's the same score then just return the newest one
            return 1;
        });
          
        console.log('new playerlist', this.data)
        // cut off bottom of list
        this.data = this.data.slice(0, this.limitRows);

        // save json to file
        JSON._save('highscores', this.data);
    }

    render(){
        // render html representing the this.data list
        // nicely on screen

        // Declare the variable x and let it have the value '' (empty string)
        let x = '';

        x +=    '<div class="card bg-dark text-white">' +
                '<div class="row text-white">' +
                '<div class="col-6"><h4>Names</h4></div>' +
                '<div class="col-6"><h4>Scores</h4></div>' +
             '</div>';

        // Loop through this.data (an array of objects)
        for(let player of this.data){
           // So now the variable player is an object with the properties name and score

           // Add new html to the string x
           x += '<div class="row text-white">' +
             '<div class="col-6">' + player.playername + '</div>' +
             '<div class="col-6">' + player.score +'</div>' +
             '</div>';
        }

        // Let jQuery grab the main element/tag and replace everything inside it 
        // with the content of x
        $('main').html(x);
    }

}

// Move this to another class later...
let highScore = new HighScore();

// $("#player-1").html("player1"+player1.score+"");