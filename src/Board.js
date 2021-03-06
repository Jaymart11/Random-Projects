import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25,
  };

  constructor(props) {
    super(props);

    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard = () => {
    let board = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  };

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround = (coord) => {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    flipCell(y, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y - 1, x);
    flipCell(y + 1, x);
    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = board.every((row) => row.every((cell) => !cell));
    this.setState({ board, hasWon });
  };

  buttonRandom = () => {
    const buttonStatus = [true, false];

    return buttonStatus[Math.floor(Math.random() * buttonStatus.length)];
  };

  /** Render game board or winning message. */

  render() {
    let tblBoard = [];
    if (this.state.hasWon) {
      return (
        <div
          className="Board"
          style={{ display: "flex", alignItems: "center" }}>
          <h1
            className="flux"
            style={{
              fontSize: "20rem",
            }}>
            You{" "}
            <span className="neon" style={{ fontSize: "20rem" }}>
              Win
            </span>
          </h1>
        </div>
      );
    } else {
      for (let y = 0; y < this.props.nrows; y++) {
        let row = [];
        for (let x = 0; x < this.props.ncols; x++) {
          let coord = `${y}-${x}`;
          row.push(
            <Cell
              key={coord}
              isLit={this.state.board[y][x]}
              coordi={coord}
              flipCellsAroundMe={this.flipCellsAround}
            />
          );
        }
        tblBoard.push(<tr>{row}</tr>);
      }
    }
    return (
      <div className="Board">
        <h1 className="neon">
          Lights <span className="flux">Out</span>
        </h1>

        <table>
          <tbody>{tblBoard}</tbody>
        </table>
      </div>
    );
  }
}

export default Board;
