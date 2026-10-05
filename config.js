// Edita SOLO este archivo para cambiar los enlaces. Deja href vacío ("") para ocultar un botón.
window.HUB_CONFIG = {
  name: "AURAWIN",
  tagline: "Canales oficiales",
  links: [
    { id: "web", label: "Entrar a AURAWIN", desc: "La plataforma oficial", href: "https://aurawin.club", icon: "web", primary: true, utm: true },
    { id: "telegram", label: "Telegram", desc: "Comunidad y anuncios", href: "https://t.me/aurawin", icon: "telegram" },
    { id: "whatsapp", label: "WhatsApp", desc: "Soporte y avisos", href: "https://wa.me/message/AURAWIN", icon: "whatsapp" },
    { id: "instagram", label: "Instagram", desc: "Novedades y contenido", href: "https://instagram.com/aurawin", icon: "instagram" },
    // PENDIENTE: pega aquí el enlace del perfil de TikTok (oculto mientras esté vacío).
    { id: "tiktok", label: "TikTok", desc: "Videos y sorteos", href: "", icon: "tiktok" },
    { id: "email-soporte", label: "Soporte", desc: "soporte@aurawin.club", href: "mailto:soporte@aurawin.club", icon: "mail" },
    { id: "email-franquicia", label: "Franquicias", desc: "franquicia@aurawin.club", href: "mailto:franquicia@aurawin.club", icon: "mail" }
  ],
  // Conteo de clics: crea una cuenta gratis en goatcounter.com, elige un código
  // (ej. "aurawin") y pégalo aquí. Verás los clics por botón en
  // https://TU-CODIGO.goatcounter.com. Vacío = no se envía nada.
  analytics: { goatcounter: "" },
  // Parámetros UTM que se agregan SOLO a los enlaces de tu propia web (utm: true),
  // para que tu plataforma sepa de qué botón llegó cada visita.
  utm: { source: "hub", medium: "linkinbio" },
  // true = muestra un contador local de clics al final (solo para probar).
  debug: false,
  disclaimer: "Solo mayores de 18 años. Participar implica riesgo de pérdida; no hay ganancias garantizadas. Juega con responsabilidad y según las leyes de tu país."
};
