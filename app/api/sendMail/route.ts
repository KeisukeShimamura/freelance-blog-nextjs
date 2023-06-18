import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { MailDataRequired } from '@sendgrid/mail';
import { EmailData } from '@sendgrid/helpers/classes/email-address';

export async function POST(req: NextRequest) {
  sgMail.setApiKey(process.env.SEND_GRID_API_KEY as string);
  const json = await req.json();
  const msg: MailDataRequired = {
    to: process.env.MAIL_TO,
    from: process.env.MAIL_FROM as EmailData,
    subject: 'ブログより問い合わせがありました',
    // @ts-ignore
    text: `お名前：${json.name}\nメールアドレス：${json.email}\n問い合わせ内容：\n${json.message}`,
  };

  try {
    await sgMail.send(msg);
    return new NextResponse(null, { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse(null, { status: 500 });
  }
}
