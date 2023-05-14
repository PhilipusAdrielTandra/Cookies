import { useState } from 'react'
import { useCookies } from 'react-cookie';
import './App.css'

function App() {
  const [cookies, setCookie] = useCookies(['Name', 'Password']);
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');

  const handle = () => {
     setCookie('Name', name, { path: '/' });
     setCookie('Password', pwd, { path: '/' });
  };
  return (
    <div className="App">
      <h1>Username:</h1>
      <input placeholder="Insert Username" value={name} onChange={(e) => setName(e.target.value)}/>
      <h1>Password:</h1>
      <input type="password" placeholder='Insert Password' value={pwd} onChange={(e) => setPwd(e.target.value)}/>
      <div className='cookieButton'>
        <button onClick={handle}>Set Cookie</button>
      </div>
      <br/>
      <div>
        Name: {cookies['Name']}
        <br/>
        Password: {cookies['Password']}
      </div>
    </div>
  )
}

export default App
