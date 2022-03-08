import React, { useState, useEffect } from "react";

function LineItemExpenses({
  description,
  monthly,
  annual,
  frequency,
  dueDate,
  notes,
  id,
  setExpenses,
}) {
  // const [remove, setRemove] = useState(false);

  function handleDelete(e) {
    // console.log(e.target.id);
    const decision = prompt(
      "Type DELETE if you want to delete this item? \n(This action cannot be undone)"
    );
    if (decision.toUpperCase() === "DELETE") {
      fetch(`http://localhost:9292/delete_expense/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((resp) => {
        console.log(resp);
      });
      setExpenses((currentExpenses) => {
        currentExpenses.filter((expense) => expense.id !== id);
      });
      // setRemove(() => !remove);
    }
  }

  function handleEdit(e) {
    e.preventDefault();
  }

  return (
    <div className="line-item">
      <div className="line-item-box-btn">
        <button className="btn" onClick={handleEdit} value={id}>
          ✎
        </button>
      </div>
      <div className="line-item-box">{description}</div>
      <div className="line-item-box">{monthly}</div>
      <div className="line-item-box">{annual}</div>
      <div className="line-item-box">{frequency}</div>
      <div className="line-item-box">{dueDate}</div>
      <div className="line-item-box">{notes}</div>
      <div className="line-item-box-btn">
        <button className="btn" onClick={handleDelete} id={id}>
          🅇
        </button>
      </div>
    </div>
  );
}

export default LineItemExpenses;
