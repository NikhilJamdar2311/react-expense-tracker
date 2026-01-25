import React, { useState } from "react";
import Balance from "../Balance/Balance";
import Summary from "../Summary/Summary";

function Dashboard({ activeView }) {
    const [transactions] = useState([
        10000, -5000, 2000, -1000, -3000, 1500,
    ]);

    const income = transactions
        .filter((amount) => amount > 0)
        .reduce((acc, cur) => acc + cur, 0);

    const expense = transactions
        .filter((amount) => amount < 0)
        .reduce((acc, cur) => acc + Math.abs(cur), 0);

    const balance = income - expense;

    /* 🔀 VIEW SWITCHING */
    if (activeView === "Income") {
        return (
            <main className="dashboard">
                <h2>Income</h2>
                <p>This is the Income view (we’ll build this next).</p>
            </main>
        );
    }

    if (activeView === "Expenses") {
        return (
            <main className="dashboard">
                <h2>Expenses</h2>
                <p>This is the Expenses view.</p>
            </main>
        );
    }

    if (activeView === "History") {
        return (
            <main className="dashboard">
                <h2>History</h2>
                <p>This is the History view.</p>
            </main>
        );
    }

    /* 🏠 DEFAULT: DASHBOARD VIEW */
    return (
        <main className="dashboard">
            <div className="dashboard-grid">
                <div className="dashboard-card">
                    <Balance balance={balance} />
                </div>

                <div className="dashboard-card">
                    <Summary income={income} expense={expense} />
                </div>

                <div className="dashboard-card">
                    <h3>Future Component</h3>
                </div>
            </div>
        </main>
    );
}

export default Dashboard;
