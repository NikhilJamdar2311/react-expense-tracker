import { React, useState } from "react";
import Balance from "../Balance/Balance";
import Summary from "../Summary/Summary";

function Dashboard() {
    const [transactions, setTransactions] = useState([
        10000, -5000, 2000, -1000, -3000, 1500,
    ]);
    const income = transactions
        .map((amount) => (amount > 0 ? amount : 0))
        .reduce((acc, cur) => acc + cur, 0);
    const expense = transactions
        .map((amount) => (amount < 0 ? Math.abs(amount) : 0))
        .reduce((acc, cur) => acc + cur, 0);
    const balance = income - expense;
    return (
        <main className="container">
            <Balance balance={balance} />
            <Summary income={income} expense={expense} />
        </main>
    );
}

export default Dashboard;
