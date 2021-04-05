import './App.css';
import TransactionList from "./components/TransactionList";


function App() {
  const transactionData = [
    { id: 1, created: "01/02/2021 - 08:30", type: "รายรับ", amount: 20000, note: "allowance" },
    { id: 2, created: "01/02/2021 - 10:30", type: "รายจ่าย", amount: 150, note: "อาหารเที่ยง" },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <TransactionList data={transactionData} />
      </header>
    </div>
  );
}

export default App;
