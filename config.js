// Edita SOLO este archivo para cambiar los enlaces. Deja href vacío ("") para ocultar un botón.
window.HUB_CONFIG = {
  name: "AURAWIN",
  tagline: "Canales oficiales",
  links: [
    { id: "web", label: "Entrar a AURAWIN", desc: "La plataforma oficial", href: "https://aurawin.club", icon: "web", primary: true, utm: true },
    { id: "telegram", label: "Telegram", desc: "Comunidad y anuncios", href: "https://t.me/+IApgh7grRcJlOTJh", icon: "telegram" },
    { id: "whatsapp-canal", label: "Canal de WhatsApp", desc: "Anuncios y novedades", href: "https://whatsapp.com/channel/0029VbDVlRnGU3BK4roqdw3W", icon: "whatsapp" },
    { id: "instagram", label: "Instagram", desc: "Novedades y contenido", href: "https://instagram.com/aurawinclub", icon: "instagram" },
    { id: "tiktok", label: "TikTok", desc: "Videos y sorteos", href: "https://www.tiktok.com/@aurawinclub", icon: "tiktok" },
    { id: "email-soporte", label: "Soporte", desc: "soporte@aurawin.club", href: "mailto:soporte@aurawin.club", icon: "mail" },
    { id: "email-franquicia", label: "Franquicias", desc: "franquicia@aurawin.club", href: "mailto:franquicia@aurawin.club", icon: "mail" }
  ],
  // own: true (ACTIVAR DESPUÉS) = avisa cada clic por Telegram vía /api/hit (ver README).
  // Conteo externo opcional (vacío = no se envía nada).
  // umami: crea una cuenta gratis en cloud.umami.is, agrega un sitio y pega aquí
  //   su "Website ID" (un UUID). Verás visitas y clics por botón en tu panel privado.
  // goatcounter: alternativa; pega el código de tu cuenta de goatcounter.com.
  analytics: { own: false, umami: "", goatcounter: "" },
  // Parámetros UTM que se agregan SOLO a los enlaces de tu propia web (utm: true),
  // para que tu plataforma sepa de qué botón llegó cada visita.
  utm: { source: "hub", medium: "linkinbio" },
  // true = muestra un contador local de clics al final (solo para probar).
  debug: false,
  disclaimer: "Solo mayores de 18 años. Participar implica riesgo de pérdida; no hay ganancias garantizadas. Juega con responsabilidad y según las leyes de tu país."
};
