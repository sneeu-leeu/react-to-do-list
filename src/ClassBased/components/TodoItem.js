import React from "react"
import styles from "./TodoItems.module.css"

class TodoItem extends React.Component {
  state = {
    editing: false,
  }

  completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }

  HandleUpdatedDone = event => {
    if (event.key === "Enter" ) {
      this.setState({editing: false})
    }
  }

  componentWillUnmount() {
    console.log('tsek')
  }

 render() {
  const {completed , id , title} = this.props.todo;

  let viewMode = {}
  let editMode = {}

  if (this.state.editing) {
    viewMode.display = 'none'
  } else {
    editMode.display = 'none'
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={this.handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
        checked={completed}
        onChange={() => this.props.handleChangeProps(id)}
        />
        <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? this.completedStyle : null}>{title}</span>
      </div>
      <input
      type="text"
      style={editMode}
      className={styles.textInput}
      value={title}
      onChange={( e => {
        this.props.setUpdate(e.target.value, id)
      })}
      onKeyDown={this.HandleUpdatedDone}
      />
    </li>
  )
 }
}

export default TodoItem;