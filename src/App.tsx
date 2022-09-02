import React, { useEffect, useState } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  type: string;
};

type Message = {
  sender: string;
  receiver: string;
  body: string;
  type: string;
};

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({} as User);

  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<Message>({} as Message);

  const handleUsers = () => {
    setUsers([...users, user]);
  };

  const handleUser = () => {
    setUser({
      id: 1,
      firstName: "kenneth",
      lastName: "Gunabe",
      email: "kennethgunabe@gmail.com",
      type: "teacher",
    });
  };

  const handleMessages = () => {
    setMessages([...messages, message]);
  };

  const handleMessage = () => {
    setMessage({
      sender: user.firstName,
      receiver: user.firstName,
      body: "sample message",
      type: "manual",
    });
  };

  return (
    <div>
      {user.firstName}
      {users &&
        users?.length > 0 &&
        users.map((employee, index) => (
          <div key={index}>
            <h2>
              ID: {employee.id} | FIRSTNAME: {employee.firstName}
            </h2>
          </div>
        ))}
      {message.body}
      {messages &&
        messages?.length > 0 &&
        messages.map((message, index) => (
          <div key={index}>
            <h2>body: {message.body}</h2>
          </div>
        ))}
      <button onClick={handleUser}>Click</button>
      <button onClick={handleUsers}>Click2</button>
      <button onClick={handleMessage}>MSG</button>
      <button onClick={handleMessages}>MSGS</button>
    </div>
  );
};

export default App;
