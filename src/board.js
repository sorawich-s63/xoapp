import React from 'react';
import './index.css';
import  Square from './square'


class Board extends React.Component {
    
    renderSquare(i) {
        return(
            <Square
            key={i}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
            />
        );
    }
    
    createTable = () => {
        let m = this.props.x
        let table = []
        let n = 0
        for (let i = 0; i < m; i++) {
            let row = []
            for (let j = 0; j < m; j++) {
                row.push(
                    this.renderSquare(n)
                )
                n++
            }
            
            table.push(<div className="board-row" key={i}>{row}</div>)
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