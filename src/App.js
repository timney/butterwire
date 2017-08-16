import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './components/Header';
import Menu from './components/Menu';
import MarketSummary from './components/MarketSummary';
import PortfolioSummary from './components/PortfolioSummary';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="menu">
			<Menu />
		</div>
        <div className="body">
			<Header />
			<PortfolioSummary />
			<MarketSummary />			
		</div>		
      </div>
    );
  }
}

export default App;
