function Summary({income, expense}){
    return(
        <section className="summary">
            <div className="summary-box income">
                <h4>Income</h4>
                <p>₹{income}</p>
            </div>
            <div className="summary-box expense">
                <h4>Expense</h4>
                <p>₹{expense}</p>
            </div>
        </section>
    )
}
export default Summary;