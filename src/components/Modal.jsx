import { useState } from "react";
import cerrar from '../img/cerrar.svg';
import Mensaje from "./Mensaje";
function Modal({ setModal, animarModal, setAnimarModal, guardarGasto}) {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [mensaje, setMensaje] = useState('');

    const ocultarModal = () => {
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if ([nombre, categoria].includes('') || cantidad <= 0) {
            setMensaje('Todos los Campos son Obligatorios')
            setTimeout(() => {
                setMensaje('')                
            }, 1000);
        } 
        guardarGasto({nombre, cantidad, categoria})
    }
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={cerrar} alt="Cerrar modal" onClick={ocultarModal} />
            </div>
            <form onSubmit={handleSubmit} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>Nuevo gasto</legend>

                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input type="text" id="nombre" placeholder="Añade el Nombre del Gasto" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input type="number" id="cantidad" placeholder="Añade la Cantidad del Gasto" value={cantidad} onChange={(event) => setCantidad(event.target.value)} />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoría</label>
                    <select id="categoria" value={categoria} onChange={(event) => setCategoria(event.target.value)}>
                        <option value="">--Seleccione--</option>
                        <option value="Ahorro">Ahorro</option>
                        <option value="Comida">Comida</option>
                        <option value="Casa">Casa</option>
                        <option value="Varios">Varios</option>
                        <option value="Ocio">Ocio</option>
                        <option value="Salud">Salud</option>
                        <option value="Suscripciones">Suscripciones</option>


                    </select>
                </div>
                <input type="submit" value='Añadir Gasto' />
            </form>
        </div>
    );
}

export default Modal;