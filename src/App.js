import React, { Component } from "react";
import Loader from "./components/Loader/Loader";
import Table from "./components/Table/Table";
import Converter from "./components/Converter/Converter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      data: [],
      onLoadCounter: 0,
      // isError: false,
    };
  }

  async componentDidMount() {
    const url = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({
      isLoading: false,
      data,
    });

     
    let onLoadCounter = localStorage.getItem("Counter");
    // const main = document.querySelector('.mainComp')
    // const child = document.querySelector('.hideTable')
      if (onLoadCounter < 5) {
      onLoadCounter++;
      // main.removeChild(child)
    } else if (onLoadCounter === 5) {
      // this.setState({
      //   isLoading: true
      // });
    } else {
      // this.setState({
      //   isLoading: true
      // });
      onLoadCounter = 0;
    }
    localStorage.setItem("Counter", onLoadCounter);
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <div className="mainComp">
            <Header />
            <Table data={this.state.data} />
            <Converter data={this.state.data} />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default App;
