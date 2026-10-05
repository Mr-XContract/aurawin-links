# aurawin-hub

Hub de enlaces (link-in-bio) independiente. HTML estático, sin build ni dependencias.
No comparte código con la plataforma AURAWIN.

- Edita `config.js` para cambiar enlaces, textos y aviso legal.
- Deploy: Vercel/Netlify/Cloudflare Pages/GitHub Pages — apunta a la raíz del repo, sin comando de build.
- La página es idéntica para todos los visitantes (sin detección de bots ni redirecciones condicionales).

## Contadores (guardados, apagados por ahora)

Todo el código de conteo está listo pero **desactivado**: el hub no envía nada a nadie.
Para activarlo, edita `analytics` en `config.js`:

- `own: true` — contador propio: cada clic llama a `api/hit.js` (función serverless de Vercel) y te llega un aviso por Telegram.
  Requiere las variables `TELEGRAM_BOT_TOKEN` y `TELEGRAM_CHAT_ID` (ver `.env.example`). El token lo da @BotFather.
- `umami: "WEBSITE-ID"` — Umami Cloud (gratis).
- `goatcounter: "codigo"` — GoatCounter.
- `debug: true` — muestra un contador local de clics en la página (solo para pruebas).
