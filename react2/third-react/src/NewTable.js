// import React from "react";
// import "./Table.css";

// class Table extends React.Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.state = {tableOf:1};
//   // }
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
//   renderTable = () => {
//     let i = 1;
//     let tableCellArray = [];
//     while (i <= 10) {
//       tableCellArray.push(this.renderCell(this.state.tableOf,i));
//       i++;
//     }
//     return tableCellArray;
//   };

//   renderTableOf = () => {
//     let i = 1;
//     let array = [];
//     while (i <= 10) {
//       let index = i;
// // rendering x
//       let x = (
//         <button
//           className="cell-button"
//           style={{ backgroundColor: "lightblue",width:"50px", heigh:"50px" }}
//           onClick={() => {this.buttonClicked(index);}}
//         >
//           {index}
//         </button>
//       );
//       array.push(x);
//       i++;
//     }
//     return <div className="row">{array}</div>;
//   };
//   buttonClicked = (index) => {
//     this.setState({ tableOf: index });
//   };
//   render() {
//     return (
//       <div className="table">
//         {this.renderTableOf()}
//         {this.renderTable()}
//       </div>
//     );
//   }
// }

// export default Table;

import React from "react";
import "./NewTable.css";

class NewTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tableOf: 1 };
  }

  renderCell(tableOf, number) {
    return (
      <div className="row" key={number}>
        <button className="cell-button" style={{ backgroundColor: "lightblue" }}>
          {tableOf}
        </button>
        <span className="multi">{" X "}</span>
        <button className="cell-button" style={{ backgroundColor: "lightblue" }}>
          {number}
        </button>
        <span className="multi">{" = "}</span>
        <button className="cell-button" style={{ backgroundColor: "lightcoral" }}>
          {tableOf * number}
        </button>
      </div>
    );
  }

  renderTable() {
    const { tableOf } = this.state;
    let tableCellArray = [];
    for (let i = 1; i <= 10; i++) {
      tableCellArray.push(this.renderCell(tableOf, i));
    }
    return tableCellArray;
  }

  renderTableOf() {
    let array = [];
    for (let i = 1; i <= 10; i++) {
      // Define button for each number
      let ui = (
        <button
          key={i}
          className="cell-button"
          style={{ backgroundColor: "lightgray", fontWeight: "bold" }}
          onClick={() => this.buttonClicked(i)}
        >
          {i}
        </button>
      );
      array.push(ui);
    }
    return <div className="row">{array}</div>;
  }

  buttonClicked(index) {
    console.log("INDEX ==", index);
    this.setState({ tableOf: index });
  }

  render() {
    return (
      <div className="table">
        {this.renderTableOf()}
        {this.renderTable()}
      </div>
    );
  }
}

export default NewTable;
