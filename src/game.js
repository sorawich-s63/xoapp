import React from 'react';
import './index.css';
import Board from './board'
import CalculateWinner from './CalculateWinner';

class Game extends React.Component {
    
    constructor(props) {
        super(props);
        this.onChangenum = this.onChangenum.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            numforxo : '',
            number : 3,
            rerere : true,
            history: [{ squares: Array(9).fill(null) }],
            stepNumber: 0,
            xIsNext: true
        };
    }
    componentDidMount() {
        this.reboy()
    }
    onChangenum(e) {
        this.setState({
            numforxo: e.target.value
        });
    }

    reboy(){
        this.setState ({
            rerere: this.state.rerere ? false : true
        })
    }
    onSubmit() {
        this.setState({
            number: parseInt(this.state.numforxo),
            history: [{ squares: Array(this.state.number**2).fill(null) }],
            numforxo : ''
        });

        console.log(this.state.history)
        
    }
    
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (CalculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
            squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
          xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = CalculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
              'Go to move #' + move :
              'Go to game start';
            return (
              <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
              </li>
            );
          });
        
        let status;
        if(winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        
        return (
            
            <div className="game">
                <div className="game-board">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            name="numforxo"
                            type="text"
                            value={this.state.numforxo}
                            onChange={this.onChangenum}
                            
                        />
                        <button onClick={this.onSubmit}>submit</button>
                    </div>
                <Board 
                    x = {this.state.number}
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}    
                />
                </div>
                <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;