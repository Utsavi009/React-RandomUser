import React from "react";
import users from "./users.json";
import "./App.css";
import User from "./User";

const App = () => {

console.log(users)


  return (
    <div className="App">
      <h1>
        <a href="/instructions.html" target="_blank"> instructions </a>
      </h1>
    
      {users &&
        users.results.map((user) => {
          return <User key={user.phone} {...user} />;
        })}

    </div>
  );
};

export default App;
