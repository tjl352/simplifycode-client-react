import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/simplex/bootstrap.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.js';
import Popper from 'popper.js';
import CustomerTable from './components/CustomerTable';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Jumbotron from './components/JumboTron';
import TodoCard from './components/TodoCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <CustomerTable />
      <Login />
      <TodoCard />
    </div>
  );
}

export default App;
