import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import { db } from './firebase.js';
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from "firebase/firestore";
import FlipMove from 'react-flip-move';

function App() {
  const [ input, setInput ] = useState("")
  const [ messages, setMessages ] = useState([])

  const [ username, setUsername ] = useState("");
  // useEffect( () => { return ( )}, [input])

  useEffect( async () => { 
    const theMessages = query( collection(db, "messages"), orderBy('timestamp', "asc") );

    onSnapshot((theMessages), (snapshot) => 
    { 
        setMessages(snapshot.docs.map( doc => { return ({ id: doc.id, message: doc.data() }) } ) )
      })

    }, [])
    
    // console.log(shit)
    // db.collection('messages').onSnapshot( snapshot => { 
    //   setMessages(snapshot.docs.map( doc => doc.data() ) )
    // })
  

  const sendMessage = (event) => { 
    event.preventDefault()
    addDoc(collection(db, "messages"), {username: username, text: input, timestamp: serverTimestamp() })
    // setMessages([...messages, {username: username, text: input} ])
    setInput("")
  }

  useEffect( () => {
    setUsername(prompt("Please enter your name"))
  }, [])
  return (
    <div className="App">
      <h1>Messenger</h1>
      <FlipMove>
        {messages.map( (msg) => { return <Message 
        key={msg.id}
        message={msg.message}
        username={username}
      ></Message>})}

      </FlipMove>
      {/* */}
      <div class="app__form">
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

      </div>

    </div>
  );
}

export default App;
