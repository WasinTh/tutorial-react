import { useState } from 'react';
import axios from 'axios';

export default function Login(props) {
  const [state, setState] = useState({ username: '', password: '' });

  const onInputChanged = evt => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value
    })
  }

  const onLogin = evt => {
    evt.preventDefault();
    axios.post('http://localhost:8000/api-token-auth/', { username: state.username, password: state.password })
      .then(response => {
        props.onLoginSuccess(response.data.token);
      })
      .catch(err => alert(err))
  }

  return (
    <form onSubmit={onLogin}>
      <p>Username <input name='username' value={state.username} onChange={onInputChanged} /></p>
      <p>Password <input type='password' name='password' value={state.password} onChange={onInputChanged} /></p>
      <input type='submit' value='Login'></input>
    </form>
  )
}
