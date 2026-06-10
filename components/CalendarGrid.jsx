import React from 'react';

const CalendarGrid = ({ eventos = [], año = 2026, mes = 4 }) => {
    const diasSemana = ['Domingazo', 'Luneta', 'Martazo', 'Mimiercoles', 'Juevebes', 'Viviernes', 'Sabadazo'];
    const nombresMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const totalDiasMes = new Date(año, mes + 1, 0).getDate();

    const diasMes = Array.from({ length: totalDiasMes }, (_, i) => i + 1);

    const diaInicio = new Date(año, mes, 1).getDay();
    const espaciosVacios = Array(diaInicio).fill(null);

    const tienePedido = (diaActual) => {
        return eventos.some(evento => {
            if (!evento.fecha) return false;
            const diaDelEvento = parseInt(evento.fecha.split('/')[0], 10);
            return diaDelEvento === diaActual;
        });
    };

    return (
        <div className="calendar-container">
            <div className="calendar-month">
                {nombresMeses[mes]} {año}
            </div>
            <div className="calendar-weekdays">
                {diasSemana.map((dia, index) => (
                    <div key={`header-${index}`} className="weekday">
                        {dia}
                    </div>
                ))}
            </div>

            <div className="calendar-days">
                {espaciosVacios.map((_, index) => (
                    <div key={`empty-${index}`} className="empty-cell"></div>
                ))}

                {diasMes.map((dia) => {
                    const pintarVerde = tienePedido(dia);

                    return (
                        <div
                            key={`dia-${dia}`}
                            className={pintarVerde ? "day-cell day-event" : "day-cell"}
                        >
                            {dia}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CalendarGrid;