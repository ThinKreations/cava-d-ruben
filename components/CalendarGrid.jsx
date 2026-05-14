import styles from '../styles/globals.css';


const CalendarGrid = ({ eventos = [], año = 2026, mes = 5 }) => {
    const diasSemana = ['Domingazo', 'L', 'M', 'Mimiercoles', 'Juevebes', 'V', 'S'];
    const nombresMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const totalDiasMes = new Date(año, mes + 1, 0).getDate();
    const diaMes = Array.from({ length: totalDiasMes }, (_, i) => i + 1);
    const diaInicio = newDate(año, mes, 1).getDay();
    const espaciosVacios = Array(diaInicio).fill(null);
};

return (
    <div className="calendar-container">
        <div className="calendarMonth>" >
        </div>
    </div>
)

export default CalendarGrid;