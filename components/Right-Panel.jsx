import React, { useState } from "react";

export default function RightPanel() {
    return (
        <>
            <div className="currencies-panel">
                <h1>Currencies</h1>
                <div className="header">
                    USD FX Crosses
                    <span>%</span>
                    <div>Euro</div>
                    <div>Japanese Yen</div>
                    <div>British Pound</div>
                    <div>Bitcoin</div>
                </div>
            </div>

            <div className="global-markets-panel">
                <h1>Global Markets</h1>
                <div className="header">
                    Broad Markets
                    <span>%</span>
                </div>
                <div>Frontier</div>
                <div>Emerging</div>
                <div>Developed</div>

                <div className="developed-markets">
                    <div className="header">
                        Developed Markets
                        <span>%</span>
                    </div>
                    <div>Australia</div>
                    <div>France</div>
                    <div>Japan</div>
                    <div>United Kingdom</div>
                    <div>Germany</div>
                </div>

                <div className="emerging-markets">
                    <div className="header">
                        Emerging Markets
                        <span>%</span>
                    </div>
                    <div>Brazil</div>
                    <div>South Korea</div>
                    <div>South Africa</div>
                    <div>Mexico</div>
                    <div>India</div>
                    <div>China</div>
                </div>
            </div>

            <div className="commodities-panel">
                <h1>Commodities</h1>
                <div className="header">
                    Broad Markets
                    <span>%</span>
                </div>
                <div>Crude Oil</div>
                <div>Brent Crude</div>
                <div>Natural Gas</div>
                <div>Gold</div>
            </div>
        </>
    );
}
