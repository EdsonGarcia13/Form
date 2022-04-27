const ToDo = ({ todo, deleteTodo, editarTodo }) => {
    const { id, nombre, apellido, estado, prioridad } = todo;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    {nombre} ({estado ? "Finalizado" : "Pendiente"})
                </div>
                <div className="fw-bold" >
                    {apellido} ({estado ? "Finalizado" : "Pendiente"})
                </div>
                <div>
                    <button
                        className="btn btn-sm btn-danger me-1"
                        onClick={() => deleteTodo(id)}
                    >
                        Eliminar
                    </button>
                    <button
                        className="btn btn-sm btn-warning me-1"
                        onClick={() => editarTodo(id)}
                    >
                        Editar
                    </button>
                </div>
            </div>
            <span className="badge bg-primary rounded-pill">
                {prioridad && "prioritario"}
            </span>
        </li>
    );
};

export default ToDo;
