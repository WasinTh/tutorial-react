export default function TransactionList(props) {

  const generateRows = () => {
    if (props.data != null) {
      return props.data.map(transaction => (
        <tr key={transaction.id} bgcolor={transaction.type === "รายรับ" ? "green" : "red"}>
          <td>{transaction.created}</td>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>
            <input value={transaction.note}
              onChange={(evt) => {
                props.onNoteChanged(transaction.id, evt.target.value)
              }}
            />
          </td>
          <td><button onClick={() => alert(JSON.stringify(props))}>Debug</button></td>
        </tr>
      ))
    }
    else {
      return null;
    }
  }

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Date-Time</th>
          <th>Type</th>
          <th>amount</th>
          <th>note</th>
          <th>debug</th>
        </tr>
      </thead>
      <tbody>{generateRows()}</tbody>
    </table>
  )
}
