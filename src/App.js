import logo from './logo.svg';
import './App.css';
import react, { useState } from 'react';

function App() {
  const [ input, setInput ] = useState("")
  const [ messages, setMessages ] = useState(["one", "two", "three"])
  // useEffect( () => { return ( )}, [input])

  const sendMessage = () => { return (
    setMessages([...messages, input])
  )}
  return (
    <div className="App">
      <h1>Messenger</h1>
      <input value={input} onChange={ (event) => setInput(event.target.value)}/>
      <button onSubmit={sendMessage}>Send message</button>
      {/* input field*/}
      {/* button*/}
      {/* messages themselves*/}
      {/* */}
      {/* */}
      {/* */}
      {/* */}
      {/* */}

    </div>
  );
}

export default App;
