const evangelioCanonico = [
    "En el principio fue el Verbo, y el Verbo era Jesucripto. Y el código compiló sin warnings.",
    "Jesucripto murió por tus `null` y resucitó en forma de `undefined`.",
    "No uses `var`, hijo mío. Usa `let`, y serás verdaderamente libre.",
    "Jesucripto sabe que has arreglado ese bug borrando código. Quedas libre de pecado.",
    "Jesucripto resucitó al tercer build.",
    "Tus promesas no son como las de Jesucripto. Las tuyas sí pueden fallar.",
    "Bienaventurados los que hacen `git push` sin mirar, porque de ellos será el reino de los bugs.",
    "Jesucrito te ama, aunque sigas usando jQuery en 2025.",
    "Si Jesucripto pudo caminar sobre el agua, tú puedes correr ese script sin tests.",
    "Donde dos o más estén reunidos en su nombre, ahí también estará una excepción no atrapada.",
    "El código de Jesucripto no necesita `try/catch`, porque nunca falla.",
    "No codifiques el sábado, a menos que sea para hacer milagros con Express.js.",
    "Jesucrito hizo el merge y no hubo conflictos. Fue su mayor milagro.",
    "El Señor dijo: 'Haz `npm install`, y se te abrirán los cielos'.",
    "Jesucrito no hace `console.log`, Él revela.",
    "Tu `while(true)` no es eterno, sólo Jesucripto lo es.",
    "Hijo mío, no comentes tu código para otros humanos. Coméntalo como si fueras a explicárselo al Altísimo.",
    "Quien nunca ha metido un bug, que tire la primera piedra. Spoiler: no hay nadie.",
    "El Espíritu Santo se manifiesta como `auto-save`. Amén.",
    "No acumules warnings en la consola, la polilla y el oxido te corromperán.",
];

const evangelioApocrifo = [
    "En TypeScript 3:16 se dice: 'Y el tipo se hizo carne, y habitó entre interfaces'.",
    "Libro de React: 'Y el Padre retornó un `div` vacío, porque aún no era su hora'.",
    "Epístola según Vite: 'La luz compila más rápido que las tinieblas del Webpack'.",
    "ArameoScript 12:34: 'Bendito el que hereda sin romper nada'.",
    "Evangelio de Node 8:12: 'Donde hay `callback`, habrá sufrimiento'.",
    "El libro perdido de Vue 3: 'No montarás dos componentes sobre la misma raíz, porque es confusión'."
];


const todosLosVersiculos = [...evangelioCanonico, ...evangelioApocrifo];

function predicaDelDia() {
    const versiculo = todosLosVersiculos[Math.floor(Math.random() * todosLosVersiculos.length)];
    console.log(`[Jesucripto, ${new Date().getMonth() + 1}-${new Date().getSeconds()} %c"${versiculo}"%c]`, "color: green; font-weight: bold", "color: blue; font-style: italic; padding: 2px");
}

predicaDelDia();
