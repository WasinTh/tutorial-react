import './App.css';
import TransactionList from "./components/TransactionList";


function App() {
  const transactionData = [
    { id: 1, created: "01/02/2021 - 08:30", type: "รายรับ", amount: 20000, note: "allowance" },
    { id: 2, created: "01/02/2021 - 10:30", type: "รายจ่าย", amount: 150, note: "อาหารเที่ยง" },
  ]

  const currentAmount = transactionData.reduce((sum, transaction) => sum += transaction.amount, 0);
  const richGreeting = amount => <p style={{ 'color': 'green' }}>Wow you're so rich - {amount}</p>
  const poorGreeting = amount => <p style={{ 'color': 'red' }}>So poor... - {amount}</p>

  let counter = 0;
  const counterClicked = () => {
    console.log(`Clicked - ${counter}`);
    counter++;
  }

  return (
    <div className="App">
      <header className="App-header">
        {counter >= 3 && richGreeting(counter)}
        {counter < 3 && poorGreeting(counter)}
        <button onClick={counterClicked}>Add Counter</button>
        <TransactionList data={transactionData} />
      </header>
    </div>
  );
}

export default App;
