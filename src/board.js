import React from 'react';
import './index.css';
import  Square from './square'


class Board extends React.Component {
    renderSquare(i) {
        return(
            <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
            />
        );
    }
    
    createTable = () => {
        let table = []
        let n = 0
        for (let i = 0; i < 4; i++) {
            let row = []
            for (let j = 0; j < 4; j++) {
                row.push(
                    this.renderSquare(n)
                )
                n++
            }
            n++
            table.push(<div className="board-row">{row}</div>)
        }
        return table
    }

    render() {
        return (
            <div>
                {this.createTable()}
            </div>
        );
    }
}

export default Board;