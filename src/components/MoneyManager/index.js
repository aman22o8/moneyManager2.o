import {v4 as uniqueId} from 'uuid'
import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    initialBalance: '',
    myArray: [],
    initialOption: transactionTypeOptions[0].optionId,
    initialTitle: '',
  }

  selectValue = event => {
    this.setState({initialOption: event.target.value})
  }

  selectedTitle = event => {
    this.setState({initialTitle: event.target.value})
  }

  selectedBalance = event => {
    this.setState({initialBalance: event.target.value})
  }

  addingToArray = () => {
    const {
      initialBalance,
      initialOption,
      initialTitle,
      //  myArray
    } = this.state
    const displayTest = transactionTypeOptions.find(
      each => each.optionId === initialOption,
    )
    const newItem = {
      id: uniqueId(),
      title: initialTitle,
      amount: initialBalance,
      type: displayTest.displayText,
    }
    // const newArray = [...myArray, newItem]
    // {...myObject,newItem}
    this.setState(prevState => ({
      myArray: [...prevState.myArray, newItem],
      initialBalance: '',
      initialOption: transactionTypeOptions[0].optionId,
      initialTitle: '',
    }))
    // this.setState({
    //   myArray: newArray,
    //   initialBalance: '',
    //   initialOption: transactionTypeOptions[0].optionId,
    //   initialTitle: '',
    // })
  }

  handleDelete = unique => {
    const {myArray} = this.state
    const filteredItems = myArray.filter(each => each.id !== unique)
    this.setState({myArray: filteredItems})
  }

  getIncome = () => {
    const {myArray} = this.state
    let income = 0
    myArray.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += parseInt(each.amount)
      }
    })
    return income
  }

  getExpense = () => {
    const {myArray} = this.state
    let expense = 0
    myArray.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expense += parseInt(each.amount)
      }
    })
    return expense
  }

  getBalance = () => {
    const {myArray} = this.state
    let income = 0
    let balance = 0
    let expense = 0
    myArray.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += parseInt(each.amount)
      } else {
        expense += parseInt(each.amount)
      }
    })
    balance = income - expense
    return balance
  }

  render() {
    const {initialBalance, initialOption, initialTitle, myArray} = this.state
    // console.log(myArray)
    // console.log(myObject)
    const myIncomed = this.getIncome()
    const myBalanced = this.getBalance()
    const myExpensed = this.getExpense()

    // console.log(myIncomed)
    return (
      <div>
        <div className="header">
          <h1 className="main_heading">Hi,Richard</h1>
          <p className="main_para">
            Welcome back to your{' '}
            <span className="span_heading">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          myIncomed={myIncomed}
          myBalanced={myBalanced}
          myExpensed={myExpensed}
        />
        <div className="footer_container">
          <div className="transaction_container one">
            <h1 className="transaction_heading">Add Transaction</h1>
            <label className="same_labels" htmlFor="title">
              Title
            </label>
            <input
              onChange={this.selectedTitle}
              value={initialTitle}
              className="same_inputs"
              id="title"
              type="text"
              placeholder="TITLE"
            />
            <label className="same_labels" htmlFor="amount">
              Amount
            </label>
            <input
              value={initialBalance}
              onChange={this.selectedBalance}
              className="same_inputs"
              id="amount"
              type="text"
              placeholder="AMOUNT"
            />
            <label htmlFor="type" className="same_labels">
              TYPE
            </label>
            <select
              id="TYPE"
              value={initialOption}
              onChange={this.selectValue}
              className="same_inputs"
            >
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button
              onClick={this.addingToArray}
              type="button"
              className="add_btn"
            >
              Add
            </button>
          </div>
          <div className="transaction_container two">
            <h1 className="transaction_heading">History</h1>
            <div className="result_container">
              <p className="result_heading">Title</p>
              <p className="result_heading">Amount</p>
              <p className="result_heading">Type</p>
            </div>
            <ul className="list_transaction">
              {myArray.map(each => (
                <TransactionItem
                  deleteItem={this.handleDelete}
                  key={each.id}
                  eachItem={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
