import React from "react";

export default function ConverterRow(props) {
  return (
    <div className="col-5">
      <div className="row">
        <input className="form-control col-8 border-top-0 border-right-0 border-left-0 rounded-0" type="number" />
        <select className="form-control col-4 border-0">
          {props.data.map((item) => (
            <option>{item.ccy}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
