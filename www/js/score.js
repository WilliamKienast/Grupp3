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