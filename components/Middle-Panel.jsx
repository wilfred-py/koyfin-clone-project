import React, { useState } from "react";

export default function MiddlePanel() {
    return (
        <>
            <div className="market-news">
                <h1>Market News</h1>
                <div className="news-panel">
                    <ul>
                        <li>News 1</li>
                        <li>News 2</li>
                        <li>News 3</li>
                    </ul>
                </div>
            </div>
            <div className="performance-graph">
                <h1>Normalized Performance</h1>
            </div>
            <div className="middle-bottom-panel">
                <div className="heatmap">
                    <h1>U.S. Equity Factors</h1>
                    <h3>***Insert Heatmap Here***</h3>
                </div>
                <div className="yields">
                    <h1>Global Yields</h1>
                    <h3>***Insert Yield Table Here***</h3>
                </div>
            </div>
        </>
    );
}
