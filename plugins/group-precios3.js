// Código Hecho Por Niño Piña wa.me/50557865603
let handler = async (m, { conn }) => {
// React con un emoji al mensaje
m.react('💫');
// Mensaje que se enviará
const message = "*AQUI ESTAN LOS PRECIOS.*\n\n> Continuación De los Precios1💫";
if (m.isGroup) {
// URL de la imagen
const imageUrl = 'https://i.ibb.co/h7MpyhP/file.jpg'; // Cambia esta URL por la de la imagen que deseas enviar
// Envía el mensaje
await conn.sendMessage(m.chat, { text: message }, { quoted: m });
// Envía la imagen
await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: message }, { mimetype: 'image/jpeg' });
}
}
handler.help = ['precios3'];
handler.tags = ['main'];
handler.command = ['precios3'];
handler.group = true;
export default handler;