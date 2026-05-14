import react from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

import styles from "@/styles/Component.module.css"

function IconoQuitar() {
    return (
        <button className={styles.search_del}>
            <FaTimes />
        </button>
    )
}

export default function SearchBar() {
    return (
        <div className={styles.search_container}>
            <div className={styles.fila}>
                <select><option value="vinos" disabled>Clase (vino..)</option> </select>
                <select><option value="elementos">Elementos disponibles</option></select>
                {IconoQuitar()}
                <select>
                    <option disabled>Tiempo</option>
                    <option value="tiempo1">1 semana</option>
                    <option value="tiempo2">1 mes</option>
                    <option value="tiempo3">3 meses</option>
                </select>
            </div>

            <div className={styles.fila}>
                <select> <option value="vinos" disabled>Clase (vino..)</option> </select>
                <select><option value="elementos">Elementos disponibles</option></select>
                {IconoQuitar()}
                <div style={{ 'textAlign': 'right', 'color': 'rgba(250,250,250,0.5)' }}>n elementos encontrados</div>
            </div>
        </div>

    )

}
