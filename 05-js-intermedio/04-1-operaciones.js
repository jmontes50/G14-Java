const queFechaEsHoy = () => {
    const hoy = new Date();
    const hoyString = hoy.toLocaleDateString();
    return hoyString;
}

const obtenerNumeroAleatorio = (min, max) => {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroAleatorio;
}

const saludar = (nombre) => {
    return `Hola, ${nombre}! Bienvenido al curso de JavaScript Intermedio.`;
}

//default -> x defecto, solo puede haber una exportación por default en un módulo
export default saludar;

export { queFechaEsHoy, obtenerNumeroAleatorio };
