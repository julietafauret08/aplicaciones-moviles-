import { useState } from "react";

const TABS = [
    { id: "all", label: "Todas", Icon: IconList },
    { id: "completed", label: "Completadas", Icon: IconCheckCircle },
    { id: "pending", label: "Pendientes", Icon: IconCircle }
];

function IconList({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
    );
}

function IconCheckCircle({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    );
}

function IconCircle({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
        </svg>
    );
}

function HomeScreen() {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const [activeTasksIndex, setActiveTasksIndex] = useState(null);
    const [activeTab, setActiveTab] = useState("all");
    
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;

        const newTask = {
            text: inputValue,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setInputValue("");
    };

    const toggleTaskCompleted = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        setActiveTasksIndex(null);
    };

    const saveEditTask = (e) => {
        e.preventDefault();
        if (editValue.trim() === "") return;

        const updatedTasks = [...tasks];
        updatedTasks[activeTasksIndex].text = editValue;
        
        setTasks(updatedTasks);
        setIsEditing(false);
        setActiveTasksIndex(null);
    };

    const filteredTasks = tasks.filter((task) => {
        if (activeTab === "completed") {
            return task.completed;
        }
        if (activeTab === "pending") {
            return !task.completed;
        }
        return true;
    });

    // Pequeño ayudante de texto dinámico para el subtítulo del contador
    const getCounterText = () => {
        const count = filteredTasks.length;
        if (activeTab === "completed") return `${count} completada${count !== 1 ? "s" : ""}`;
        if (activeTab === "pending") return `${count} pendiente${count !== 1 ? "s" : ""}`;
        return `${count} tarea${count !== 1 ? "s" : ""} en total`;
    };

    return (
        <div className="todo-container">
            <header className="todo-header" style={{ marginBottom: "20px" }}>
                <h1 style={{ marginBottom: "4px" }}>MIS TAREAS</h1>
                {/* Contador Dinámico */}
                <p style={{ 
                    margin: 0, 
                    color: "white", 
                    fontSize: "16px", 
                    fontWeight: "600",
                    opacity: 0.9 
                }}>
                    {getCounterText()}
                </p>
            </header>

            <form className="todo-input-section" onSubmit={addTask}>
                <input
                    type="text"
                    placeholder="Comprar sensores"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Añadir</button>
            </form>

            <ul className="todo-list">
                {filteredTasks.length === 0 ? (
                    <li className="todo-empty" style={{ color: "white", opacity: 0.8 }}>
                        No hay tareas para mostrar
                    </li>
                ) : (
                    filteredTasks.map((task, index) => (
                        <li
                            key={index}
                            className={`todo-item ${
                                task.completed ? "todo-item--completed" : ""
                            }`}
                        >
                            <span className="todo-item__text">
                                {task.text}
                            </span>

                            <button
                                type="button"
                                className="todo-item__menu"
                                aria-label="opciones de la tarea"
                                onClick={() => {
                                    const realIndex = tasks.findIndex((t) => t.text === task.text);
                                    setActiveTasksIndex(realIndex);
                                    setEditValue(task.text);
                                }}
                            >
                                ⋮
                            </button>
                        </li>
                    ))
                )}
            </ul>

            {activeTasksIndex !== null && (
                <div
                    className="action-sheet-overlay"
                    onClick={() => {
                        setActiveTasksIndex(null);
                        setIsEditing(false);
                    }}
                >
                    <div
                        className="action-sheet"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="action-sheet__panel">
                            {isEditing ? (
                                <form onSubmit={saveEditTask} style={{ padding: "16px", display: "flex", gap: "8px" }}>
                                    <input
                                        type="text"
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                        style={{
                                            flexGrow: 1,
                                            padding: "10px",
                                            borderRadius: "8px",
                                            border: "1px solid #ddd",
                                            fontSize: "16px"
                                        }}
                                        autoFocus
                                    />
                                    <button 
                                        type="submit" 
                                        style={{
                                            padding: "10px 16px",
                                            background: "#007aff",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "8px",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        Guardar
                                    </button>
                                </form>
                            ) : (
                                <>
                                    <p className="action-sheet__title">
                                        {tasks[activeTasksIndex]?.text}
                                    </p>

                                    <div className="action-sheet__separator" />

                                    <button
                                        type="button"
                                        className="action-sheet__btn"
                                        onClick={() => {
                                            toggleTaskCompleted(activeTasksIndex);
                                            setActiveTasksIndex(null);
                                        }}
                                    >
                                        {tasks[activeTasksIndex]?.completed
                                            ? "Marcar como pendiente"
                                            : "Marcar como completada"}
                                    </button>

                                    <div className="action-sheet__separator" />

                                    <button
                                        type="button"
                                        className="action-sheet__btn"
                                        onClick={() => setIsEditing(true)}
                                    >
                                        Editar texto
                                    </button>

                                    <div className="action-sheet__separator" />

                                    <button
                                        type="button"
                                        className="action-sheet__btn action-sheet__btn--destructive"
                                        onClick={() => deleteTask(activeTasksIndex)}
                                    >
                                        Eliminar tarea
                                    </button>
                                </>
                            )}
                        </div>

                        <button
                            type="button"
                            className="action-sheet__btn action-sheet__btn--cancel"
                            onClick={() => {
                                setActiveTasksIndex(null);
                                setIsEditing(false);
                            }}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}

            <nav className="todo-navbar" aria-label="filtrar tareas">
                {TABS.map(({ id, label, Icon }) => (
                    <button
                        key={id}
                        type="button"
                        className={`todo-navbar__tab ${
                            activeTab === id ? "todo-navbar__tab--active" : ""
                        }`}
                        onClick={() => setActiveTab(id)}
                    >
                        <Icon className="todo-navbar__icon" />
                        <span className="todo-navbar__label">{label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}

export default HomeScreen;