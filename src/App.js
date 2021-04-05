import './App.css';
import TransactionList from "./components/TransactionList";


function App() {
  const transactionData = [
    { id: 1, created: "01/02/2021 - 08:30", type: "รายรับ", amount: 20000, note: "allowance" },
    { id: 2, created: "01/02/2021 - 10:30", type: "รายจ่าย", amount: 150, note: "อาหารเที่ยง" },
  ]

  const summary = () => {
    const currentAmount = transactionData.reduce( (sum, transaction) => sum += transaction.amount, 0);
    if(currentAmount > 10000) {
      return <p style={{'color': 'green'}}>Wow you're so rich - {currentAmount}</p>
    }
    else {
      return <p style={{ 'color': 'red' }}>So poor... - {currentAmount}</p>
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {summary()}
        <TransactionList data={transactionData} />
      </header>
    </div>
  );
}

export default App;
