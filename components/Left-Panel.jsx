import React, { useState } from "react";

export default function LeftPanel() {
    const [activeIndex, setActiveIndex] = useState();

    return (
        <>
            <div className="equities">
                <h1>U.S. Equity Markets</h1>

                <div className="header">
                    Major Indices & ETFs
                    <span>%</span>
                </div>
                <div>Russell 2000</div>
                <div>Dow Jones</div>
                <div>S&P 500</div>
                <div>Nasdaq 100</div>
                <div className="header">
                    Volatility Index
                    <span>%</span>
                </div>
                <div className="vix">CBOE VIX</div>
            </div>
            <div className="sectors">
                <h1>U.S. Equity Sectors</h1>
                <div className="header">
                    S&P Sector ETFs
                    <span>%</span>
                </div>
                <div>Energy</div>
                <div>Financials</div>
                <div>Materials</div>
                <div>Industrials</div>
                <div>Real Estate</div>
                <div>Health Care</div>
                <div>Cons. Staples</div>
                <div>Cons. Discretionary</div>
                <div>Utilities</div>
                <div>Communications</div>
                <div>Technology</div>
            </div>
            <div className="fixed-income">
                <h1>Fixed Income</h1>
                <div className="header">
                    Govt Credit ETFs
                    <span>%</span>
                </div>
                <div>Municiapls</div>
                <div>T.I.P.S</div>
                <div>U.S. Treasuries</div>
                <div className="header">
                    Corp Credit ETFs
                    <span>%</span>
                </div>
                <div>Convertibles</div>
                <div>High Yeild</div>
                <div>High Grade</div>
            </div>
        </>
    );
}
