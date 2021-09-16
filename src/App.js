import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import { db } from './firebase.js';
import { collection, doc, getDocs } from "firebase/firestore";

function App() {
  const [ input, setInput ] = useState("")
  const [ messages, setMessages ] = useState([])

  const [ username, setUsername ] = useState("");
  // useEffect( () => { return ( )}, [input])

  useEffect( async () => { 
    const shit = await getDocs(collection(db, "messages"))
    shit.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    
    // console.log(shit)
    // db.collection('messages').onSnapshot( snapshot => { 
    //   setMessages(snapshot.docs.map( doc => doc.data() ) )
    // })
  }, [])

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
