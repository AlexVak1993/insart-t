import React, { useEffect } from "react";
// import ConverterRow from "./ConverterRow";

// const url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

export default function Converter(props) {
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  return (
    <div className="container">
      <div className="row">
        
        <div className="col-5">
          <div className="d-flex">
            <input className="form-control col-8 border-top-0 border-right-0 border-left-0 rounded-0" type="number" />
            <select className="form-control col-4 border-0">
              {props.data.map((item) => (
                <option key={item.buy}>{item.ccy}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-2 text-center">
          <svg width="1.6em" height="1.6em" viewBox="0 0 16 12" className="bi bi-arrow-left-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.146 7.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 11l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
            <path fillRule="evenodd" d="M2 11a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 11zm3.854-9.354a.5.5 0 0 1 0 .708L3.207 5l2.647 2.646a.5.5 0 1 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
            <path fillRule="evenodd" d="M2.5 5a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </div>

        <div className="col-5">
          <div className="d-flex">
            <input className="form-control col-8 border-top-0 border-right-0 border-left-0 rounded-0" type="number" />
            <select className="form-control col-4 border-0">
              {props.data.map((item) => (
                <option key={item.buy} value={item.ccy}>{item.ccy}</option>
              ))}
            </select>
          </div>
        </div>

      </div>
    </div>
  );
}
