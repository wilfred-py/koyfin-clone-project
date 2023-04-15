import { useState } from "react";
import "./styles.css";
import NavigationPanel from "../components/NavigationPanel";
import SearchBar from "../components/SearchBar";
import LeftPanel from "../components/Left-Panel";
import MiddlePanel from "../components/Middle-Panel";
import RightPanel from "../components/Right-Panel";
import Indices from "../components/Indices";
import Data from "./Data";

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
        props.handleSearch(event.target.value);
    };

    // Function to change isActive to true; activeArr only contains elements with isActive: true
    function makeActive() {
        console.log("Active Element");
    }

    // Create indices element to create Indices from Data.jsx contents
    const indices = Data.map((item) => {
        return (
            <Indices
                key={item.id}
                indexName={item.indexName}
                return={item.return}
                isActive={item.isActive}
                makeActive={() => makeActive(item.id)}
            />
        );
    });

    // Create array that contains all active graph elements
    const activeArr = [];

    return (
        <div className="border-items">
            <div>
                <NavigationPanel />
            </div>
            <div>
                <SearchBar handleSearchInput={handleSearchInput} />
                <div className="main-section">
                    <div>
                        {indices}
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                        <LeftPanel />
                    </div>
                    <div>
                        <MiddlePanel />
                    </div>
                    <div>
                        <RightPanel />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
