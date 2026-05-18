import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com"
const SMTP_PORT = Number(process.env.SMTP_PORT || 465)
const SMTP_SECURE = process.env.SMTP_SECURE !== "false"
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASSWORD = process.env.SMTP_PASSWORD
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || SMTP_USER

export async function POST(request: Request) {
  const body = await request.json()
  const name = String(body?.name || "").trim()
  const email = String(body?.email || "").trim()
  const message = String(body?.message || "").trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Todos los campos son obligatorios." }, { status: 400 })
  }

  if (!SMTP_USER || !SMTP_PASSWORD || !CONTACT_EMAIL) {
    return NextResponse.json(
      { error: "La configuración de correo electrónico no está completa." },
      { status: 500 }
    )
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  })

  const emailBody = `Nuevo mensaje de contacto desde el sitio web:\n\nNombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`

  try {
    await transporter.sendMail({
      from: `Teceba Mates <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuevo mensaje de contacto: ${name}`,
      text: emailBody,
      html: `
        <p>Nuevo mensaje de contacto desde el sitio web:</p>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    return NextResponse.json({ message: "Mensaje enviado correctamente." })
  } catch (error) {
    console.error("Error enviando correo:", error)
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Verificá la configuración del correo." },
      { status: 500 }
    )
  }
}
