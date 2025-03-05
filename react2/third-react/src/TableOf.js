import React from "react";
import "./Table.css";

class TableOf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {tableOf:1};
  }
//   renderCell = (tableOf, number) => {
//     return (
//       <div className="row">
//         <button className="cell-button">{tableOf}</button>
//         <text className="multi"> {" X "}</text>
//         <button className="cell-button">{number}</button>
//         <text className="multi"> {" = "}</text>
//         <button className="cell-button">{tableOf * number}</button>
//       </div>
//     );
//   };
  // renderTable = () => {
  //   let i = 1;
  //   let tableCellArray = [];
  //   while (i <= 10) {
  //     tableCellArray.push(this.renderCell(this.state.tableOf,i));
  //     i++;
  //   }
  //   return tableCellArray;
  // };

  renderTableOf = () => {
    let i = 11;
    let array = [];
    while (i <= 20) {
      let index = i;
// rendering x
      let x = (
        <button
          className="cell-button"
          style={{ backgroundColor: "lightblue",width:"50px", heigh:"50px" }}
          onClick={() => {this.buttonClicked(index);}}
        >
          {index}
        </button>
      );
      array.push(x);
      i++;
    }
    return <div className="row">{array}</div>;
  };
  buttonClicked = (index) => {
    this.setState({ tableOf: index });
  };
  render() {
    return (
      <div className="table">
        {this.renderTableOf()}
        {/* {this.renderTable()} */}
      </div>
    );
  }
}

export default TableOf;

