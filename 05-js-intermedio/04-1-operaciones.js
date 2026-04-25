const queFechaEsHoy = () => {
    const hoy = new Date();
    const hoyString = hoy.toLocaleDateString();

    const mes = hoy.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por eso sumamos 1

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
