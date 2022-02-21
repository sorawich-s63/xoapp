import React from 'react';
import './index.css';
import  Square from './square'


class Board extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.onChangenum = this.onChangenum.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);
    //     this.state = {
    //         numforxo : '',
    //         number : 3,
    //     };
    // }

    // onChangenum(e) {
    //     this.setState({
    //         numforxo: e.target.value
    //     });
    // }
    // onSubmit() {
    //     this.setState({
    //         number: parseInt(this.state.numforxo),
    //         numforxo : ''
    //     });
    //     console.log(typeof(this.state.number))
    // }
    
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