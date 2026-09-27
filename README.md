# Civeta · Demostración comercial

Landing independiente de una sola página para Civeta, Puerto Ordaz. No sustituye ni modifica civetavzla.com. Versión 1.0.0, preparada el 27 de septiembre de 2026.

## Incluye

- Identidad verde, crema y rojo basada en el logo proporcionado.
- Fotografías reales de @civeta.ve, guardadas localmente para evitar enlaces temporales de Instagram.
- Seis categorías de menú HTML, con una selección transcrita de la carta oficial.
- Carta completa descargada del dominio original, disponible en PDF.
- Galería de seis fotografías, ampliación, navegación con flechas y cierre con Escape.
- Navegación móvil, foco accesible, animaciones reducidas según preferencias del dispositivo.
- Selector de dos ubicaciones, mapas, indicaciones y WhatsApp.
- Sección de novedades vinculada a Instagram. No contiene campañas, promociones ni eventos inventados.
- Metadatos SEO y Open Graph de texto, favicon de marca y aviso discreto de demostración.

Los precios se conservan en euros, con IVA, tal como aparecen en la carta. No se convierten a dólares ni se calcula una tasa BCV. Los botones de pedido abren una conversación de WhatsApp; no envían mensajes automáticamente ni confirman pedidos.

## Editar

- `app/page.tsx`: textos, enlaces, fotografías y composición.
- `app/menu-data.ts`: categorías, productos y precios. El arreglo `campaigns` está vacío y puede recibir campañas reales confirmadas.
- `app/globals.css`: diseño y comportamiento responsive.
- `public/assets`: fotografías, fuentes locales y menú PDF.
- `app/layout.tsx`: título, descripción y metadatos.

## Ejecutar el proyecto

Requiere Node.js 22.13 o superior y pnpm. Conserva el archivo pnpm-lock.yaml.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Este proyecto utiliza el entorno Next/React de Sites con Vinext para Cloudflare Workers. Para crear su salida de producción:

```sh
pnpm build
```

El ZIP incluye el proyecto editable. No incluye `node_modules`, secretos, credenciales ni el historial Git.

## Publicación y contenido

La demo permanece separada del dominio real. `robots` está configurado como `noindex` para evitar que esta propuesta compita con el sitio oficial. Para convertirla en el sitio oficial deben confirmarse precios, horarios, fotografías de mayor resolución y autorización del negocio; después se actualizarán el origen de los metadatos y la indexación.

Los mapas dependen de Google Maps. Siempre se proporciona un enlace externo de indicaciones. WhatsApp utiliza el número proporcionado con el prefijo de Venezuela: +58 412 248 3825.

## Fuentes

Ver `FUENTES.md` para el origen de imágenes y contenido.
