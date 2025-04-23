export const formatearVersiculo = (texto) => {
    const capitulo = Math.floor(Math.random() * 10) + 1;      // 1 a 15
    const versiculo = Math.floor(Math.random() * 99) + 10; // 10 a 99
    return {capitulo, versiculo, texto, textoCompleto: `Jesucripto ${capitulo}:${versiculo} — “${texto}”`
    };
}