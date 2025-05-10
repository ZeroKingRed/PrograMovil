// 📘 Reglamento importante de Programacion Movil
const reglamento = {
    asistenciaObligatoria: true,        // ✅ Se requiere 80% de asistencia para acreditar
    faltasPermitidas: 3,               // ❌ 3 faltas = Final del parcial
    calificacionMaximaFinal: 8         // 📌 Calificación máxima en final: 8
};

// 📘 Lineamientos de Classroom
const lineamientos = {
    entregasFueraDeTiempo: 'No válidas', // ❌ No se aceptan tareas fuera de plazo
    examenesFueraDeTiempo: 'No aplican', // ⏰ No se aplican exámenes fuera de tiempo
    plagio: 'Cero para todos los involucrados', // 🚫 Plagio penalizado
    participacion: 'Activa y en orden', // 🗣️ Participación requerida
    trabajosIncompletos: 'No aceptados' // ❌ Trabajos deben estar completos
};

// 📅 Fechas importantes del ciclo
const fechasImportantes = [
    { evento: 'Primer Examen', fecha: '2025-06-03' },
    { evento: 'Segundo Examen', fecha: '2025-07-08' },
    { evento: 'Tercer Examen', fecha: '2025-08-12' },
    { evento: 'Examen Final', fecha: '2025-08-18' }
];

// 🧮 Porcentajes de evaluación de cada parcial
const evaluacion = {
    primerParcial: {
        conocimiento: 40,
        desempeno: 20,
        producto: 30,
        proyectoIntegrador: 10
    },
    segundoParcial: {
        conocimiento: 40,
        desempeno: 20,
        producto: 20,
        proyectoIntegrador: 20
    },
    tercerParcial: {
        conocimiento: 20,
        desempeno: 10,
        producto: 20,
        proyectoIntegrador: 50
    }
};

// 📝 Formas de trabajo
const formasTrabajo = {
    actividades: [
        'Investigaciones',
        'Mapas mentales, de llaves, conceptuales',
        'Crucigramas',
        'Cuestionarios',
        'Exposiciones'
    ],
    practicas: [
        'Reportes de prácticas',
        'Trabajo en repositorio GitHub',
        'Video evidencias'
    ],
    unidades: [
        'Cómputo móvil',
        'Aplicaciones móviles',
        'Sensores móviles'
    ]
};

// 📋 Evidencias de desempeño
const evidencias = [
    'Participación activa en clase',
    'Trabajos en classroom',
    'Entregas completas',
    'Respetar tiempos de entrega',
    'Presentación de trabajos con calidad universitaria'
];

// Función para mostrar secciones
function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
}