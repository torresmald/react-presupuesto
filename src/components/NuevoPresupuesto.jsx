import React from 'react';
import { useState } from 'react';
import Mensaje from './Mensaje';
function NuevoPresupuesto({ presupuesto, setPresupuesto, setIsValidPresupuesto }) {
    const [mensaje, setMensaje] = useState('')
    const handlePresupuesto = (event) => {
        event.preventDefault();
        if (!presupuesto || presupuesto < 0) {
            setMensaje('No es un presupuesto válido');
            return;
        } 
        setMensaje('');
        setIsValidPresupuesto(true);
    }
    return (
        <div className="contenedor-presupuesto sombra contenedor">
            <form className='formulario' onSubmit={handlePresupuesto}>
                <div className='campo'>
                    <label htmlFor="">Definir Presupuesto</label>
                    <input type="number" className='nuevo-presupuesto' placeholder='Añade tu Presupuesto' value={presupuesto} onChange={(event) => setPresupuesto(Number(event.target.value))} />
                </div>
                <input type="submit" value="Añadir" />
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            </form>
        </div>
    );
}

export default NuevoPresupuesto;