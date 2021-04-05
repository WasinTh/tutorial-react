import { useState, useEffect } from 'react';
import './App.css';
import TransactionList from "./components/TransactionList";
import TransactionCreate from "./components/TransactionCreate";
import Login from "./components/Login";
import CustomerSelect from "./components/CustomerSelect";


function App() {
  const [token, setToken] = useState(null);
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

  const handleCustomerChanged = customerId => {
    console.log(`Customer ID : ${customerId}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        {!token && <Login onLoginSuccess={token => setToken(token)} />}
        {token && 
          <div>
            <CustomerSelect token={token} onCustomerSelected={handleCustomerChanged} />
            <p>Current Amount {amount} </p>
            <TransactionCreate onCreated={data => addTransaction(data)}/>
            <TransactionList data={transactionData}/>
          </div>
        }
      </header>
    </div>
  );
}

export default App;
