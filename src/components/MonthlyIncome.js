import React, { useState } from "react";
import "../styles/monthly.css";
import PayCheckForm from "./PayCheckForm";
import IncomeStream from "./IncomeStream";

function MonthlyIncome() {
  const [incomes, setincomes] = useState([ 
  ]);
 
  const handleFormSubmit = (paycheck, amount) => {
    // console.log("A paychecktype and amount was added: ", paycheck, amount);
    setincomes([...incomes, { paycheck, amount: Number(amount) }]);
  };

  const finalTotal = () => { 
    const totalIncome = 0;
  return incomes.reduce((totalIncome, currentIncome) =>     
    totalIncome + currentIncome.amount, // reducer function
    0 // initial accumulator value
  );

  } 

  const handleIncomeDelete = (index) => {
    console.log("index was added: ",index);
    const tempIncome = [...incomes];
    tempIncome.splice(index, 1);
    setincomes(tempIncome);
  };

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{" "}
          <span className="budget__title--month">January</span>:
        </div>
        <div className="budget__value">+{finalTotal()}</div>
        <ul>
          {incomes.map((income, index) => (
            <IncomeStream
              key={income.paycheck}
              amount={income.amount}
              paycheck={income.paycheck}
              index={index}
              deleteIncome={handleIncomeDelete}
            />
          ))}
        </ul>
        <PayCheckForm
          paycheck={incomes.paycheck}
          amount={incomes.amount}
          handleSubmit={handleFormSubmit}
        />
      </div>
    </div>
  );
}


export default MonthlyIncome;
