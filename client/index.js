import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import './styles.css';

<<<<<<< HEAD
render(<App style="width: 100%; display: flex; justify-content: center;"/>, document.getElementById('app'));
=======

const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

// Get username and room from URL
// const { username, room } = Qs.parse(location.search, {
//   ignoreQueryPrefix: true
// });

// console.log(username, room);

const socket = io.connect('http://localhost:3000');

// socket.emit('joinRoom', ({ username, room }) => {
//   console.log(username, room)
// });

// Message from server
socket.on('message', message => {
  console.log(message);
  outputMessage(message);

  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
})

chatForm.addEventListener('submit', (e)=> {
  e.preventDefault();

  // Get message text
  const msg = e.target.elements.msg.value;

  // Emitting a message to the server
  socket.emit('chatMessage', msg);

  // Clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});



// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span><p class="text">${message.text}</p>`;
  document.querySelector('.chat-messages').appendChild(div);
}


render(<App />, document.getElementById('app'));
>>>>>>> e74774f070114beac87a9b5f1c94f6ef3c498d5b
