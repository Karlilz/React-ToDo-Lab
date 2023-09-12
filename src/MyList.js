import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem';

function MyList() {
  const myListData = ["Schedule Dentist Apt", "Order Cat Food", "Fold Laundry", "Reschedule Dance Class", "Call Mom and Dad", "Finish React Assignment"]; // Replace this with your data
  return (
    <div>
      <header style={{color: "black", textAlign: "left", fontSize: "45px", fontWeight: "bold", textDecoration: "underline"}}>Things to Get Done</header>
      <ul>
        {myListData.map((item, index) => (
          <ListItem key={index} doThis={`${item}`} /> 
        ))}
      </ul>
    </div>
  );
}

export default MyList;
