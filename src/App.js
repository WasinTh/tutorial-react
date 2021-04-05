import { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';
import TransactionList from "./components/TransactionList";
import TransactionCreate from "./components/TransactionCreate";
import Login from "./components/Login";
import CustomerSelect from "./components/CustomerSelect";


function App() {
  const [token, setToken] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [amount, setAmount] = useState(0);
  const [transactionData, setTransactionData] = useState([]);

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
    axios.get(`http://localhost:8000/account/transaction-viewsets/?customer__id=${customerId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => setTransactionData(response.data))
      .catch(err => alert(err));
    setCustomer(customerId)
  }

  return (
    <div className="App">
      <header className="App-header">
        {!token && <Login onLoginSuccess={token => setToken(token)} />}
        {token && <CustomerSelect token={token} onCustomerSelected={handleCustomerChanged} />}
        {
          customer &&
          <div>
            <p>Current Amount {amount} </p>
            <TransactionCreate onCreated={data => addTransaction(data)} />
            <TransactionList data={transactionData} />
          </div>
        }
      </header>
    </div>
  );
}

export default App;
