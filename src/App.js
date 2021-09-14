import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';

function App() {
  const [ input, setInput ] = useState("")
  const [ messages, setMessages ] = useState([
    {username: 'sonny', text: "one"}, 
    {username: 'kanye', text: "two"}, 
    {username: 'mary',text: "three"}
  ])

  const [ username, setUsername ] = useState("");
  // useEffect( () => { return ( )}, [input])

  const sendMessage = (event) => { 
    event.preventDefault()

    setMessages([...messages, {username: username, text: input} ])
    setInput("")
  }

  useEffect( () => {
    setUsername(prompt("Please enter your name"))
  }, [])
  return (
    <div className="App">
      <h1>Messenger</h1>
      <form>
      <FormControl>
  <InputLabel>Enter a message</InputLabel>
  <Input value={input} onChange={ (event) => setInput(event.target.value)} />
  <Button 
        variant="outline" 
        color="primary" 
        disabled={!input} 
        onClick={sendMessage} 
        type="submit"
      >
        Send messages
      </Button>

</FormControl>
      </form>

      {messages.map( (msg) => { return <Message 
      message={msg}
      username={username}
      ></Message>})}
      {/* */}

    </div>
  );
}

export default App;
