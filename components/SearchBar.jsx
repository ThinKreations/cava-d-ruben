'use client'
import { useState, useEffect } from 'react';
import styles from "@/styles/Component.module.css"
import { buscar } from "@/pages/api/search-http";

function listaDeClase(clase, selects) {
    if (clase === "vino") return selects.vinos;
    if (clase === "proveedor") return selects.proveedores;
    return [];
}
export default function SearchBar({ selects, onResults }) {

    const [claseFila1, setClaseFila1] = useState("");
    const [claseFila2, setClaseFila2] = useState("");
    const [elementoFila1, setElementoFila1] = useState("");
    const [elementoFila2, setElementoFila2] = useState("");
    useEffect(() => { setElementoFila1(""); }, [claseFila1]);
    useEffect(() => { setElementoFila2(""); }, [claseFila2]);
    useEffect(() => {
        const filas = [
            { clase: claseFila1, elemento: elementoFila1 },
            { clase: claseFila2, elemento: elementoFila2 }
        ].filter(f => f.clase || f.elemento);

        if (filas.length === 0) {
            onResults(null);
            return;
        }


        let cancel = false;
        buscar(filas)
            .then(data => {
                console.log("respuesta buscar:", data);   // ← qué llega
                if (!cancel) onResults(data);
            })
            .catch(e => console.log(e))

        return () => { cancel = true }
    }, [claseFila1, claseFila2, elementoFila1, elementoFila2, onResults])

    const elementosFila1 = listaDeClase(claseFila1, selects);
    const elementosFila2 = listaDeClase(claseFila2, selects);



    return (
        <div className={styles.search_container}>
            <div className={styles.fila}>
                <select value={claseFila1} onChange={(e) => setClaseFila1(e.target.value)}>
                    <option value="" disabled hidden>Clase ...</option>
                    <option value="vino">Vinos</option>
                    <option value="proveedor">Proveedores</option>
                </select>
                <select value={elementoFila1} onChange={(e) => setElementoFila1(e.target.value)}>
                    <option value="" disabled hidden>Elementos disponibles</option>
                    {elementosFila1.map((item) => {
                        const id = item.vino_id ?? item.proveedor_id;
                        const label = item.vino_id ? `${item.nombre} (${item.marca})` : item.nombre;
                        return <option key={id} value={id}>{label}</option>;
                    })}
                </select>

                <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
                    <span style={{ 'color': 'rgba(180,180,200,)' }}>Inicio:</span>
                    <input
                        type="date"
                    >
                    </input>
                </div>
                <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
                    <span style={{ 'color': 'rgba(180,180,200,1)' }}>Fin:</span>
                    <input
                        type="date"
                    >
                    </input>
                </div>
            </div>


            <div className={styles.fila}>
                <select value={claseFila2} onChange={(e) => setClaseFila2(e.target.value)}>
                    <option value="" disabled hidden>Clase ...</option>
                    <option value="vino">Vinos</option>
                    <option value="proveedor">Proveedor</option>
                </select>
                <select value={elementoFila2} onChange={(e) => setElementoFila2(e.target.value)}>
                    <option value="" disabled hidden>Elementos disponibles</option>
                    {elementosFila2.map((item) => {
                        const id = item.vino_id ?? item.proveedor_id;
                        const label = item.vino_id ? `${item.nombre} (${item.marca})` : item.nombre;
                        return <option key={id} value={id}>{label}</option>;
                    })}
                </select>
                <button type="button" className={styles.search_del}
                    onClick={() => {
                        setClaseFila1("");
                        setClaseFila2("");
                        setElementoFila1("");
                        setElementoFila2("");
                    }}
                >Limpiar campos
                </button>
                <span style={{ 'color': 'rgba(180,180,200,0.4)' }}>{ }</span>

            </div>


        </div >

    )


}
