angular.module('tttApp', []);
angular.module('tttApp')
    .controller('tttCtrl', function() {
        console.log('tttCtrl is alive!');
        var game = this;
        var emptyCell = '?';
        game.board = [
            [ { value: emptyCell }, { value: emptyCell }, { value: emptyCell } ],
            [ { value: emptyCell }, { value: emptyCell }, { value: emptyCell } ],
            [ { value: emptyCell }, { value: emptyCell }, { value: emptyCell } ]
        ];

        game.clearBoard = function() {
            game.board.forEach(function(row) {
                row.forEach(function(cell) {
                    cell.value = emptyCell;
                });
            });
        };
        game.reset = function() {
            game.presentPlayer = 'X';
            game.winner = false;
            game.draw = false;
            game.clearBoard();
        };

        game.isTaken = function(cell) {
            return cell.value !== emptyCell;
        };

        function checkForMatch(cell1, cell2, cell3) {
            return cell1.value === cell2.value &&
                cell1.value === cell3.value &&
                cell1.value !== emptyCell;
        }

        game.isBoardFull = function() {
            for(var row=0; row<=2; row++) {
                for(var col=0; col<=2; col++) {
                    if (game.board[row][col].value === emptyCell) {
                        return false;
                    }
                }
            }
            return true;
        };

        game.checkForEndOfGame = function() {
            var rowMatch = checkForMatch(game.board[0][0], game.board[0][1], game.board[0][2]) ||
                checkForMatch(game.board[1][0], game.board[1][1], game.board[1][2]) ||
                checkForMatch(game.board[2][0], game.board[2][1], game.board[2][2]);
            var colMatch = checkForMatch(game.board[0][0], game.board[1][0], game.board[2][0]) ||
                checkForMatch(game.board[0][1], game.board[1][1], game.board[2][1]) ||
                checkForMatch(game.board[0][2], game.board[1][2], game.board[2][2]);
            var diagMatch = checkForMatch(game.board[0][0], game.board[1][1], game.board[2][2]) ||
                checkForMatch(game.board[0][2], game.board[1][1], game.board[2][0]);
            game.winner = rowMatch || colMatch || diagMatch;
            game.draw = !game.winner && game.isBoardFull();
            return game.winner || game.draw;
        }
        game.move = function(cell) {
            cell.value = game.presentPlayer;
            if (game.checkForEndOfGame() === false) {
                game.presentPlayer = game.presentPlayer === 'X' ? 'O' : 'X';
            }
        };

        game.reset();

    });