import { useEffect, useState } from "react";
import Form from "./Form";
import ToDo from "./ToDo";

const List = () => {
    const [todos, setTodos] = useState([]);
//tomando los datos de localStorage se convierte en un array
    useEffect(() => {
        console.log("Leer todos local");
        if (localStorage.getItem("todos")) {
            setTodos(JSON.parse(localStorage.getItem("todos")));
        }
    }, []);
//guardando los datos en localStorage
    useEffect(() => {
        console.log("Guardar todo local");
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        // console.log(todo);
        setTodos((old) => [...old, todo]);
    };

    const deleteTodo = (id) => {
        setTodos((old) => old.filter((item) => item.id !== id));
    };

    const editarTodo = (id) => {
        const editTodo = todos.map((item) =>
            item.id === id ? { ...item, estado: !item.estado } : item
        );
        setTodos(editTodo);
    };

    return (
        <>
            <Form addTodo={addTodo} />
            <ul>
                {todos.map((item) => (
                    <ToDo
                        key={item.id}
                        todo={item}
                        deleteTodo={deleteTodo}
                        editarTodo={editarTodo}
                    />
                ))}
            </ul>
        </>
    );
};

export default List;
