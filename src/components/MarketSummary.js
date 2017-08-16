import React, { Component } from 'react'

import Panel from './Panel';

import market_summary from './market_summary.jpeg';


class MarketSummary extends Component {
    render () {
        return (
            <Panel>
                <h3>Market Summary</h3>
                <img src={market_summary} />
            </Panel>
        )
    }
}

export default MarketSummary