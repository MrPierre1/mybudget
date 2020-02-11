import React, { } from 'react'
import '../styles/monthly.css'
import AddBudgetItem from './AddBudgetItem'
import BudgetItemList from './BudgetItemList'

function BudgetGroup(props) {
  // const [budgetGroupValue, setBudgetGroupValue] = useState([{ title: "Food", totolAmount: 300,  items: [{ name: 'item1', amount: 40 }, { name: 'item2', amount: 10 }] }]);
const cHeader = { color: '#111', fontFamily: 'Helvetica Neue',  fontSize:' 25px', fontWeight: 'bold', letterSpacing: '-1px', lineHeight: '1', textAlign: 'center' }
  
  
  const divStyle = {
    margin: '10px',
    border: '5px solid pink',
  }
  const liStyle = {
    fontSize: '15px',
    textAlign: 'center',
  }

  const containerStyle = {
    listStyleType: 'none',
    border: '2px solid black',
    width: '80%',
    marginBotton: '20px'
    // backgroundColor: '#333'
  }

  const handleFormSubmit = (name, amount, index) => {
    props.handleSubmit(name, amount, props.index)
  }

  const budgetGroupTotal = (index) => {
    // console.log(index, 'its index')
    var currentItems = props.budgetData.items
    return currentItems.reduce(
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0, // initial accumulator value
    )
  }

  const handleItemDelete = (index) => {
    // console.log(index, 'trying to delete', Array.isArray(budgetGroupValue[0].items),  budgetGroupValue[0].items)
  console.log(props.index, 'its index', index)
  props.handleDelete(props.index, index)

    // setBudgetGroupValue(
    // budgetGroupValue[0].items.filter(item => item.name != 'item2')
    // budgetGroupValue[0].items.splice(0, 1)
    // budgetGroupValue[0].items.filter((x,i) =>  x.name != "item2")
    // setBudgetGroupValue([...budgetGroupValue[0].items])
    // );
  }

  // const handleSubmit = (name, amount) => {
  //  props.handleSubmit(name, amount)

  // };


  return (
    <div className="budgetGroup">
      <div style={containerStyle}>
        <div className="budgetList">
          <div className="budget__ti">
            <span className="budget__ti"></span>
          </div>
          <div className="budget__v"></div>
          <ul>
            <li>
              <h1 style={cHeader}> {props.budgetData.title} ${budgetGroupTotal()} </h1>
              <ul style={divStyle}>
                {Object.keys(props.budgetData.items).map((name, index) => (
                  <li style={liStyle} key={name}>
                    <BudgetItemList
                      key={name}
                      amount={props.budgetData.items[name].amount}
                      name={props.budgetData.items[name].name}
                      index={index}
                      deleteItem={handleItemDelete}
                    />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <AddBudgetItem handleSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
  )
}

export default BudgetGroup
