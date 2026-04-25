const queFechaEsHoy = () => {
    const hoy = new Date();
    const hoyString = hoy.toLocaleDateString();
    return hoyString;
}

const obtenerNumeroAleatorio = (min, max) => {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroAleatorio;
}

export { queFechaEsHoy, obtenerNumeroAleatorio };
