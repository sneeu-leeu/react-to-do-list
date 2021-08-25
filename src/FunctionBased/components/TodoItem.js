import React, { useState, useEffect } from "react"
import styles from "./TodoItems.module.css"
import { FaTrash } from "react-icons/fa"

const TodoItem = props => {

  const {editing, setEditing} = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const HandleUpdatedDone = event => {
    if (event.key === "Enter" ) {
      setEditing({editing: false})
    }
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const {completed , id , title} = props.todo

  let viewMode = {}
  let editMode = {}

  
  if (editing) {
    viewMode.display = 'none'
  } else {
    editMode.display = 'none'
  }

  useEffect(() => {
    return () => {
      console.log('cleaning')
    }
  }, [])

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
          < FaTrash />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
      type="text"
      style={editMode}
      className={styles.textInput}
      value={title}
      onChange={( e => {
        props.setUpdate(e.target.value, id)
      })}
      onKeyDown={HandleUpdatedDone}
      />
    </li>
  )
}

export default TodoItem;