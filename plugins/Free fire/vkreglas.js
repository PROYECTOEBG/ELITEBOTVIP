









let handler = async(m, { user, isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner || user)) {
global.dfail('Admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `VK     OFF ${pesan}`
let teks = `${oi}\n`
teks += `_Reglas Generales_

1. Respeto: Todos los miembros deben respetarse entre sí, sin importar rango o experiencia.
2. Comunicación: La comunicación debe ser clara y respetuosa en todos los canales del clan.
3. Colaboración: Los miembros deben trabajar juntos para alcanzar los objetivos del clan.

_Reglas de Conducta_

1. No se tolerará el acoso, insultos o discriminación hacia otros miembros.
2. No se permitirá el spam, publicidad no autorizada o difusión de información falsa.
3. No se tolerará el uso de lenguaje ofensivo o inapropiado.
4. No se permitirá la difusión de contenido explícito, incluyendo:
- Pornografía
- Pornografía infantil
- Gore
- Contenido violento o sangriento
- Imágenes o videos explícitos
- Stickers o GIFs inapropiados

_Reglas de Juego_

1. Los miembros deben seguir las reglas del juego y no utilizar trucos o hacks.
2. Los miembros deben participar en eventos y actividades del clan de manera activa.
3. Los miembros deben contribuir al crecimiento y mejora del clan.

_Reglas de Liderazgo_

1. Los líderes deben ser justos y transparentes en sus decisiones.
2. Los líderes deben comunicar cambios y actualizaciones a los miembros.
3. Los líderes deben resolver conflictos de manera justa y rápida.

_Sanciones_

1. Advertencia verbal para infracciones menores.
2. Suspensión temporal para infracciones graves.
3. Expulsión permanente por infracciones repetidas o graves, incluyendo la difusión de contenido explícito.

_Proceso de Reclamaciones_

1. Los miembros pueden presentar reclamaciones a contacto que se llama valak.
2. Los líderes deben investigar y resolver reclamaciones de manera justa.
3. Los miembros pueden apelar decisiones a un líder superior.`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsf20 <mesaje>','fem20 <mesaje>']
handler.tags = ['group']
handler.command = /^(reglasvk)$/i
export default handler
