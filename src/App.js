import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table border="1">
          <tr>
            <th>Date-Time</th>
            <th>Type</th>
            <th>amount</th>
            <th>note</th>
          </tr>
          <tr>
            <td>01/02/2021 - 08:30</td>
            <td>รายรับ</td>
            <td>20,000</td>
            <td>Allowance</td>
          </tr>
          <tr>
            <td>01/02/2021 - 10:30</td>
            <td>รายจ่าย</td>
            <td>150</td>
            <td>อาหารเที่ยง</td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
