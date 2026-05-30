import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  email: z.string().email(),
  newsletter: z.boolean().optional().default(true),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, newsletter } = schema.parse(body);

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

      // Notify admin
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: adminEmail,
        subject: `[Ludzo] New Waitlist Signup: ${email}`,
        html: `
          <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:20px;background:#0d0816;color:#f5f0ff;border-radius:12px;border:1px solid rgba(168,85,247,0.2)">
            <h2 style="color:#a855f7;margin-bottom:16px;">New Waitlist Signup</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Newsletter:</strong> ${newsletter ? "Yes" : "No"}</p>
            <p><strong>Time:</strong> ${new Date().toISOString()}</p>
          </div>
        `,
      });

      // Confirm to user
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: email,
        subject: "You're on the Ludzo waitlist! 🎮",
        html: `
          <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:32px;background:#0d0816;color:#f5f0ff;border-radius:12px;border:1px solid rgba(168,85,247,0.3)">
            <h1 style="color:#a855f7;font-size:28px;margin-bottom:8px;">You're In! 🎮</h1>
            <p style="color:rgba(245,240,255,0.7);margin-bottom:20px;">Welcome to the Ludzo waitlist. You'll be among the first to experience the next-generation Telegram gaming platform.</p>
            <p style="color:rgba(245,240,255,0.7);">While you wait, join our Telegram channel for sneak peeks and announcements:</p>
            <a href="https://t.me/LudzoOfficial" style="display:inline-block;margin-top:16px;padding:12px 24px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:white;text-decoration:none;border-radius:8px;font-weight:600;">
              Join Telegram Channel
            </a>
            <p style="margin-top:24px;color:rgba(245,240,255,0.4);font-size:12px;">Launching Q3 2025 — selixo.in</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
