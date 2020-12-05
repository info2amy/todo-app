import { useEffect, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

import { baseURL, config } from './services/index'

import './App.css'

import TodoList from './components/TodoList'
import TodoDetails from './components/TodoDetails'
import AddTodo from './components/AddTodo'


function App() {

  const [todos, updateTodos] = useState([])
  const [refresh, triggerRefresh] = useState(false)

  // GET REQUEST
  const getToDoData = async () => {
    const res = await axios.get(baseURL, config)
    // console.log(res)
    updateTodos(res.data.records)
  }

  // POST REQUEST
  const postToDoData = async (formData) => {
    await axios.post(baseURL, { fields: formData }, config)
  }


  useEffect(() => {
    getToDoData()
  }, [refresh])


  return (
    <div>
      <nav className="nav-container">
        <Link to="/add-todo">Add To-Do</Link>
        <br/>
        <Link to='/'>Go Home</Link>
      </nav>
      <hr/>
      <Route exact path="/">
        <TodoList todos={todos} />
      </Route>

      <Route path="/items/:itemID">
        <TodoDetails todos={todos} />
      </Route>

      <Route path="/add-todo">
        <AddTodo
          postToDoData={postToDoData}
          triggerRefresh={triggerRefresh}
          refresh={refresh}
        />
      </Route>


    </div>
  );
}

export default App;
