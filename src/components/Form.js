import Swal from "sweetalert2";
import { useFormulario } from "../hooks/useFormulario";

const Form = ({ addTodo }) => {
    const initialState = {
        nombre: "",
        apellido: "",
        estado: "pendiente",
        prioridad: false,
    };

    const [inputs, handleChange, reset] = useFormulario(initialState);

    const { nombre, apellido, estado, prioridad } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            e.target[0].focus();
            return Swal.fire({
                title: "Error!",
                text: "Nombre ogligatorio",
                icon: "error",
            });
        }
        if (!apellido.trim()) {
            e.target[1].focus();
            return Swal.fire({
                title: "Error!",
                text: "apellido ogligatorio",
                icon: "error",
            });
        }

        // Agregar todo
        addTodo({
            nombre: nombre,
            apellido: apellido,
            estado: estado === "pendiente" ? false : true,
            prioridad: prioridad,
            id: Date.now(),
        });

        Swal.fire({
            title: "Éxito",
            text: "¡Todo agregado!",
            icon: "success",
        });

        // limpiar form
        reset();
    };

    return (
        <>
            <h3>Formulario</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    placeholder="apellido"
                    name="apellido"
                    value={apellido}
                    onChange={handleChange}
                    className="form-control mb-2"
                />
                
                <select
                    name="estado"
                    value={estado}
                    onChange={handleChange}
                    className="form-control mb-2"
                >
                    <option value="pendiente">pendiente</option>
                    <option value="finalizado">finalizado</option>
                </select>
                <div className="form-check">
                    <input
                        type="checkbox"
                        name="prioridad"
                        id="idCheckbox"
                        checked={prioridad}
                        onChange={handleChange}
                        className="form-check-input mb-2"
                    />
                    <label htmlFor="idCheckbox" className="form-check-label">
                        Dar prioridad
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Form;
