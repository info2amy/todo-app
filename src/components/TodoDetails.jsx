import React from "react";
import { useParams, Link } from "react-router-dom";

export default function TodoDetails(props) {
  const { itemID } = useParams();

  // console.log('detailssss ', props)
  // console.log(itemID)
  const todoItem = props.todos.find((item) => item.id === itemID);

  // console.log(todoItem)
  return (
    <div>
      <h1>TODO DETAILS</h1>
      {todoItem && (
        <>
          <h4>{todoItem.fields.name}</h4>
          <p>{todoItem.fields.description}</p>
        </>
      )}
      <Link to="/">Go Home</Link>
    </div>
  );
}
