import React, { useState } from "react";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import AsideBar from "./components/AsideBar/AsideBar";

function App() {
    const [activeView, setActiveView] = useState('Dashboard');
    return (
        <div className="app">
            <Header />
            <div className="app-content">
                <AsideBar setActiveView={setActiveView} activeView={activeView} />
                <Dashboard activeView={activeView} />
            </div>
        </div>
    );
}

export default App;
