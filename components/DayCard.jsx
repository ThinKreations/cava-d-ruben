import React from 'react';

const DayCard = ({ id = "000", fecha = "DD/MM/AAAA", productos = "Sin productos", proveedor = "Desconocido" }) => {
    return (
        <div className="border border-black rounded-lg p-4 mb-4 bg-[#e0e0e0] font-mono text-sm shadow-sm">
            <p className="font-bold mb-2 text-base">Pedido #{id}</p>
            <p className="mb-1"><span className="font-semibold">Fecha estimada:</span> {fecha}</p>
            <p className="mb-1"><span className="font-semibold">Productos:</span> {productos}</p>
            <p><span className="font-semibold">Proveedor:</span> {proveedor}</p>
        </div>
    );
};

export default DayCard;