import { NextResponse } from 'next/server';

import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, businessName, email, phone } = body;

  try {
    await resend.emails.send({
      from: 'KurlClub <onboarding@resend.dev>',
      to: process.env.EMAIL_RECEIVER!,
      subject: 'New Demo Booking Request',
      html: `
        <h2>New Demo Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Business:</b> ${businessName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
