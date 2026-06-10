'use client'

import react from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import styles from "@/styles/Component.module.css"



function IconoQuitar() {
    return (
        <button className={styles.search_del}>
            <FaTimes />
        </button>
    )
}

const opciones_por_clase = {
    vinos: ["Vino tinto", "Vino blanco", "Vino rosado"],
    proveedor: ["Proveedor A", "Proveedor B", "Proveedor C"]
}

export default function SearchBar() {
    const [claseFila1, setClaseFila1] = useState("");
    const [claseFila2, setClaseFila2] = useState("");

    const [elementoFila1, setElementoFila1] = useState([]);
    const [elementoFila2, setElementoFila2] = useState([]);

    const elementosFila1 = opciones_por_clase[claseFila1] || [];
    const elementosFila2 = opciones_por_clase[claseFila2] || [];



    useEffect(() => {
        setElementoFila1("");
    }, [claseFila1]);

    useEffect(() => {
        setElementoFila2("");
    }, [claseFila2]);


    return (
        <div className={styles.search_container}>
            <div className={styles.fila}>
                <select value={claseFila1} onChange={(e) => setClaseFila1(e.target.value)}>

                    <option value="" disabled hidden>
                        Clase ...
                    </option>
                    <option value="vinos">Vinos</option>
                    <option value="proveedor">Proveedor</option>
                </select>
                <select value={elementoFila1} onChange={(e) => setElementoFila1(e.target.value)}>
                    <option value="" disabled hidden>
                        Elementos disponibles
                    </option>
                    {elementosFila1.map((item, index) => (
                        <option key={index} value={item.toLowerCase()}>
                            {item}
                        </option>
                    ))}
                </select>
                {IconoQuitar()}

                <input
                    type="date"
                >
                </input>
            </div>


            <div className={styles.fila}>
                <select value={claseFila2} onChange={(e) => setClaseFila2(e.target.value)}>

                    <option value="" disabled hidden>
                        Clase ...
                    </option>
                    <option value="vinos">Vinos</option>
                    <option value="proveedor">Proveedor</option>
                </select>

                <select value={elementoFila2} onChange={(e) => setElementoFila2(e.target.value)}>
                    <option value="" disabled hidden>
                        Elementos disponibles
                    </option>
                    {elementosFila2.map((item, index) => (
                        <option key={index} value={item.toLowerCase()}>
                            {item}
                        </option>

                    ))}
                </select>

                {IconoQuitar()}

                <input
                    type="date"
                >
                </input>
            </div>


        </div>

    )


}
