import React  from "react";
import Header from "./components/Header";
import Login from './components/Login';
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import UsersList from "./components/UsersList";
import ProductDetail from "./components/ProductDetail";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Header/>
      </nav>
      <main className="App-main  m-3">
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/productos" element={<ProductList/>}/>
          <Route path="/productos/:id" element={<ProductDetail/>}/>
          <Route path="/usuarios" element={<UsersList/>}/>
        </Routes>
      </main> 
    </div>
  );
}

export default App;
