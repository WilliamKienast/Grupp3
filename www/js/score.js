class HighScore {

    constructor(){
        // Read hiscores from json file into this.data 
        this.readJsonData();
    }

    async readJsonData(){
        this.data = await JSON._load('hi-scores');
        // for now call render here
        this.render();
    }

constructor(){
        this.limitRows = 10;
       // retrieve highscore list from file/memory
       // but the list would have this form
        this.data = [
            {playerName: "1", moves: 4, date: "2018-02-02"},
            {playerName: "2", moves: 8, date: "2018-03-02"}
        ];
    }

    addWinner(player){
        // add player object to this.data
        // sort this.data
        // slice this data to a certain length (10?)

        // save json to file
        JSON._save('hi-scores', this.data);
    }

    render(){
        // render html representing the this.data list
        // nicely on screen

        // Declare the variable x and let it have the value '' (empty string)
        let x = '';
        // Loop through this.data (an array of objects)
        for(let player of this.data){
           // So now the variable player is an object with the properties name and score

           // Add new html to the string x
           x += '<div class="row">' +
             '<div class="col-6">' + player.name + '</div>' +
             '<div class="col-6">' + player.score +'</div>' +
             '</div>';
        }
        // Let jQuery grab the main element/tag and replace everything inside it 
        // with the content of x
        $('main').html(x);
    }

}


// Move this to another class later...
let highScoreList = new HighScore();


////////////////////////////////////////////////////////////////

constructor(){
        this.limitRows = 10;
       // retrieve highscore list from file/memory
       // but the list would have this form
        this.data = [
            {playerName: "1", moves: 4, date: "2018-02-02"},
            {playerName: "2", moves: 8, date: "2018-03-02"}
        ];
    }

    addScore(playerName, moves){
        // check if the new score is good enough and add it if so add it
        let currentDate = new Date() + '';
        this.data.push({playerName: playerName, moves: moves, date: currentDate});
        // sort list
        this.data.sort(function(a,b){
            if(a.moves > b.moves){
                return 1;
            }
            i(a.moves < b.moves){
                return -1;
            }
            // same number of moves? so who should have the highest position
            // older or newer score? (for now let the newest one have a higher position)
            return a.date > b.date ? -1: 1;
        });
        // cut off bottom of list
        this.data = this.data.slice(0, this.limitRows);
        // fine - almost done, but now we need to save the list to file/memory...
    }

    render(){
        // write a loop that goes through this.data and creates html
        // that we can display...
        


