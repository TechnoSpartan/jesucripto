# Jesucripto

## Description

**Jesucripto** comparte versículos bíblicos y frases inspiradoras cada hora. Está diseñado para ser fácil de usar y personalizable, permitiendo a los usuarios agregar sus propios versículos y frases. Es una herramienta ideal para aquellos que buscan inspiración diaria o desean compartir mensajes positivos con su comunidad.

## Cron Job

Este cron imprimirá una prédica de Jesucripto cada hora, todos los días, en la consola. Lo asumo ejecutando un script tipo predica.js.

Abre el crontab:

```bash
crontab -e
```

Agrega esta línea:

```bash
0 * * * * /usr/bin/node /ruta/al/script/predica.js >> /ruta/al/log/jesucripto.log 2>&1
```
(Sustituye la ruta al script y al log como corresponda. O deja el log vacío si quieres que `Jesucripto` hable solo en la terminal.)

## Contribuciones

Si quieres contribuir, hazlo de la siguiente manera:

- Forkea el repo
- Crea una rama con tu feature (`git checkout -b feature/versículo`)
- Realiza tus cambios y haz commit (`git commit -m 'Agregando versículo'`)
- Haz push a la rama (`git push origin feature/versículo`)
- Abre un Pull Request
- Espera a que lo revise y lo acepte. Si no lo acepta, no te preocupes, es parte del proceso de aprendizaje. Recuerda que Jesucripto es un proyecto en constante evolución y siempre hay espacio para mejorar.