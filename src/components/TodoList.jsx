import React from 'react'
import { Link } from 'react-router-dom'

export default function TodoList(props) {
  // console.log(props)

  const items = props.todos.map(item => {
    // console.log(item)
    return (
      <div key={item.id}>
        <li>{item.fields.name}</li>
        <Link to={`/items/${item.id}`}>
          <button>Details</button>
        </Link>
      </div>
    )
  })

  return (
    <div>
      <h1>TO DO LIST</h1>
      <ol>
        {items}
      </ol>
    </div>
  )
}
