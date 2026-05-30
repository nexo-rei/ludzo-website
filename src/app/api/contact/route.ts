import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  subject: z.string().min(1).max(200),
  message: z.string().min(10).max(5000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const adminEmail = process.env.ADMIN_EMAIL;
    const smtpHost = process.env.SMTP_HOST;

    if (smtpHost && adminEmail) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: adminEmail,
        replyTo: data.email,
        subject: `[Ludzo Contact] ${data.subject} — from ${data.name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0d0816;color:#f5f0ff;border-radius:12px;border:1px solid rgba(168,85,247,0.2)">
            <h2 style="color:#a855f7;margin-bottom:20px;">New Contact Message</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:rgba(245,240,255,0.5);width:80px;">Name</td><td style="padding:8px 0;color:#f5f0ff;">${data.name}</td></tr>
              <tr><td style="padding:8px 0;color:rgba(245,240,255,0.5);">Email</td><td style="padding:8px 0;"><a href="mailto:${data.email}" style="color:#a855f7;">${data.email}</a></td></tr>
              <tr><td style="padding:8px 0;color:rgba(245,240,255,0.5);">Subject</td><td style="padding:8px 0;color:#f5f0ff;">${data.subject}</td></tr>
            </table>
            <div style="margin-top:16px;padding:16px;background:rgba(168,85,247,0.05);border-radius:8px;border:1px solid rgba(168,85,247,0.15);">
              <p style="color:rgba(245,240,255,0.7);white-space:pre-wrap;margin:0;">${data.message}</p>
            </div>
            <p style="margin-top:16px;color:rgba(245,240,255,0.3);font-size:12px;">Received: ${new Date().toISOString()}</p>
          </div>
        `,
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: data.email,
        subject: "We received your message — Ludzo",
        html: `
          <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:32px;background:#0d0816;color:#f5f0ff;border-radius:12px;border:1px solid rgba(168,85,247,0.3)">
            <h2 style="color:#a855f7;">Thanks, ${data.name}!</h2>
            <p style="color:rgba(245,240,255,0.7);">We've received your message about "<strong>${data.subject}</strong>" and will respond within 24 hours.</p>
            <p style="color:rgba(245,240,255,0.4);font-size:12px;margin-top:24px;">— The Ludzo Team · selixo.in</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
