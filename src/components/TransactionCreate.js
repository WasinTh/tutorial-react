import { useState } from 'react';

export default function TransactionCreate(props) {
  const DEFAULT_STATE = { type: null, amount: 0, note: '' };
  const [state, setState] = useState(DEFAULT_STATE);

  const onFormChanged = evt => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value
    })
  }

  const onSubmitForm = evt => {
    evt.preventDefault()
    props.onCreated({
      created: new Date().toLocaleString(), 
      type: state.type, 
      amount: parseInt(state.amount),
      note: state.note, 
      customer: props.customerId
    })
    setState(DEFAULT_STATE);
  }

  return (
    <form onSubmit={onSubmitForm}>
      <select name="type" value={state.type} onChange={onFormChanged}>
        <option disabled selected value> Select Type </option>
        <option key='INCOME' value='รายรับ'> รายรับ </option>
        <option key='EXPENSE' value='รายจ่าย'> รายจ่าย </option>
      </select>
      <input type='number' name='amount' value={state.amount} onChange={onFormChanged} />
      <input name='note' value={state.note} onChange={onFormChanged} />
      <input type='submit' value='Submit'></input>
    </form>
  )
}
