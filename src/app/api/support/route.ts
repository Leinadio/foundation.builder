import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { message, user } = await request.json();

    const userInfo = user ? `
De : ${user.name}
Email : ${user.email}

` : '';

    const emailContent = `${userInfo}Message :
${message}`;

    const data = await resend.emails.send({
      from: 'Support <support@womi-validateidea.com>',
      to: ['danieldupont.contact@gmail.com'],
      subject: 'Nouveau message de support',
      text: emailContent,
    });
    console.log('data : ', data);

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
