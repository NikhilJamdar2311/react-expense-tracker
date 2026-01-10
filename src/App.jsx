import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="welcome">
        <h1>Welcome to Expense Tracker</h1>
        <p>
          Track your income and expenses easily and stay in control of your
          finances.
        </p>
      </main>
    </div>
  );
}

export default App;
