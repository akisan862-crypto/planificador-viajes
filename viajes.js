// viajes.js

const destinos = [];

const PRECIOS_DESTINO = {
    "Paris": 500,
    "Londres": 400,
    "New York": 600
};

const PRECIOS_TRANSPORTE = {
    "Avión": 200,
    "Tren": 100
};

const calcularCosto = (destino, transporte, personas = 1) => {
    const costoBase = PRECIOS_DESTINO[destino] || 0;
    const costoTransporte = PRECIOS_TRANSPORTE[transporte] || 0;
    
    let costoTotal = (costoBase + costoTransporte) * personas;

    if (personas >= 3) {
        costoTotal *= 0.90; // Aplica un 10% de descuento
    }

    return costoTotal;
};

export const registrarDestino = (destino, fecha, transporte, personas = 1) => {
    const nuevoViaje = {
        destino, 
        fecha,
        transporte,
        personas, 
        costo: calcularCosto(destino, transporte, personas)
    };

    destinos.push(nuevoViaje);
};

export const mostrarItinerario = () => {
    for (let i = 0; i < destinos.length; i++) {
        const viaje = destinos[i];
        
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Pasajeros: ${viaje.personas}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");
    }
};