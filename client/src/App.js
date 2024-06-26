import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateTodo from "./pages/CreateTodo";
import TodoList from "./pages/TodoList";
import NavBar from "./components/NavBar";
import ErrorPage from "./pages/404";
import EditTodo from "./pages/EditTodo";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <div className="container">
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/create" element={<CreateTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;