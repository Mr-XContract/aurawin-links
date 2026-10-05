// Contador propio: recibe cada clic del hub y lo avisa por Telegram.
// Variables de entorno (Vercel > Settings > Environment Variables):
//   TELEGRAM_BOT_TOKEN   token que te da @BotFather
//   TELEGRAM_CHAT_ID     tu chat (o grupo/canal) donde llegan los avisos
//   ALLOWED_ORIGIN       (opcional) ej. https://links.aurawin.club — rechaza llamadas de otros sitios
//   NOTIFY_VIEWS         (opcional) "1" para avisar también cada visita al hub (puede ser mucho)

// Solo estos botones se aceptan (mismos ids que en config.js).
const LABELS = {
  web: 'Entrar a AURAWIN',
  telegram: 'Telegram',
  'whatsapp-canal': 'Canal de WhatsApp',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  'whatsapp-soporte': 'Soporte por WhatsApp',
  'email-soporte': 'Correo soporte',
  'email-franquicia': 'Correo franquicias',
};

// Freno básico por IP (en memoria, se reinicia con la función): 30 avisos por minuto.
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < 60000);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > 30;
}

const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const allowed = process.env.ALLOWED_ORIGIN;
  const origin = req.headers.origin || '';
  if (allowed && origin !== allowed) return res.status(403).end();

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  body = body || {};
  const type = body.type === 'view' ? 'view' : 'click';
  const id = String(body.id || '');
  if (type === 'click' && !LABELS[id]) return res.status(400).end();
  if (type === 'view' && process.env.NOTIFY_VIEWS !== '1') return res.status(204).end();

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (limited(ip)) return res.status(429).end();

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) return res.status(500).end();

  // Solo país (de la cabecera de Vercel) y hora; no se guarda ni se envía la IP.
  const country = req.headers['x-vercel-ip-country'] || '??';
  const hora = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota', hour12: false });
  const text = type === 'view'
    ? `👀 Visita al hub\n🌍 ${esc(country)} · ${esc(hora)}`
    : `🔔 Clic en <b>${esc(LABELS[id])}</b>\n🌍 ${esc(country)} · ${esc(hora)}`;

  try {
    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chat, text, parse_mode: 'HTML', disable_notification: type === 'view' }),
    });
    return res.status(r.ok ? 204 : 502).end();
  } catch (e) {
    return res.status(502).end();
  }
};
