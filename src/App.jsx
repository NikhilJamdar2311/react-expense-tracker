import Header from "./components/Header/Header";
import Banlance from "./components/Balance/Balance";
import Summary from "./components/Summary/Summary";


function App() {
  return (
    <div className="app">
      <Header />

      <main className="container">
        <Banlance />
        <Summary />
      </main>
    </div>
  );
}

export default App;
