// app.js

import { registrarDestino, mostrarItinerario } from './viajes.js';

const iniciarApp = () => {
    // Viaje de 1 persona (usa el parámetro por defecto)
    registrarDestino("Paris", "2026-06-15", "Avión");
    
    // Viaje de 2 personas (no aplica descuento)
    registrarDestino("Londres", "2026-07-01", "Tren", 2);
    
    // Viaje de 4 personas (aplica el 10% de descuento)
    registrarDestino("New York", "2026-12-20", "Avión", 4);

    mostrarItinerario();
};

iniciarApp();