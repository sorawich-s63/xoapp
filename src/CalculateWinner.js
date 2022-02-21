function CalculateWinner(n,squares) {
  const lines = [];
  let r = 0
  let c = 0

  for (let i= 0 ; i < n ; i++) {
    const row = [];
    const column = [];
    c = i
    for (let j=0 ; j < n ; j++) {
      row.push(r)
      r++
      column.push(c)
      c = c+n
    }
    lines.push(column)
    lines.push(row)
  }

  for (let i= 0 ; i < 1 ; i++) {
    const xa = [];
    const ax = [];
    for(let j=0 ; j < n ; j++) {
      xa.push(j*(1+n))
    }
    for(let j=1 ; j < n+1 ; j++) {
      ax.push((n*j)-j)
    }
    lines.push(xa)
    lines.push(ax)
  }
  
  for (let i = 0; i < lines.length; i++) {
    const list = lines[i];
    var x = 'X';
    var o = 'O';
    const li = []
    const li2 = []
    for (let j=0; j < list.length; j++) {
      if (squares[list[j]] === x ) {
      li.push(squares[list[j]])
      }
      if(li.length === n) {
        return x
      }  
    }
 
    for (let j=0; j < list.length; j++) {
      if (squares[list[j]] === o ) {
        li2.push(squares[list[j]])
      }
      if(li2.length === n) {
        return o
      }
    }
  }
  
  return null;
}

export default CalculateWinner;