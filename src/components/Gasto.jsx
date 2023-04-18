import { formatearFecha } from '../helpers/index.js';
import iconoAhorro from '../img/icono_ahorro.svg';
import iconoCasa from '../img/icono_casa.svg';
import iconoComida from '../img/icono_comida.svg';
import iconoGastos from '../img/icono_gastos.svg';
import iconoOcio from '../img/icono_ocio.svg';
import iconoSalud from '../img/icono_salud.svg';
import iconoSuscripciones from '../img/icono_suscripciones.svg';

function Gasto({ gasto }) {
    const { nombre, cantidad, id, categoria, fecha } = gasto;
    const iconos = {
        Ahorro: iconoAhorro,
        Comida: iconoComida,
        Casa: iconoCasa,
        Varios: iconoGastos,
        Ocio: iconoOcio,
        Salud: iconoSalud,
        Suscripciones: iconoSuscripciones
    }
    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img src={iconos[categoria]} alt="Icono Categoria" />
                <div className="descripcion-gasto">
                    <p className="categoria">{categoria}</p>
                    <p className="gasto">{nombre}</p>
                    <p className='fecha-gasto'>{formatearFecha(fecha)}</p>
                </div>
            </div>
            <p className='cantidad-gasto'>{cantidad}€</p>
        </div>
    );
}

export default Gasto;