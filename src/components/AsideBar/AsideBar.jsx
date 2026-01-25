import React from 'react';

function AsideBar() {
    return (
        <aside className="aside-bar-container">
            <div className="aside-header">
                <h2>Expense Tracker</h2>
            </div>
            <div className="aside-items">
                <div className="aside-item active">Dashboard</div>
                <div className="aside-item">Income</div>
                <div className="aside-item">Expenses</div>
                <div className="aside-item">History</div>
            </div>
        </aside>
    );
}

export default AsideBar;
