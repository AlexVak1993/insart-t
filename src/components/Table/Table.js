import React from "react";
import "./Table.css";
// import Converter from '../Converter/Converter'

export default function Table(props) {
  

  return (
    <div className="container hideTable">
      <table className="table table-bordered mb-5">
        <thead>
          <tr className="d-flex">
            <th className="col-4">Currency / Current Date</th>
            <th className="col-4">Buy</th>
            <th className="col-4">Sell</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr className="d-flex" key={item.buy}>
              <td className="col-4">
                {item.ccy}/{item.base_ccy}
              </td>
              <td className="col-4">{parseFloat(item.buy).toFixed(2)}</td>
              <td className="col-4">{parseFloat(item.sale).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Converter /> */}
    </div>
  );
}
