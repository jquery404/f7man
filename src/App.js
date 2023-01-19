import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

function App() {

  const [myItem, setMyItem] = useState('');

  useEffect(()=>{
    fetchItem();
  }, []);
  
  async function fetchItem() {
    API.get('foodapi', '/items')
      .then(response => {
        setMyItem(response.success);
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {myItem}
      </header>
    </div>
  );
}

export default App;
