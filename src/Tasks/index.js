import "./style.css"

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`tasks__item ${task.done && hideDoneTasks ? "tasks__item--hidden" :
                    ""}`}
            >
                <button
                    onClick={() => toggleTaskDone(task.id)}
                    className={`tasks__button tasks__button--toggleDone`}>
                    {task.done ? "✔" : ""}
                </button>
                <span
                    className={`tasks__content 
                    ${task.done ? "tasks__content--done" : ""}`}
                >
                    {task.id} - {task.content}
                </span>
                <button
                    className="tasks__button tasks__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;