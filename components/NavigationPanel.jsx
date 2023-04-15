import React, { useState } from "react";
import { Collapse, NavDropdown, Accordion } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../src/styles.css";

export default function NavigationPanel(props) {
    // State that handles collapse state of Navigation Panel
    const [openNavPanel, setOpenNavPanel] = useState(true);

    // State that handles collapse state of Dashboards
    const [openDashboard, setOpenDashboard] = useState(false);

    // State that handles active collapse element
    const [dashboardAccordion, setDashboardAccordion] = useState([
        { id: 1, isOpen: false },
        { id: 2, isOpen: false },
    ]);

    const handleAccordionClick = (id) => {
        // Set the collapse state of the clicked accordion to open and the rest to closed
        const updatedAccordion = dashboardAccordion.map((item) => ({
            ...item,
            isOpen: item.id === id ? !item.isOpen : false,
        }));
    };
    // setDashboardAccordion(updatedAccordion);

    return (
        <>
            <button onClick={() => setOpenNavPanel(!openNavPanel)}>
                {openNavPanel ? "Collapse" : "Expand"}
            </button>
            <Collapse in={openNavPanel} className="collapse-container">
                <div className="collapse-content">
                    <div className="primary-pages">
                        <Navbar>
                            <Container>
                                <Navbar.Brand href="#home">Koyfin</Navbar.Brand>
                                <img
                                    src="..\src\assets\koyfin_brand.png"
                                    className="koyfin-brand"
                                />
                            </Container>
                        </Navbar>
                        <Navbar>
                            <Container>
                                <Navbar.Brand>Today's Markets</Navbar.Brand>
                            </Container>
                        </Navbar>
                        <Navbar>
                            <Container>
                                <Navbar.Brand>Market News</Navbar.Brand>
                            </Container>
                        </Navbar>
                        <Navbar>
                            <Container>
                                <Navbar.Brand>Market Movers</Navbar.Brand>
                            </Container>
                        </Navbar>
                        <Navbar>
                            <Container>
                                <Navbar.Brand>My Watchlists</Navbar.Brand>
                            </Container>
                        </Navbar>
                        <Navbar>
                            <Container>
                                <Navbar.Brand>My Screens</Navbar.Brand>
                            </Container>
                        </Navbar>
                    </div>
                    <Accordion
                        defaultActiveKey="0"
                        flush
                        className="accordion-items"
                    >
                        <Accordion.Item eventKey="0" className="accordion-item">
                            <Accordion.Header className="accordion-header">
                                My Dashboards
                            </Accordion.Header>
                            <Accordion.Body className="accordion-body">
                                Sample Dashboard 1
                            </Accordion.Body>
                            <Accordion.Body>Sample Dashboard 2</Accordion.Body>
                            <Accordion.Body>Sample Dashboard 3</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                Market Dashboards
                            </Accordion.Header>
                            <Accordion.Body>
                                <a href="https://www.google.com">
                                    World Equity Indices
                                </a>
                            </Accordion.Body>
                            <Accordion.Body>US Sectors</Accordion.Body>
                            <Accordion.Body>Countries</Accordion.Body>
                            <Accordion.Body>Factor Analysis</Accordion.Body>
                            <Accordion.Body>Global Yields</Accordion.Body>
                            <Accordion.Body>Recent IPOs</Accordion.Body>
                            <Accordion.Body>Currencies</Accordion.Body>
                            <Accordion.Body>World Economics</Accordion.Body>
                            <Accordion.Body>Commodities</Accordion.Body>
                            <Accordion.Body>Corporate Credit</Accordion.Body>
                            <Accordion.Body>
                                Fixed Income Factors
                            </Accordion.Body>
                            <Accordion.Body>Yield Curves</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Analytics</Accordion.Header>
                            <Accordion.Body>Earnings Calendar</Accordion.Body>
                            <Accordion.Body>Lots of Charts</Accordion.Body>
                            <Accordion.Body>Market Scatter</Accordion.Body>
                            <Accordion.Body>Economic Calendar</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Advanced Search</Accordion.Header>
                            <Accordion.Body>Security Search</Accordion.Body>
                            <Accordion.Body>Transcripts Search</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Snapshots</Accordion.Header>
                            <Accordion.Body>Overview</Accordion.Body>
                            <Accordion.Body>Description</Accordion.Body>
                            <Accordion.Body>Holdings</Accordion.Body>
                            <Accordion.Body>Dividend</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Graphs</Accordion.Header>
                            <Accordion.Body>Historical Graph</Accordion.Body>
                            <Accordion.Body>Intraday</Accordion.Body>
                            <Accordion.Body>Performance</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Collapse>
        </>
    );
}
