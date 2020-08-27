import React, { Component } from "react";
import Loader from "./components/Loader/Loader";
import Table from "./components/Table/Table";
import Converter from "./components/Converter/Converter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: [],
      onLoadCounter: 0
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
    if (onLoadCounter < 5) {
      onLoadCounter++;
    } else {
      onLoadCounter = 0
    }
    localStorage.setItem("Counter", onLoadCounter);
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <div>
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
