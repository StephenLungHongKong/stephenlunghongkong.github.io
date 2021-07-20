
new Vue({
    el: '#app',
    data: {
        imgURL: 'images/blank.jpg',
        scene: true,
        tiles: [0,0,0,0,0,0,0,0,0],
        magicsq: [2,9,4,7,5,3,6,1,8],
        result: [0,0,0,0,0,0,0,0,0],
        checkmatrix: [
                        [0,1,2],
                        [0,3,6],
                        [0,4,8],
                        [1,4,7],
                        [2,4,6],
                        [2,5,8],
                        [3,4,5],
                        [6,7,8]
                    ],
        count: 0,
        player: 0,
        sum:0,
        message: 'Game in progress'
    },

    methods: {
        grid: function(index){
            if (this.tiles[index] == 0){
                return 'images/blank.jpg';
            }else if (this.tiles[index] == 1){
                return 'images/cross.jpg';
            }else{
                return'images/nought.jpg';
            }
        },

        gclick: function(index) {
            if(this.tiles[index] == 0) {
                this.count++;
                this.player = (this.player + 1) % 2;
                if (this.player == 0) {
                    this.$set(this.tiles, index, 1);
                }else{
                    this.$set(this.tiles, index, -1);
                }
            }
            this.checkwin();
        },

        checkwin: function(){
            for(var i = 0; i < this.result.length; i++){
                this.result[i] = this.tiles[i] * this.magicsq[i];
            } 
            
            for (var i = 0; i < this.checkmatrix.length; i++ ){
                this.sum = this.result[this.checkmatrix[i][0]] 
                + this.result[this.checkmatrix[i][1]] 
                + this.result[this.checkmatrix[i][2]];
                console.log(this.sum);
                if (this.sum === 15) {                        
                    console.log("X wins");
                    this.message = 'x wins';
                }
                if (this.sum === -15) {                        
                    console.log("O wins");
                    this.message = 'o wins';
                }
            } 
            if (this.count === 9 && this.message === 'Game in progress'){
                console.log("Draw");
                this.message = 'Game Draw';
            }
            console.log("Player :" + this.player)
        }
    }
})