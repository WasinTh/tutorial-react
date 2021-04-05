import { useState, useEffect } from 'react';
import './App.css';
import TransactionList from "./components/TransactionList";
import TransactionCreate from "./components/TransactionCreate";


function App() {
  const [amount, setAmount] = useState(0);
  const [transactionData, setTransactionData] = useState([
    { id: 1, created: "01/02/2021 - 08:30", type: "รายรับ", amount: 20000, note: "allowance" },
    { id: 2, created: "01/02/2021 - 10:30", type: "รายจ่าย", amount: 150, note: "อาหารเที่ยง" }
  ]);

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

  const addTransaction = (data) => {
    setTransactionData([
      ...transactionData,
      { id: transactionData.length + 1, ...data }
    ])
  }

  const handleNoteChanged = (id, note) => {
    setTransactionData(
      transactionData.map(transaction => {
        transaction.note = transaction.id === id ? note : transaction.note;
        return transaction
      })
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Current Amount {amount} </p>
        <TransactionCreate onCreated={data => addTransaction(data)}/>
        <TransactionList data={transactionData} onNoteChanged={handleNoteChanged}/>
      </header>
    </div>
  );
}

export default App;
