import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
    console.log(todos)

    const elements = todos.map((item) => {
        // 
        const { id, ...itemProps } = item
        return (<li key={item.id} className="list-group-item">
            <TodoListItem {...itemProps}
                onDeleted={() => onDeleted(id)}
                onToggleDone={() => onToggleDone(id)}
                onToggleImportant={() => onToggleImportant(id)}

            />
        </li>)
    })


    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
}

export default TodoList;