import { useState, useEffect } from 'react';
import './App.css';
import TransactionList from "./components/TransactionList";
import Clock from "./components/Clock";


function App() {
  const [amount, setAmount] = useState(0);
  const [transactionData, setTransactionData] = useState([
    { id: 1, created: "01/02/2021 - 08:30", type: "รายรับ", amount: 20000, note: "allowance" },
    { id: 2, created: "01/02/2021 - 10:30", type: "รายจ่าย", amount: 150, note: "อาหารเที่ยง" }
  ]);

  const generateTransaction = () => {
    return {
      id: transactionData.length,
      created: new Date().toLocaleString(),
      type: ['รายรับ', 'รายจ่าย'][Math.floor(Math.random() * 2)],
      amount: Math.floor(Math.floor(Math.random() * 1000) + 1),
      note: '',
    }
  }

  useEffect(() => {
    setAmount(
      transactionData.reduce((sum, transaction) => {
        if (transaction.type === "รายรับ")
          return sum + transaction.amount;
        else
          return sum - transaction.amount;
      }, 0)
    )
  }, [transactionData])

  const addTransaction = () => {
    setTransactionData([
      ...transactionData,
      generateTransaction()
    ])
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Current Amount {amount} </p>
        <button onClick={addTransaction}>Add Transaction</button>
        <TransactionList data={transactionData} />
      </header>
    </div>
  );
}

export default App;
