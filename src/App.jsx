import { useState } from "react";
import "./styles.css";
import NavigationPanel from "../components/NavigationPanel";
import SearchBar from "../components/SearchBar";
import LeftPanel from "../components/Left-Panel";
import MiddlePanel from "../components/Middle-Panel";
import RightPanel from "../components/Right-Panel";

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
        props.handleSearch(event.target.value);
    };

    return (
        <div className="border-items">
            <div>
                <NavigationPanel />
            </div>
            <div>
                <SearchBar handleSearchInput={handleSearchInput} />
                <div className="main-section">
                    <div>
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
