import react from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

import styles from "@/styles/Component.module.css"

function IconoQuitar() {
    return (
        <div style={{ fontSize: '24px', display: 'flex', gap: '10px' }}>
            <button>
                <FaTimes />
            </button>
        </div>
    )
}

export default function SearchBar() {
    return (
        <div>
            <div className={styles.fila}>
                <select> <option value="vinos">Clase (vino..)</option> </select>
                <select><option value="elementos">Elementos disponibles</option></select>
                {IconoQuitar()}
                <select>
                    <option value="tiempo1">1 semana</option>
                    <option value="tiempo2">1 mes</option>
                    <option value="tiempo3">3 meses</option>
                </select>
            </div>

            <div className={styles.fila}>
                <select> <option value="vinos">Clase (vino..)</option> </select>
                <select><option value="elementos">Elementos disponibles</option></select>
                {IconoQuitar()}
                <div></div>
            </div>
        </div>

    )

}
