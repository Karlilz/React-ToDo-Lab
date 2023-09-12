import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem';

// function MyList(props) {
//   const todoItems = props.theList.map((item, index)=>(
//     <ListItem key={index} doThis={item}/>
//   ))

 
function MyList() {
  return (
    <div>
      <header style={{color: "black", textAlign: "left", fontSize: "45px", fontWeight: "bold", textDecoration: "underline"}}>Things to Get Done</header>
      <div>
        <ul>
          <ListItem/>
        </ul>
      </div>
    </div>
  );
}


export default MyList;
