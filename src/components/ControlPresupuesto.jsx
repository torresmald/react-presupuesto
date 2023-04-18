
function ControlPresupuesto({presupuesto}) {

    const controlCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-ES', {
            style: 'currency',
            currency: 'EUR'
        })
    }
    
    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <p>Gráfica aquí</p>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: {controlCantidad(presupuesto)}</span>
                </p>
                <p>
                    <span>Disponible: {controlCantidad(0)}</span>
                </p>
                <p>
                    <span>Gastado: {controlCantidad(0)}</span>
                </p>
            </div>
        </div>
    );
}

export default ControlPresupuesto;