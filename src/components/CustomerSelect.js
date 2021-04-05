import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CustomerSelect(props) {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/account/customer-viewsets/', {
      headers: {
        'Authorization': `Bearer ${props.token}`
      }
    })
      .then(response => {
        setCustomers(response.data.map(customer =>
          <option key={customer.id} value={customer.id}>
            {customer.name} - {customer.current_amount}
          </option>
        ));
      })
      .catch(err => alert(err));
  }, [props]);

  return (
    <select name="customers" onChange={evt => props.onCustomerSelected(evt.target.value)}>
      <option disabled selected value> Select Customer </option>
      {customers}
    </select>
  )
}
