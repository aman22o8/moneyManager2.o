// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachItem, deleteItem} = props
  const {title, amount, type, id} = eachItem
  const myDeleteItem = () => {
    deleteItem(id)
  }
  return (
    <li className="result_container_list">
      <p className="result_heading_list">{title}</p>
      <p className="result_heading_list">{`Rs ${amount}`}</p>
      <p className="result_heading_list">{type}</p>
      <button
        data-testid="delete"
        onClick={myDeleteItem}
        type="button"
        className="delete_btn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete_icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
