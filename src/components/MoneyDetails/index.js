// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {myIncomed, myBalanced, myExpensed} = props
  return (
    <div className="maoney_details_contianer">
      <div className=" same balance">
        <img
          className="same_logo"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="money_shown">
          <p className="your">Your Balance</p>
          <p data-testid="balanceAmount" className="left">
            Rs {myBalanced}
          </p>
        </div>
      </div>
      <div className="same income">
        <img
          className="same_logo"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="money_shown">
          <p className="your">Your Income</p>
          <p data-testid="incomeAmount" className="left">
            Rs {myIncomed}
          </p>
        </div>
      </div>
      <div className="same expenses">
        <img
          className="same_logo"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="money_shown">
          <p className="your">Your Expenses</p>
          <p data-testid="expensesAmount" className="left">
            Rs {myExpensed}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
