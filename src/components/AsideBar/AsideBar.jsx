import React from 'react';

function AsideBar({ setActiveView, activeView }) {
    const handleItemClick = (item) => {
        setActiveView(item);
    };

    return (
        <aside className="aside-bar-container">
            <div className="aside-header">
                <h2>Expense Tracker</h2>
            </div>
            <div className="aside-items">
                <div className={`aside-item ${activeView === 'Dashboard' ? 'active' : ''}`} onClick={() => handleItemClick('Dashboard')}>Dashboard</div>
                <div className={`aside-item ${activeView === 'Income' ? 'active' : ''}`} onClick={() => handleItemClick('Income')}>Income</div>
                <div className={`aside-item ${activeView === 'Expenses' ? 'active' : ''}`} onClick={() => handleItemClick('Expenses')}>Expenses</div>
                <div className={`aside-item ${activeView === 'History' ? 'active' : ''}`} onClick={() => handleItemClick('History')}>History</div>
            </div>
        </aside>
    );
}

export default AsideBar;
