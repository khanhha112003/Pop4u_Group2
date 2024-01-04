import React from "react";
import "./OrderList.css";

class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    this.rows = [
      this.createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
      this.createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
      this.createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
      this.createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
    ];
  }

  createData(name, orderId, date, status) {
    return { name, orderId, date, status };
  }

  makeStyle(status) {
    if (status === "Approved") {
      return {
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
      };
    } else if (status === "Pending") {
      return {
        background: '#ffadad8f',
        color: 'red',
      };
    } else {
      return {
        background: '#59bfff',
        color: 'white',
      };
    }
  }

  render() {
    return (
      <div className="Table">
        <h3>Recent Orders</h3>
        <table className="basic-table" style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Tracking ID</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody style={{ color: "white" }}>
            {this.rows.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.orderId}</td>
                <td>{row.date}</td>
                <td>
                  <span className="status" style={this.makeStyle(row.status)}>
                    {row.status}
                  </span>
                </td>
                <td className="Details">Details</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export  {BasicTable};