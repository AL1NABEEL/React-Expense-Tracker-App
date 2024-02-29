import {useAddTransaction} from '../../hooks/useAddTransaction'

export const ExpenseTracker= ()=> {
    const {addTransaction}= useAddTransaction()

    const onSubmit = async(e)=>{
        e.preventDefault()
        addTransaction({
            description:"haircut",
            transactionAmount:22,
            transactionType:"expense"
        })
    }

    return <> 
    <div className="expense-tracker">
        <div className="container">
            <h1>expense tracker</h1>
            <div className="balance">
                <h3>your balance</h3>
                <h2>$0.00</h2>

            </div>
            <div className="summary">
                <div className="income">
                    <h4>income</h4>
                    <p>$0.00</p>
                </div>
                <div className="expenses">
                <h4>expenses</h4>
                    <p>$0.00</p>
                </div>

            </div>
            <form action="add-transaction" onSubmit={onSubmit}>
                <input type="text" placeholder="Description" required />
                <input type="number" placeholder="amount" required />
                <input type="radio" id="expense" value='expense' />
                <label htmlFor="expense">expense</label>
                <input type="radio" id="income" value='income' />
                <label htmlFor="income">income</label>

                <button type="submit">add transaction</button>
            </form>
        </div>
    </div>
    
    <div className="transactions">
<h3>transactions</h3>
    </div>
    </>
};