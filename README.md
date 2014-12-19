#Building a Chat client

We're going to build a simple chat-client! At the end we'll be able to register a username and send messages
to all connected users. We can test this by opening the app in several different tabs.
The client uses two external libraries: jQuery and socket.io.

The server is also written in JS. It is not necessary to understand how the server works to complete the tasks.

The server is mainly responsible for:
- Rendering the index.html page.
- Handeling the web sockets.

Web sockets can be thought of as an open connection to the server and you send and receive message. Each client is talking (in this case, sending messages) through the server.

Chat is the global object or module we're going to work with.
We could have organized the code in several different ways, Chat is following a variation of the module pattern which gives us the
oportunity to have both global and private properties.
You can read more about that here:
http://toddmotto.com/mastering-the-module-pattern/

#Set up the project
- clone this repository
- `npm install`
- Optional `npm install -g nodemon`
- from root: `nodemon server/index.js`
- Server is available at: [http://localhost:3000/](http://localhost:3000/)


#Tasks

##Complete the message circle.

As of now, we're not able to send any messages. We need to fix that.

- Modify the object inside the `$('#message-form').submit(...)` callback
  We use an object instead of a plain text string from the beginning in case we have to add more properties later.

- Pass the message object to `self.broadcastMessage()`. This will send a message to the server that again will
  broadcast to all connected users.

  To test this: Open the page in two tabs. See the messages sent being printed in the console of both pages.


##Manipulate(insert) the DOM with jQuery and render the messages.

- Create a method called 'render'
  - Takes a parameter message of type Object.
  - Render the message. We can insert a string with HTML straight into the DOM
    with jQuery. We're going to render all of this inside the div with the class `message-board`
- Make the div auto scroll to the bottom when a new message is inserted.


The chat should work now. Open two tabs and try to send messages between them.


##Add username

- Uncomment the overlay in index.html Display the overlay on page load.

- Add an event listener to the ``#join` button. The callback should store the username as a private property in `Chat`.
- Validate the username. Submitting Numbers and empty strings should show an error message: "Invalid name"
- Close the overlay when a valid username is submitted.

- Add username to the message object (in Chat.brodcastMessage)
- Display username together with the message.


##Sent Message History

When you're in a terminal and click arrow-up on a keyboard you get to see the history of what you've done.
That's the next feature we're going to implement in our chat-client.

- When sending a message: store the message in an Array.
- Attach an event listener to #message-input and listen for arrow-up
- Create a function that returns the next item in your history.
- Create a function that replaces the content of the #message-input


##Render with mustache

Manipulating the DOM with jQuery becomes a mess compared to using a templating engine.
- Refactor the client to use https://github.com/janl/mustache.js


##Separation of concerns

Creating one big file for JS will become a mess. We should separate the logic into separate modules to keep the code clean and modular.

- Create a new module: `Join` and move all join logic(validation, open/close modal) into that module. Create `Chat.setUser(username)` to pass the Chat module
