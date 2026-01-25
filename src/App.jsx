import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import AsideBar from "./components/AsideBar/AsideBar";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app-content">
                <AsideBar />
                <Dashboard />
            </div>
        </div>
    );
}

export default App;
