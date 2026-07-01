const crearTarea = require('./task');

test('Debe crear una tarea pendiente', () => {
    const tarea = crearTarea('Hacer actividad de Integración Continua');

    expect(tarea.nombre).toBe('Hacer actividad de Integración Continua');
    expect(tarea.completada).toBe(false);
});
