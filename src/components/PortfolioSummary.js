import React, { Component } from 'react'

import Panel from './Panel';

import global_equity from './global_equity.jpeg';
import stock_snap from './stock_snap.jpeg';
import './PortfolioSummary.css';

class PortfolioSummary extends Component {
    render () {
        return (
            <Panel>
                <h3>Portfolio Summary</h3>
                <div className="portfolio-summary">
                    <div className="graph">
                        <img src={global_equity} />
                    </div>
                    <div className="graph">
                        <img src={stock_snap} />
                    </div>
                </div>
            </Panel>
        )
    }
}

export default PortfolioSummary