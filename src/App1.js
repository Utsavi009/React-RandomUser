import React, { useState, useEffect } from "react";
import users from "./users.json";
import "./App.css";
import User from "./User";
import axios from 'axios';

const App = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState(0);
    const [gender, setGender] = useState('');

    console.log(data)

    useEffect(() => {

      fetchData();  
      const interval= setInterval(() => {
        fetchData();
        }, 30000);

      return () => clearInterval(interval);
    },[gender])

    useEffect(() => {
        setQuery(randomNumber)
    }, [query]) 

      const randomNumber = () => {
        return Math.floor(Math.random() *10 )
      }
    
      const fetchData = async () => {
        await axios.get(`https://randomuser.me/api/?results=${query}&gender=${gender}`).
        then( response => setData(response.data.results))
        .catch(error => console.log(error))
      }


  return (
    <div className="App">
      <h1>
        <a href="/instructions.html" target="_blank"> instructions </a>
      </h1>
       <button onClick={() => setGender('male')}>Show only Men</button>
      <button onClick={() => setGender('female')}>Show only Women</button>
      <button onClick={() => setGender('')}>Show both</button>

      {data && 
        data.map((user) => {
          return <User key={user.phone} {...user} />;
        })}
    

    </div>
  );
};

export default App;
